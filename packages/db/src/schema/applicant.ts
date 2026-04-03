import { job } from "@repo/db/schema/job";
import { screeningResult } from "@repo/db/schema/screening-result";
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const applicant = sqliteTable("applicant", {
  id: text("id").primaryKey(),
  jobId: text("job_id")
    .notNull()
    .references(() => job.id, { onDelete: "cascade" }),

  name: text("name").notNull(),
  email: text("email"),

  source: text("source").notNull(),

  resumeUrl: text("resume_url"),
  rawText: text("raw_text"),
  structuredData: text("structured_data", { mode: "json" }),

  status: text("status").notNull().default("Pending_Screening"),

  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
});

export const applicantRelations = relations(applicant, ({ one }) => ({
  job: one(job, {
    fields: [applicant.jobId],
    references: [job.id],
  }),
  screeningResult: one(screeningResult, {
    fields: [applicant.id],
    references: [screeningResult.applicantId],
  }),
}));
