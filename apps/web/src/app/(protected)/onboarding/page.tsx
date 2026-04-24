import { headers } from "next/headers";
import { OnboardingClient } from "@/features/onboarding/components/OnboardingClient";
import { api } from "@/lib/api";

export default async function OnboardingPage() {
  const h = await headers();

  const { data: profile, error } = await api.profile.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  if (error || !profile) {
    // This should ideally not happen as the backend returns defaults
    throw new Error("Failed to load profile context");
  }

  return <OnboardingClient initialData={profile} />;
}
