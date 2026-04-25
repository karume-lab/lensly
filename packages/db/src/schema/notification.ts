import { type Model, model, models, Schema } from "mongoose";

export interface INotification {
  userId: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const NotificationSchema = new Schema<INotification>(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ["info", "success", "warning", "error"], default: "info" },
    read: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Notification: Model<INotification> =
  models.Notification || model<INotification>("Notification", NotificationSchema);
export const notification = Notification;
