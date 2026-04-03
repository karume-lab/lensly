import { JobOverviewClient } from "@/features/dashboard/components/JobOverviewClient";

export default async function JobOverviewPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  return <JobOverviewClient jobId={jobId} />;
}
