import { CommandCenter } from "@/features/dashboard";
import { mockActivity, mockJobs, mockMetrics } from "@/lib/mock-data";

/**
 * DashboardPage is a Server Component.
 * In a production environment, this would execute a complex Drizzle query:
 *
 * const metrics = await db.select({
 *   activeJobs: count(jobs.id),
 *   pendingReviews: count(筛选结果),
 *   avgMatchScore: avg(筛选结果.score)
 * }).from(jobs).leftJoin(...)
 */
export default async function DashboardPage() {
  // Simulate server-side data aggregation
  const data = {
    metrics: mockMetrics,
    jobs: mockJobs,
    activity: mockActivity,
    user: { name: "Sarah" }, // Could be pulled from auth session
  };

  return <CommandCenter data={data} />;
}
