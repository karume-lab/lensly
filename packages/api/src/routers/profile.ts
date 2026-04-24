import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";
import { ProfileSchema } from "./types";

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
      const profile = await schema.Profile.findOne({ userId: user.id });

      if (!profile) {
        // Return sensible defaults for a user who has not onboarded yet
        return {
          userId: user.id,
          companyName: undefined,
          role: undefined,
          defaultWeightSkills: 50,
          defaultWeightExperience: 30,
          defaultWeightEducation: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }

      return {
        userId: profile.userId,
        companyName: profile.companyName,
        role: profile.role,
        defaultWeightSkills: profile.defaultWeightSkills,
        defaultWeightExperience: profile.defaultWeightExperience,
        defaultWeightEducation: profile.defaultWeightEducation,
        createdAt: profile.createdAt,
        updatedAt: profile.updatedAt,
      };
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
        {
          $set: {
            companyName: body.companyName,
            role: body.role,
            defaultWeightSkills: body.defaultWeightSkills,
            defaultWeightExperience: body.defaultWeightExperience,
            defaultWeightEducation: body.defaultWeightEducation,
          },
        },
        { new: true, upsert: true },
      );

      return {
        userId: profile.userId,
        companyName: profile.companyName,
        role: profile.role,
        defaultWeightSkills: profile.defaultWeightSkills,
        defaultWeightExperience: profile.defaultWeightExperience,
        defaultWeightEducation: profile.defaultWeightEducation,
        createdAt: profile.createdAt,
        updatedAt: profile.updatedAt,
      };
    },
    {
      body: t.Object({
        companyName: t.Optional(t.String()),
        role: t.Optional(t.String()),
        defaultWeightSkills: t.Number(),
        defaultWeightExperience: t.Number(),
        defaultWeightEducation: t.Number(),
      }),
      response: ProfileSchema,
    },
  );
