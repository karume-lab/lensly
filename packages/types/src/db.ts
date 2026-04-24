import type { ActivitySchema } from "@repo/db/schema/activity";
import type { ApplicantSchema } from "@repo/db/schema/applicant";
import type {
  AccountSchema,
  SessionSchema,
  UserSchema,
  VerificationSchema,
} from "@repo/db/schema/auth";
import type { JobSchema } from "@repo/db/schema/job";
import type { ProfileSchema } from "@repo/db/schema/profile";
import type { ScreeningResultSchema } from "@repo/db/schema/screening-result";
import type { InferSchemaType } from "mongoose";

export type User = InferSchemaType<typeof UserSchema> & { id: string };
export type Session = InferSchemaType<typeof SessionSchema> & { id: string };
export type Account = InferSchemaType<typeof AccountSchema> & { id: string };
export type Verification = InferSchemaType<typeof VerificationSchema> & { id: string };

export type Job = InferSchemaType<typeof JobSchema> & {
  id: string;
  applicantCount?: number;
  screenedCount?: number;
};

export type Applicant = InferSchemaType<typeof ApplicantSchema> & { id: string };

export type ScreeningResult = InferSchemaType<typeof ScreeningResultSchema> & { id: string };

export type Profile = InferSchemaType<typeof ProfileSchema> & { id: string };

export type Activity = InferSchemaType<typeof ActivitySchema> & { id: string };

export type ScreeningResultWithApplicant = ScreeningResult & {
  applicant: {
    name: string;
    role: string;
  };
};
