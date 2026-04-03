import type { applicant } from "@repo/db/schema/applicant";
import type { account, session, user } from "@repo/db/schema/auth";
import type { job } from "@repo/db/schema/job";
import type { profile } from "@repo/db/schema/profile";
import type { screeningResult } from "@repo/db/schema/screening-result";

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;

export type Session = typeof session.$inferSelect;
export type NewSession = typeof session.$inferInsert;

export type Account = typeof account.$inferSelect;
export type NewAccount = typeof account.$inferInsert;

export type Profile = typeof profile.$inferSelect;
export type NewProfile = typeof profile.$inferInsert;

export type Job = typeof job.$inferSelect;
export type NewJob = typeof job.$inferInsert;

export type Applicant = typeof applicant.$inferSelect;
export type NewApplicant = typeof applicant.$inferInsert;

export type ScreeningResult = typeof screeningResult.$inferSelect;
export type NewScreeningResult = typeof screeningResult.$inferInsert;

// Relations Types
export type UserWithProfile = User & { profile: Profile | null };
export type JobWithRecruiter = Job & { recruiter: User };
export type ApplicantWithJob = Applicant & { job: Job };
export type ScreeningResultWithApplicant = ScreeningResult & { applicant: Applicant };

export type JobWithRelations = Job & {
  recruiter: User;
  applicants: Applicant[];
  screeningResults: ScreeningResult[];
};

export type ApplicantWithResult = Applicant & {
  job: Job;
  screeningResult: ScreeningResult | null;
};
