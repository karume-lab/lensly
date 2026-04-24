import { z } from "zod";

export const CreateApplicantSchema = z.object({
  jobId: z.string().min(1, "Job ID is required"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  source: z.string().min(1, "Source is required"),
  resumeUrl: z.string().url("Invalid resume URL").optional(),
  rawText: z.string().optional(),
});

export const UpdateApplicantStatusSchema = z.object({
  status: z.enum([
    "Pending_Screening",
    "Screening_In_Progress",
    "Screened",
    "Shortlisted",
    "Rejected",
  ]),
});

export type CreateApplicantInput = z.infer<typeof CreateApplicantSchema>;
export type UpdateApplicantStatusInput = z.infer<typeof UpdateApplicantStatusSchema>;

export interface Applicant {
  id: string;
  jobId: string;
  name: string;
  email: string;
  source: string;
  status: string;
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
  screening?: {
    overallScore: number;
    aiRecommendation: string;
    aiReasoning: string;
  };
  createdAt: string;
  updatedAt: string;
}
