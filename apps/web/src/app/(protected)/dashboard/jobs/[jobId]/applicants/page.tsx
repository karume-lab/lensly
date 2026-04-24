import { Suspense } from "react";
import { IngestionHub } from "@/features/dashboard";

const IngestionHubPage = ({ params }: { params: { jobId: string } }) => {
  return (
    <Suspense>
      <IngestionHub jobId={params.jobId} />
    </Suspense>
  );
};

export default IngestionHubPage;
