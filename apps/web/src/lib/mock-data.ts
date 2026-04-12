import type { Applicant, HistoryItem, Job, ScreeningResult, User } from "@repo/types";
import dayjs from "dayjs";

// ==========================================
// MOCK DATA — Used across all dashboard views
// ==========================================

export const mockUser: User = {
  id: "user_01",
  name: "Sarah Chen",
  email: "sarah@lensly.ai",
  emailVerified: true,
  image: null,
  role: null,
  banned: false,
  banReason: null,
  banExpires: null,
  createdAt: dayjs("2024-01-01").toDate(),
  updatedAt: dayjs("2024-01-01").toDate(),
};

export const mockMetrics = {
  activeJobs: { value: 12, trend: 2, label: "Active Jobs" },
  pendingReviews: { value: 14, trend: 3, label: "Pending Reviews" },
  avgMatchScore: { value: 78, trend: 5, label: "Avg Match Score" },
  timeSaved: { value: "4.2h", trend: 0.8, label: "AI Time Saved Today" },
};

export type JobStatus = "Screening" | "Shortlisting" | "Draft" | "Review Shortlist";

/**
 * Extended Job type for UI which includes aggregated counts
 * that would normally come from a complex SQL join/aggregation.
 */
export type DashboardJob = Job & {
  applicantCount: number;
  screenedCount: number;
  avgScore: number;
};

export const mockJobs: DashboardJob[] = [
  {
    id: "job_01",
    userId: "user_01",
    title: "Senior React Developer",
    department: "Engineering",
    seniority: "Senior",
    description: "Looking for a seasoned React expert...",
    requiredSkills: ["React", "TypeScript", "Next.js"],
    weightSkills: 50,
    weightExperience: 30,
    weightEducation: 20,
    status: "Review Shortlist",
    createdAt: dayjs("2024-01-15").toDate(),
    updatedAt: dayjs("2024-01-15").toDate(),
    applicantCount: 45,
    screenedCount: 45,
    avgScore: 82,
  },
  {
    id: "job_02",
    userId: "user_01",
    title: "Product Designer",
    department: "Design",
    seniority: "Mid",
    description: "Join our core design team...",
    requiredSkills: ["Figma", "UI/UX", "Prototyping"],
    weightSkills: 40,
    weightExperience: 40,
    weightEducation: 20,
    status: "Screening",
    createdAt: dayjs("2024-01-18").toDate(),
    updatedAt: dayjs("2024-01-18").toDate(),
    applicantCount: 23,
    screenedCount: 12,
    avgScore: 74,
  },
  {
    id: "job_03",
    userId: "user_01",
    title: "DevOps Engineer",
    department: "Infrastructure",
    seniority: "Senior",
    description: "Scale our global cloud footprint...",
    requiredSkills: ["AWS", "Terraform", "Kubernetes"],
    weightSkills: 60,
    weightExperience: 20,
    weightEducation: 20,
    status: "Review Shortlist",
    createdAt: dayjs("2024-01-20").toDate(),
    updatedAt: dayjs("2024-01-20").toDate(),
    applicantCount: 31,
    screenedCount: 31,
    avgScore: 69,
  },
];

export type ActivityType = "ai" | "candidate" | "system" | "user";

export const mockActivity = [
  {
    id: "act_01",
    type: "ai" as ActivityType,
    title: "Gemini finished evaluating 45 candidates",
    subtitle: "Senior React Developer — 12 seconds",
    timestamp: "2 min ago",
  },
  {
    id: "act_02",
    type: "candidate" as ActivityType,
    title: "New application received",
    subtitle: "James Oduya — Product Designer",
    timestamp: "14 min ago",
  },
  {
    id: "act_03",
    type: "user" as ActivityType,
    title: "Anika approved 3 candidates",
    subtitle: "DevOps Engineer shortlist",
    timestamp: "1 hr ago",
  },
];

export const mockHistory: HistoryItem[] = [
  {
    id: "hist_01",
    jobTitle: "Senior Frontend Engineer",
    date: "2024-03-20",
    candidates: 124,
    shortlisted: 12,
    avgScore: 88,
    timeSaved: "14.5h",
    status: "Completed",
  },
  {
    id: "hist_02",
    jobTitle: "Java Backend Lead",
    date: "2024-03-15",
    candidates: 89,
    shortlisted: 8,
    avgScore: 76,
    timeSaved: "10.2h",
    status: "Completed",
  },
  {
    id: "hist_03",
    jobTitle: "UI/UX Researcher",
    date: "2024-03-10",
    candidates: 56,
    shortlisted: 5,
    avgScore: 92,
    timeSaved: "6.8h",
    status: "Archived",
  },
  {
    id: "hist_04",
    jobTitle: "Data Scientist",
    date: "2024-03-05",
    candidates: 210,
    shortlisted: 15,
    avgScore: 84,
    timeSaved: "22.1h",
    status: "Completed",
  },
];

// ——— Ingestion Hub Mock ———
export type IngestionApplicant = Applicant & {
  matchPotential: number;
  // Temporary fields for UI until structuredData is typed
  skills: string[];
  role: string;
  experience: number;
  location: string;
};

