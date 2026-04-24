import { type Model, model, models, Schema } from "mongoose";

export interface IActivity {
  userId: string;
  action: string;
  entityId: string;
  entityType: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export const ActivitySchema = new Schema<IActivity>(
  {
    userId: { type: String, required: true },
    action: { type: String, required: true },
    entityId: { type: String, required: true },
    entityType: { type: String, required: true },
    metadata: { type: Schema.Types.Mixed },
  },
  { timestamps: true },
);

export const Activity: Model<IActivity> =
  models.Activity || model<IActivity>("Activity", ActivitySchema);
export const activity = Activity;
