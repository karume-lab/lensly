import type { Metadata } from "next";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import SettingsClient from "@/features/settings/components/SettingsClient";

export const metadata: Metadata = {
  title: "Settings | Lensly AI",
  description: "Configure your hiring preferences and AI agent behavior.",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <DashboardHeader
        title="Command & Control"
        subtitle="Manage your hiring identity, AI intelligence models, and notification triggers."
      />
      <div className="mt-4">
        <SettingsClient />
      </div>
    </div>
  );
}
