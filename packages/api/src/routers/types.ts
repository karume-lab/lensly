import { t } from "elysia";

export const UserSchema = t.Object({
  id: t.String(),
  name: t.String(),
  email: t.String(),
  emailVerified: t.Boolean(),
  image: t.Nullable(t.String()),
  createdAt: t.Date(),
  updatedAt: t.Date(),
  role: t.Nullable(t.String()),
  banned: t.Nullable(t.Boolean()),
  banReason: t.Nullable(t.String()),
  banExpires: t.Nullable(t.Date()),
});

export const PaginationMetadataSchema = t.Object({
  totalCount: t.Number(),
  page: t.Number(),
  totalPages: t.Number(),
});

export const PaginatedUserResponseSchema = t.Object({
  data: t.Array(UserSchema),
  metadata: PaginationMetadataSchema,
});

export const JobSchema = t.Object({
  id: t.String(),
  userId: t.String(),
  title: t.String(),
  department: t.String(),
  seniority: t.String(),
  description: t.String(),
  requiredSkills: t.Array(t.String()),
  weightSkills: t.Number(),
  weightExperience: t.Number(),
  weightEducation: t.Number(),
  status: t.String(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
  applicantCount: t.Optional(t.Number()),
  screenedCount: t.Optional(t.Number()),
  avgScore: t.Optional(t.Number()),
});

export const ExperienceSchema = t.Object({
  company: t.Optional(t.String()),
  role: t.Optional(t.String()),
  duration: t.Optional(t.String()),
  description: t.Optional(t.String()),
});

export const EducationSchema = t.Object({
  institution: t.Optional(t.String()),
  degree: t.Optional(t.String()),
  field: t.Optional(t.String()),
  year: t.Optional(t.Number()),
});

export const StructuredDataSchema = t.Object({
  education: t.Optional(t.Array(EducationSchema)),
  experience: t.Optional(t.Array(ExperienceSchema)),
  skills: t.Optional(t.Array(t.String())),
  location: t.Optional(t.String()),
});

export const ApplicantSchema = t.Object({
  id: t.String(),
  jobId: t.String(),
  name: t.String(),
  email: t.Optional(t.String()),
  source: t.String(),
  resumeUrl: t.Optional(t.String()),
  rawText: t.Optional(t.String()),
  structuredData: t.Optional(StructuredDataSchema),
  status: t.String(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});

export const ScreeningResultSchema = t.Object({
  id: t.String(),
  applicantId: t.String(),
  jobId: t.String(),
  overallScore: t.Number(),
  skillScore: t.Number(),
  experienceScore: t.Number(),
  educationScore: t.Number(),
  relevanceScore: t.Number(),
  strengths: t.Array(t.String()),
  gaps: t.Array(t.String()),
  aiRecommendation: t.String(),
  aiReasoning: t.Optional(t.String()),
  processedAt: t.Date(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});

export const ActivitySchema = t.Object({
  id: t.String(),
  title: t.String(),
  subtitle: t.String(),
  timestamp: t.String(),
  type: t.String(),
});
