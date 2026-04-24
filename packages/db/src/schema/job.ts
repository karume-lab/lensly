import { type Model, model, models, Schema } from "mongoose";

export interface IJob {
  userId: string;
  title: string;
  department: string;
  seniority: string;
  description: string;
  requiredSkills: string[];
  weightSkills: number;
  weightExperience: number;
  weightEducation: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export const JobSchema = new Schema<IJob>(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    seniority: { type: String, required: true },
    description: { type: String, required: true },
    requiredSkills: [{ type: String }],
    weightSkills: { type: Number, required: true },
    weightExperience: { type: Number, required: true },
    weightEducation: { type: Number, required: true },
    status: { type: String, required: true, default: "Draft" },
  },
  { timestamps: true },
);

export const Job: Model<IJob> = models.Job || model<IJob>("Job", JobSchema);
export const job = Job;
