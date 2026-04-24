import type mongoose from "mongoose";
import { type Model, model, models, Schema } from "mongoose";

export interface IApplicant {
  jobId: mongoose.Types.ObjectId;
  name: string;
  email?: string;
  source: string;
  resumeUrl?: string;
  rawText?: string;
  structuredData?: {
    education?: {
      institution?: string;
      degree?: string;
      field?: string;
      year?: number;
    }[];
    experience?: {
      company?: string;
      role?: string;
      duration?: string;
      description?: string;
    }[];
    skills?: string[];
    location?: string;
  };
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export const ApplicantSchema = new Schema<IApplicant>(
  {
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    name: { type: String, required: true },
    email: { type: String },
    source: { type: String, required: true },
    resumeUrl: { type: String },
    rawText: { type: String },
    structuredData: {
      education: [
        {
          institution: String,
          degree: String,
          field: String,
          year: Number,
        },
      ],
      experience: [
        {
          company: String,
          role: String,
          duration: String,
          description: String,
        },
      ],
      skills: [String],
      location: String,
    },
    status: { type: String, required: true, default: "Pending_Screening" },
  },
  { timestamps: true },
);

export const Applicant: Model<IApplicant> =
  models.Applicant || model<IApplicant>("Applicant", ApplicantSchema);
export const applicant = Applicant;
