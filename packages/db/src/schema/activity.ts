import { user } from "@repo/db/schema/auth";
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const activity = sqliteTable("activity", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  action: text("action").notNull(), // e.g., 'JOB_CREATED', 'APPLICANT_STATUS_UPDATED'
  entityId: text("entity_id").notNull(), // e.g., jobId, applicantId
  entityType: text("entity_type").notNull(), // e.g., 'job', 'applicant'

  metadata: text("metadata", { mode: "json" }), // e.g., { "old_status": "Pending", "new_status": "Shortlisted" }

  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
});

export const activityRelations = relations(activity, ({ one }) => ({
  actor: one(user, {
    fields: [activity.userId],
    references: [user.id],
  }),
}));
