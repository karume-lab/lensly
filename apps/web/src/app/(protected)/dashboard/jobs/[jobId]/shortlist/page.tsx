import { Suspense } from "react";
import { AIShortlist } from "@/features/dashboard";

export default async function ShortlistPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  return (
    <Suspense>
      <AIShortlist jobId={jobId} />
    </Suspense>
  );
}
