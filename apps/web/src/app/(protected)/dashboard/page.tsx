import { auth } from "@repo/auth";
import { headers } from "next/headers";
import { CommandCenter } from "@/features/dashboard";
import { api } from "@/lib/api";

/**
 * DashboardPage is a Server Component.
 * It now fetches real data from the Elysia backend via Eden Treaty.
 */
export default async function DashboardPage() {
  const h = await headers();
  const session = await auth.api.getSession({ headers: h });

  // Fetch real data from the API with session headers
  const { data: metrics } = await api.jobs.stats.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const { data: jobs } = await api.jobs.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const { data: activity } = await api.activities.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const data = {
    metrics: metrics ?? {
      activeJobs: { value: 0, trend: 0, label: "Active Jobs" },
      pendingReviews: { value: 0, trend: 0, label: "Pending Reviews" },
      avgMatchScore: { value: 0, trend: 0, label: "Avg Match Score" },
      timeSaved: { value: "0h", trend: 0, label: "AI Time Saved Today" },
    },
    jobs: jobs ?? [],
    activity: activity ?? [],
    user: session?.user ?? { name: "Guest" },
  };

  return <CommandCenter data={data} />;
}
