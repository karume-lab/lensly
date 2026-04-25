import type mongoose from "mongoose";
import { type Model, model, models, Schema } from "mongoose";

export interface IApplicant {
  jobId: mongoose.Types.ObjectId;
  name: string;
  email?: string;
  source: string;
  originalFilename?: string;
  resumeUrl?: string;
  rawText?: string;
  structuredData?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    headline?: string;
    bio?: string;
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
    skills?: {
      name: string;
      level: string;
      yearsOfExperience: number;
    }[];
    languages?: {
      name: string;
      proficiency: string;
    }[];
    certifications?: {
      name: string;
      issuer: string;
      issueDate: string;
    }[];
    projects?: {
      name: string;
      description: string;
      technologies: string[];
      role: string;
      link: string;
      startDate: string;
      endDate: string;
    }[];
    availability?: {
      status: string;
      type: string;
      startDate: string;
    };
    socialLinks?: {
      linkedin?: string;
      github?: string;
      portfolio?: string;
    };
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
    originalFilename: { type: String },
    resumeUrl: { type: String },
    rawText: { type: String },
    structuredData: {
      firstName: String,
      lastName: String,
      email: String,
      headline: String,
      bio: String,
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
      skills: [
        {
          name: String,
          level: String,
          yearsOfExperience: Number,
        },
      ],
      languages: [
        {
          name: String,
          proficiency: String,
        },
      ],
      certifications: [
        {
          name: String,
          issuer: String,
          issueDate: String,
        },
      ],
      projects: [
        {
          name: String,
          description: String,
          technologies: [String],
          role: String,
          link: String,
          startDate: String,
          endDate: String,
        },
      ],
      availability: {
        status: { type: String },
        type: { type: String },
        startDate: { type: String },
      },
      socialLinks: {
        linkedin: { type: String },
        github: { type: String },
        portfolio: { type: String },
      },
      location: String,
    },
    status: { type: String, required: true, default: "Pending_Screening" },
  },
  { timestamps: true },
);

export const Applicant: Model<IApplicant> =
  models.Applicant || model<IApplicant>("Applicant", ApplicantSchema);
export const applicant = Applicant;
