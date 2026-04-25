import { Suspense } from "react";
import { AdminActivitiesClient } from "@/features/admin/components/AdminActivitiesClient";

const AdminActivitiesPage = () => {
  return (
    <Suspense>
      <AdminActivitiesClient />
    </Suspense>
  );
};

export default AdminActivitiesPage;
