import { ActivitySchema } from "@repo/api/routers/types";
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";

export const activityRouter = new Elysia({ prefix: "/activities" })
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
      const activities = await schema.Activity.find({ userId: user.id }).sort({ createdAt: -1 });
      return activities.map((a) => ({
        id: a._id.toString(),
        title: a.action,
        subtitle: `${a.entityType}: ${a.entityId}`,
        timestamp: (a.createdAt || new Date()).toLocaleString(),
        type: "user",
      }));
    },
    {
      response: t.Array(ActivitySchema),
    },
  )
  .post(
    "/",
    async ({ body, user }) => {
      const activity = new schema.Activity({ ...body, userId: user.id });
      await activity.save();
      return {
        id: activity._id.toString(),
        title: activity.action,
        subtitle: `${activity.entityType}: ${activity.entityId}`,
        timestamp: (activity.createdAt || new Date()).toLocaleString(),
        type: "user",
      };
    },
    {
      body: t.Object({
        action: t.String(),
        entityId: t.String(),
        entityType: t.String(),
        metadata: t.Optional(t.Any()),
      }),
      response: ActivitySchema,
    },
  );
