import { z } from "zod";

export const JobBaseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  department: z.string().min(2, "Department must be at least 2 characters"),
  seniority: z.string().min(2, "Seniority must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  requiredSkills: z.array(z.string()).min(1, "At least one skill is required"),
  weightSkills: z.number().int().min(0).max(100),
  weightExperience: z.number().int().min(0).max(100),
  weightEducation: z.number().int().min(0).max(100),
});

export const CreateJobSchema = JobBaseSchema.refine(
  (data) => {
    return data.weightSkills + data.weightExperience + data.weightEducation === 100;
  },
  {
    message: "Total weight must equal 100%",
    path: ["weightSkills"], // Point to one of the weight fields for the error
  },
);

export const UpdateJobSchema = JobBaseSchema.partial();

export type CreateJobInput = z.infer<typeof CreateJobSchema>;
export type UpdateJobInput = z.infer<typeof UpdateJobSchema>;

export interface Job {
  id: string;
  title: string;
  department: string;
  seniority: string;
  description: string;
  requiredSkills: string[];
  weightSkills: number;
  weightExperience: number;
  weightEducation: number;
  status?: string;
  applicantCount: number;
  screenedCount: number;
  avgScore?: number;
  createdAt: string;
  updatedAt: string;
}
