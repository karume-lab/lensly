import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia } from "elysia";

export const notificationRouter = new Elysia({ prefix: "/notifications" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get("/", async ({ user }) => {
    const notifications = await schema.Notification.find({ userId: user.id })
      .sort({ createdAt: -1 })
      .limit(50);
    return notifications;
  })
  .put("/:id/read", async ({ params }) => {
    const notification = await schema.Notification.findByIdAndUpdate(
      params.id,
      { $set: { read: true } },
      { new: true },
    );
    return notification;
  })
  .put("/read-all", async ({ user }) => {
    await schema.Notification.updateMany(
      { userId: user.id, read: false },
      { $set: { read: true } },
    );
    return { success: true };
  });
