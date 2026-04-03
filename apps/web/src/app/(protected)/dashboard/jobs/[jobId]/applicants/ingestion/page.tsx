import { JobIngestionClient } from "@/features/dashboard/components/JobIngestionClient";

export default async function JobIngestionPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  return <JobIngestionClient jobId={jobId} />;
}
