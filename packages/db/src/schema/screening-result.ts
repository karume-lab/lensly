import { applicant } from "@repo/db/schema/applicant";
import { job } from "@repo/db/schema/job";
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const screeningResult = sqliteTable("screening_result", {
  id: text("id").primaryKey(),
  applicantId: text("applicant_id")
    .notNull()
    .unique()
    .references(() => applicant.id, { onDelete: "cascade" }),
  jobId: text("job_id")
    .notNull()
    .references(() => job.id, { onDelete: "cascade" }),

  overallScore: integer("overall_score").notNull(),
  skillScore: integer("skill_score").notNull(),
  experienceScore: integer("experience_score").notNull(),
  educationScore: integer("education_score").notNull(),
  relevanceScore: integer("relevance_score").notNull(),

  strengths: text("strengths", { mode: "json" }).$type<string[]>().notNull(),
  gaps: text("gaps", { mode: "json" }).$type<string[]>().notNull(),

  aiRecommendation: text("ai_recommendation").notNull(),

  processedAt: integer("processed_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
});

export const screeningResultRelations = relations(screeningResult, ({ one }) => ({
  applicant: one(applicant, {
    fields: [screeningResult.applicantId],
    references: [applicant.id],
  }),
  job: one(job, {
    fields: [screeningResult.jobId],
    references: [job.id],
  }),
}));
