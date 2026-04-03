import { z } from "zod";

export const OnboardingSchema = z.object({
  companyName: z.string().min(2, "Company Name is required"),
  role: z.string().min(2, "Role is required"),
  defaultWeightSkills: z.number().int().min(0).max(100),
  defaultWeightExperience: z.number().int().min(0).max(100),
  defaultWeightEducation: z.number().int().min(0).max(100),
});

export type OnboardingInput = z.infer<typeof OnboardingSchema>;
