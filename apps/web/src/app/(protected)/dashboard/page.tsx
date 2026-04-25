import { auth } from "@repo/auth";
import { headers } from "next/headers";
import { Suspense } from "react";
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
  const { data: metrics } = await api.dashboard.metrics.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const { data: jobs } = await api.jobs.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const { data: activity } = await api.dashboard.activity.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const data = {
    metrics: metrics ?? {
      activeJobs: { value: 0, trend: 0, label: "Active Jobs" },
      totalApplicants: { value: 0, trend: 0, label: "Total Applicants" },
      screenedCandidates: { value: 0, trend: 0, label: "Candidates Screened" },
      avgMatchScore: { value: 0, trend: 0, label: "Avg Match Score" },
      timeSaved: { value: "0h", trend: 0, label: "AI Time Saved Today" },
    },
    jobs: jobs ?? [],
    activity: activity ?? [],
    user: session?.user ?? { name: "Guest" },
  };

  return (
    <Suspense>
      <CommandCenter data={data} />
    </Suspense>
  );
}
