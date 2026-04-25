import { ProfileSchema } from "@repo/api/routers/types";
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";

export const profileRouter = new Elysia({ prefix: "/profile" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get(
    "/",
    async ({ user }) => {
      let profile = await schema.Profile.findOne({ userId: user.id });
      if (!profile) {
        profile = new schema.Profile({
          userId: user.id,
          defaultWeightSkills: 50,
          defaultWeightExperience: 30,
          defaultWeightEducation: 20,
          emailAlerts: true,
          browserAlerts: true,
          aiInsights: true,
          autoShortlist: false,
          theme: "system",
        });
        await profile.save();
      }
      return profile;
    },
    {
      response: ProfileSchema,
    },
  )
  .put(
    "/",
    async ({ body, user }) => {
      const { name, email, ...profileData } = body;

      // Update user info if name or email is provided
      if (name || email) {
        await schema.User.updateOne({ id: user.id }, { $set: { name, email } });
      }

      const profile = await schema.Profile.findOneAndUpdate(
        { userId: user.id },
        { $set: profileData },
        { new: true, upsert: true },
      );

      await schema.Activity.create({
        userId: user.id,
        action: "PROFILE_UPDATED",
        entityId: user.id,
        entityType: "user",
      });

      return profile;
    },
    {
      body: t.Partial(
        t.Object({
          name: t.String(),
          email: t.String(),
          companyName: t.String(),
          role: t.String(),
          defaultWeightSkills: t.Number(),
          defaultWeightExperience: t.Number(),
          defaultWeightEducation: t.Number(),
          emailAlerts: t.Boolean(),
          browserAlerts: t.Boolean(),
          aiInsights: t.Boolean(),
          autoShortlist: t.Boolean(),
          theme: t.String(),
        }),
      ),
      response: ProfileSchema,
    },
  );
