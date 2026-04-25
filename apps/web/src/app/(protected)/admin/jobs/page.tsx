import { Suspense } from "react";
import { AdminJobsClient } from "@/features/admin/components/AdminJobsClient";

const AdminJobsPage = () => {
  return (
    <Suspense>
      <AdminJobsClient />
    </Suspense>
  );
};

export default AdminJobsPage;
