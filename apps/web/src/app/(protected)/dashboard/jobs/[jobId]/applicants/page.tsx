import { IngestionHub } from "@/features/dashboard";

const IngestionHubPage = ({ params }: { params: { jobId: string } }) => {
  return <IngestionHub jobId={params.jobId} />;
};

export default IngestionHubPage;
