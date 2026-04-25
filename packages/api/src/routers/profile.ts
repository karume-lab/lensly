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
      const profile = await schema.Profile.findOneAndUpdate(
        { userId: user.id },
        { $set: body },
        { new: true, upsert: true },
      );
      return profile;
    },
    {
      body: t.Partial(
        t.Object({
          companyName: t.String(),
          role: t.String(),
          defaultWeightSkills: t.Number(),
          defaultWeightExperience: t.Number(),
          defaultWeightEducation: t.Number(),
        }),
      ),
      response: ProfileSchema,
    },
  );
