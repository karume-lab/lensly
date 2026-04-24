import type mongoose from "mongoose";
import { type Model, model, models, Schema } from "mongoose";

export interface IScreeningResult {
  applicantId: mongoose.Types.ObjectId;
  jobId: mongoose.Types.ObjectId;
  overallScore: number;
  skillScore: number;
  experienceScore: number;
  educationScore: number;
  relevanceScore: number;
  strengths: string[];
  gaps: string[];
  aiRecommendation: string;
  aiReasoning?: string;
  processedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const ScreeningResultSchema = new Schema<IScreeningResult>(
  {
    applicantId: {
      type: Schema.Types.ObjectId,
      ref: "Applicant",
      required: true,
      unique: true,
    },
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    overallScore: { type: Number, required: true },
    skillScore: { type: Number, required: true },
    experienceScore: { type: Number, required: true },
    educationScore: { type: Number, required: true },
    relevanceScore: { type: Number, required: true },
    strengths: [{ type: String }],
    gaps: [{ type: String }],
    aiRecommendation: { type: String, required: true },
    aiReasoning: { type: String },
    processedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const ScreeningResult: Model<IScreeningResult> =
  models.ScreeningResult || model<IScreeningResult>("ScreeningResult", ScreeningResultSchema);
export const screeningResult = ScreeningResult;