export const mockUmuravaApplicants: IngestionApplicant[] = [
  {
    id: "app_01",
    jobId: "job_01",
    name: "James Oduya",
    email: "james@oduya.dev",
    source: "Umurava",
    resumeUrl: null,
    rawText: null,
    structuredData: {
      role: "Frontend Engineer",
      experience: 5,
      skills: ["React", "TypeScript", "Next.js", "GraphQL"],
      location: "Nairobi, KE",
    },
    status: "Pending_Screening",
    createdAt: dayjs().toDate(),
    matchPotential: 92,
    skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    role: "Frontend Engineer",
    experience: 5,
    location: "Nairobi, KE",
  },
  {
    id: "app_02",
    jobId: "job_01",
    name: "Fatima Al-Hassan",
    email: "fatima@tech.ng",
    source: "Umurava",
    resumeUrl: null,
    rawText: null,
    structuredData: {
      role: "Full-Stack Developer",
      experience: 4,
      skills: ["React", "Node.js", "PostgreSQL"],
      location: "Lagos, NG",
    },
    status: "Pending_Screening",
    createdAt: dayjs().toDate(),
    matchPotential: 78,
    skills: ["React", "Node.js", "PostgreSQL"],
    role: "Full-Stack Developer",
    experience: 4,
    location: "Lagos, NG",
  },
];

// ——— Shortlist Mock ———
export type AppScreeningResult = ScreeningResult & {
  applicant: {
    name: string;
    role: string;
  };
};

export const mockShortlist: AppScreeningResult[] = [
  {
    id: "res_01",
    applicantId: "app_01",
    jobId: "job_01",
    overallScore: 94,
    skillScore: 96,
    experienceScore: 92,
    educationScore: 88,
    relevanceScore: 95,
    strengths: [
      "5+ years Next.js experience directly matches the role requirements",
      "Strong TypeScript expertise demonstrated across 3 production projects",
      "Led a team of 4 engineers — aligns with Lead responsibilities",
    ],
    gaps: [
      "No mention of GraphQL in recent role descriptions",
      "Education background is non-CS (Business Informatics)",
    ],
    aiRecommendation: "Strong Yes",
    processedAt: dayjs().toDate(),
    applicant: {
      name: "James Oduya",
      role: "Frontend Engineer",
    },
  },
  {
    id: "res_02",
    applicantId: "app_04",
    jobId: "job_01",
    overallScore: 88,
    skillScore: 90,
    experienceScore: 85,
    educationScore: 91,
    relevanceScore: 89,
    strengths: [
      "Deep Tailwind and React expertise with design-system background",
      "Published open-source component library with 2k+ GitHub stars",
    ],
    gaps: [
      "Limited backend integration experience",
      "No mentions of testing frameworks beyond basic Jest",
    ],
    aiRecommendation: "Strong Yes",
    processedAt: dayjs().toDate(),
    applicant: {
      name: "Amara Diallo",
      role: "UI Engineer",
    },
  },
];

// ——— Candidate Deep Dive Mock ———
export const mockCandidateDetail = {
  id: "app_01",
  name: "James Oduya",
  role: "Frontend Engineer",
  source: "umurava" as "umurava" | "pdf",
  recommendation: "Strong Yes" as const,
  overallScore: 94,
  aiReasoning: `James Oduya presents an exceptionally strong profile for the Senior React Developer position. His 5+ years of focused Next.js experience — spanning complex SSR architectures, edge deployments, and performance-critical e-commerce platforms — directly addresses the core technical requirements outlined in the job description.

His TypeScript proficiency is not declarative; it's evidenced through 3 production-grade codebases reviewed during ingestion. His open-source contributions demonstrate code quality above the team average.

The candidate's leadership trajectory is equally compelling. As a team lead at Andela for 2 years, he mentored 4 junior developers and drove a 35% reduction in frontend error rates. This aligns with the Lead potential stated in the job's seniority preference.

The sole noted gap — limited GraphQL in recent resume context — is assessed as low-risk given his demonstrated REST API mastery and the team's stated long-term GraphQL migration timeline.

Overall verdict: **Recommend for interview with high confidence.**`,
  profile: {
    location: "Nairobi, KE",
    email: "james.oduya@dev.ke",
    phone: "+254 712 345 678",
    linkedin: "linkedin.com/in/jamesoduya",
    skills: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker", "GraphQL"],
    experience: [
      {
        company: "Andela",
        role: "Frontend Lead",
        duration: "2021 — 2024 (3 yrs)",
        highlights: [
          "Led team of 4 engineers building fintech SaaS dashboards",
          "Reduced frontend error rate by 35% through TypeScript migration",
          "Architected micro-frontend system handling 2M+ monthly users",
        ],
      },
      {
        company: "Ushahidi",
        role: "React Developer",
        duration: "2019 — 2021 (2 yrs)",
        highlights: [
          "Built real-time data visualization dashboards using React + D3",
          "Implemented offline-first PWA for low-bandwidth regions",
        ],
      },
    ],
    education: [
      {
        school: "University of Nairobi",
        degree: "B.Sc. Computer Science",
        year: "2019",
      },
    ],
  },
};
