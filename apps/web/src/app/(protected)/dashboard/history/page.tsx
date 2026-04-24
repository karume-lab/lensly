import { Suspense } from "react";
import { HistoryClient } from "@/features/history";

export const metadata = {
  title: "Screening History | Lensly",
  description: "Review and export data from your past autonomous hiring cycles.",
};

export default function HistoryPage() {
  return (
    <Suspense>
      <HistoryClient />
    </Suspense>
  );
}
