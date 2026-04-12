import { z } from "zod";

export const UserSettingsSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(2, "Role/Title is required"),
  companyName: z.string().min(2, "Company Name is required"),
  notifications: z.object({
    emailAlerts: z.boolean(),
    browserAlerts: z.boolean(),
    aiInsights: z.boolean(),
  }),
  preferences: z.object({
    theme: z.enum(["light", "dark", "system"]),
    defaultAiModel: z.enum(["gpt-4o", "claude-3-5-sonnet", "gemini-1.5-pro"]),
    autoShortlist: z.boolean(),
  }),
});

export type UserSettingsValues = z.infer<typeof UserSettingsSchema>;
