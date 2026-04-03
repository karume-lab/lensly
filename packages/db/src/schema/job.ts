import { applicant } from "@repo/db/schema/applicant";
import { user } from "@repo/db/schema/auth";
import { screeningResult } from "@repo/db/schema/screening-result";
import dayjs from "dayjs";
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const job = sqliteTable("job", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  title: text("title").notNull(),
  department: text("department").notNull(),
  seniority: text("seniority").notNull(),
  description: text("description").notNull(),

  requiredSkills: text("required_skills", { mode: "json" }).$type<string[]>().notNull(),

  weightSkills: integer("weight_skills").notNull(),
  weightExperience: integer("weight_experience").notNull(),
  weightEducation: integer("weight_education").notNull(),

  status: text("status").notNull().default("Draft"),

  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => dayjs().toDate())
    .notNull(),
});

export const jobRelations = relations(job, ({ one, many }) => ({
  recruiter: one(user, {
    fields: [job.userId],
    references: [user.id],
  }),
  applicants: many(applicant),
  screeningResults: many(screeningResult),
}));
