import { Suspense } from "react";
import { JobsListClient } from "@/features/dashboard/components/JobsListClient";

const JobsPage = () => {
  return (
    <Suspense>
      <JobsListClient />
    </Suspense>
  );
};

export default JobsPage;
