import { CandidateDeepDive } from "@/features/dashboard";

const CandidateDetailPage = async ({
  params,
}: {
  params: Promise<{ jobId: string; candidateId: string }>;
}) => {
  const { jobId, candidateId } = await params;
  return <CandidateDeepDive jobId={jobId} candidateId={candidateId} />;
};

export default CandidateDetailPage;
