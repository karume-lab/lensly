"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { ChevronLeft, Share2 } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { IngestionHub } from "@/features/dashboard/components/IngestionHub";
import { mockJobs } from "@/lib/mock-data";

export function JobIngestionClient({ jobId }: { jobId: string }) {
  const job = mockJobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-xl font-semibold">Job not found</h2>
        <p className="text-muted-foreground">
          The job you are looking for does not exist or has been removed.
        </p>
        <Button asChild variant="outline">
          <Link href={"/dashboard/jobs"}>Back to Jobs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Link
            href={"/dashboard/jobs"}
            className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group mb-1 w-fit"
          >
            <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Campaigns
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              Ingestion Phase
            </Badge>
          </div>
          <p className="text-muted-foreground line-clamp-1">
            {job.department} • {job.seniority} • {job.applicantCount} Total Applicants
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Share2 className="mr-2 h-4 w-4" />
            Share Pipeline
          </Button>
          <Button size="sm" className="h-9" asChild>
            <Link href={`/dashboard/jobs/${jobId}/shortlist` as Route}>View Results</Link>
          </Button>
        </div>
      </div>

      <div className="border border-border bg-card">
        <IngestionHub jobId={jobId} />
      </div>
    </div>
  );
}
