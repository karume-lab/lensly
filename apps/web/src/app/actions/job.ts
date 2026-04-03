"use server";

import type { CreateJobInput } from "@repo/validators/job";
import { redirect } from "next/navigation";

/**
 * Server Action to handle job creation.
 * In a real app, this would use Drizzle:
 *
 * await db.insert(jobs).values({ ...data, userId: session.user.id });
 */
export async function createJobAction(data: CreateJobInput) {
  console.log("Creating Job in Database:", data);

  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Redirect to the applicants ingestion hub as per specification
  // In a real app, we'd use the returned job.id
  redirect("/dashboard/jobs/job_01/applicants");
}
