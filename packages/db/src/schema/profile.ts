import { type Model, model, models, Schema } from "mongoose";

export interface IProfile {
  userId: string;
  companyName?: string;
  role?: string;
  defaultWeightSkills: number;
  defaultWeightExperience: number;
  defaultWeightEducation: number;
  createdAt: Date;
  updatedAt: Date;
}

export const ProfileSchema = new Schema<IProfile>(
  {
    userId: { type: String, required: true, unique: true },
    companyName: { type: String },
    role: { type: String },
    defaultWeightSkills: { type: Number, default: 50 },
    defaultWeightExperience: { type: Number, default: 30 },
    defaultWeightEducation: { type: Number, default: 20 },
  },
  { timestamps: true },
);

export const Profile: Model<IProfile> = models.Profile || model<IProfile>("Profile", ProfileSchema);
export const profile = Profile;
