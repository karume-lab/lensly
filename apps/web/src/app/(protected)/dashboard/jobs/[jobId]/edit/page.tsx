import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { NewJobForm } from "@/features/dashboard/components/NewJobForm";
import { api } from "@/lib/api";

export default async function EditJobPage({ params }: { params: Promise<{ jobId: string }> }) {
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

  return <NewJobForm initialData={job} />;
}
