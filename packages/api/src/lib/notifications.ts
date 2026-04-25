import { schema } from "@repo/db";

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
      console.log(
        `[EMAIL SIMULATION] Sending notification to ${user.email}: ${payload.title} - ${payload.message}`,
      );
      // In a real implementation, you would use Resend here:
      /*
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Lensly <notifications@lensly.ai>',
          to: user.email,
          subject: payload.title,
          text: payload.message,
        });
      }
      */
    }
  }

  // Browser notifications are handled via polling/SSE in the frontend
};
