import { z } from "zod";

export const CreateJobSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  department: z.string().min(2, "Department must be at least 2 characters"),
  seniority: z.string().min(2, "Seniority is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  requiredSkills: z.array(z.string()).min(1, "At least one skill is required"),
  weightSkills: z.number().int().min(0).max(100),
  weightExperience: z.number().int().min(0).max(100),
  weightEducation: z.number().int().min(0).max(100),
});

export const UpdateJobSchema = CreateJobSchema.partial();

export type CreateJobInput = z.infer<typeof CreateJobSchema>;
export type UpdateJobInput = z.infer<typeof UpdateJobSchema>;
