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

export const SkillSchema = t.Object({
  name: t.String(),
  level: t.String(),
  yearsOfExperience: t.Number(),
});

export const LanguageSchema = t.Object({
  name: t.String(),
  proficiency: t.String(),
});

export const CertificationSchema = t.Object({
  name: t.String(),
  issuer: t.String(),
  issueDate: t.String(),
});

export const ProjectSchema = t.Object({
  name: t.String(),
  description: t.String(),
  technologies: t.Array(t.String()),
  role: t.String(),
  link: t.String(),
  startDate: t.String(),
  endDate: t.String(),
});

export const AvailabilitySchema = t.Object({
  status: t.String(),
  type: t.String(),
  startDate: t.String(),
});

export const SocialLinksSchema = t.Object({
  linkedin: t.Optional(t.String()),
  github: t.Optional(t.String()),
  portfolio: t.Optional(t.String()),
});

export const EducationSchema = t.Object({
  institution: t.Optional(t.String()),
  degree: t.Optional(t.String()),
  field: t.Optional(t.String()),
  year: t.Optional(t.Number()),
});

export const StructuredDataSchema = t.Object({
  firstName: t.Optional(t.String()),
  lastName: t.Optional(t.String()),
  headline: t.Optional(t.String()),
  bio: t.Optional(t.String()),
  education: t.Optional(t.Array(EducationSchema)),
  experience: t.Optional(t.Array(ExperienceSchema)),
  skills: t.Optional(t.Array(SkillSchema)),
  languages: t.Optional(t.Array(LanguageSchema)),
  certifications: t.Optional(t.Array(CertificationSchema)),
  projects: t.Optional(t.Array(ProjectSchema)),
  availability: t.Optional(AvailabilitySchema),
  socialLinks: t.Optional(SocialLinksSchema),
  location: t.Optional(t.String()),
});

export const ApplicantSchema = t.Object({
  id: t.String(),
  jobId: t.String(),
  name: t.String(),
  email: t.Optional(t.Nullable(t.String())),
  source: t.String(),
  resumeUrl: t.Optional(t.Nullable(t.String())),
  rawText: t.Optional(t.Nullable(t.String())),
  structuredData: t.Optional(t.Any()),
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
  aiReasoning: t.Optional(t.Nullable(t.String())),
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

export const ProfileSchema = t.Object({
  userId: t.String(),
  companyName: t.Optional(t.String()),
  role: t.Optional(t.String()),
  defaultWeightSkills: t.Number(),
  defaultWeightExperience: t.Number(),
  defaultWeightEducation: t.Number(),
  emailAlerts: t.Boolean(),
  browserAlerts: t.Boolean(),
  aiInsights: t.Boolean(),
  autoShortlist: t.Boolean(),
  theme: t.Union([t.Literal("light"), t.Literal("dark"), t.Literal("system")]),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});
