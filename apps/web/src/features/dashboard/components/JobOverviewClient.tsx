"use client";

import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { ChevronRight, FileText, LayoutDashboard, Settings, Users } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import type { api, ExtractData } from "@/lib/api";

type JobData = NonNullable<ExtractData<ReturnType<typeof api.jobs>["get"]>>;

export function JobOverviewClient({ initialData }: { initialData: JobData }) {
  const job = initialData;

  if (!job) {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-xl font-semibold">Job not found</h2>
        <Button asChild variant="outline">
          <Link href={"/dashboard/jobs"}>Back to Jobs</Link>
        </Button>
      </div>
    );
  }

  const sections = [
    {
      title: "Ingestion Hub",
      description: "Upload and process new candidate resumes.",
      icon: FileText,
      href: `/dashboard/jobs/${job.id}/ingestion`,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Shortlist & Matching",
      description: "View AI-ranked candidates and match scores.",
      icon: Users,
      href: `/dashboard/jobs/${job.id}/shortlist`,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Settings",
      description: "Update job description and AI weights.",
      icon: Settings,
      href: `/dashboard/jobs/${job.id}/settings`,
      color: "text-slate-500",
      bg: "bg-slate-500/10",
    },
  ];

  return (
    <div className="flex flex-col gap-8  slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
        <p className="text-muted-foreground">
          {job.department} • {job.seniority}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link key={section.title} href={section.href as Route} className="group transition-all">
            <Card className="h-full bg-card border-border hover:border-primary/30 transition-all hover:shadow-md">
              <CardHeader>
                <div
                  className={`w-10 h-10 ${section.bg} ${section.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                >
                  <section.icon className="h-5 w-5" />
                </div>
                <CardTitle className="flex items-center justify-between">
                  {section.title}
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Quick Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Applicants Processed</span>
              <span className="font-semibold">
                {job.screenedCount} / {job.applicantCount}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">AI Match Confidence</span>
              <span className="font-semibold text-emerald-500">High (82%)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
