import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { JobOverviewClient } from "@/features/dashboard/components/JobOverviewClient";
import { api } from "@/lib/api";

export default async function JobOverviewPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const h = await headers();

  const { data: job, error } = await api.jobs({ id: jobId }).get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  if (error || !job) {
    notFound();
  }

  return <JobOverviewClient initialData={job} />;
}
