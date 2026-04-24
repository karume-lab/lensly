"use server";

import type { CreateJobInput } from "@repo/validators/job";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { api } from "@/lib/api";

export async function createJobAction(data: CreateJobInput) {
  const h = await headers();
  const { error } = await api.jobs.post(data, {
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  if (error) {
    throw new Error(JSON.stringify(error.value));
  }

  revalidatePath("/dashboard/jobs");
}
