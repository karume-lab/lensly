import { schema } from "@repo/db";
import { Resend } from "resend";

export interface NotificationPayload {
  userId: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

export const sendNotification = async (payload: NotificationPayload) => {
  // 1. Record in database
  const notification = new schema.Notification({
    userId: payload.userId,
    title: payload.title,
    message: payload.message,
    type: payload.type,
  });
  await notification.save();

  // 2. Check user profile for notification preferences
  const profile = await schema.Profile.findOne({ userId: payload.userId });
  if (!profile) return;

  // 3. Send email if enabled
  if (profile.emailAlerts) {
    const user = await schema.User.findOne({ id: payload.userId });
    if (user?.email) {
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Lensly <notifications@lensly.ai>",
          to: user.email,
          subject: payload.title,
          text: payload.message,
        });
        console.log(`Sent email notification to ${user.email}`);
      } else {
        console.warn("RESEND_API_KEY is not set. Could not send email notification.");
      }
    }
  }

  // Browser notifications are handled via polling/SSE in the frontend
};
