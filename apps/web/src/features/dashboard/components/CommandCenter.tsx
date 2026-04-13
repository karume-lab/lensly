"use client";

import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { Briefcase, Clock, Plus, Users, Zap } from "lucide-react";
import Link from "next/link";
import type { mockActivity, mockJobs, mockMetrics } from "@/lib/mock-data";
import DashboardHeader from "./DashboardHeader";
import { JobsTable } from "./jobs-table";

export const CommandCenter = ({
  data,
}: {
  data: {
    metrics: typeof mockMetrics;
    jobs: typeof mockJobs;
    activity: typeof mockActivity;
    user: { name: string };
  };
}) => {
  const { metrics, activity, user } = data;

  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader
        title={`Welcome, ${user.name}`}
        subtitle="Overview of your current hiring pipelines and pending actions."
      >
        <Button asChild>
          <Link href="/dashboard/jobs/new">
            <Plus className="mr-2 size-4" />
            Create job
          </Link>
        </Button>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(metrics).map(([key, metric]) => (
          <Card key={key} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
              {key === "activeJobs" && <Briefcase className="size-4 text-muted-foreground" />}
              {key === "pendingReviews" && <Users className="size-4 text-muted-foreground" />}
              {key === "avgMatchScore" && <Zap className="size-4 text-muted-foreground" />}
              {key === "timeSaved" && <Clock className="size-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{metric.value}</div>
              <div className="mt-1 flex items-center text-xs">
                <span className={metric.trend >= 0 ? "text-emerald-600" : "text-rose-600"}>
                  {metric.trend > 0 ? "+" : ""}
                  {metric.trend}%
                </span>
                <span className="ml-1 text-muted-foreground">since yesterday</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Active pipelines</h2>
            <p className="text-sm text-muted-foreground">
              Manage your jobs and review screening results.
            </p>
          </div>
          <JobsTable />
        </div>

        <Card className="border-border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-semibold">Recent activity</CardTitle>
            <CardDescription className="text-xs">
              Latest screening and pipeline updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative space-y-6 pl-4">
              {/* Vertical line through all activities */}
              <div className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-zinc-100 dark:bg-zinc-800" />

              {activity.map((item) => (
                <div key={item.id} className="relative flex gap-4">
                  {/* Timeline dot container for perfect centering */}
                  <div className="relative flex items-center justify-center w-3 h-5 shrink-0 z-10">
                    <div
                      className={`h-3 w-3 rounded-full ring-4 ring-white dark:ring-zinc-950 ${
                        item.type === "ai"
                          ? "bg-blue-500"
                          : item.type === "candidate"
                            ? "bg-emerald-500"
                            : item.type === "user"
                              ? "bg-amber-500"
                              : "bg-zinc-500"
                      }`}
                    />
                  </div>

                  <div className="flex flex-col gap-1 pr-2">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold text-sm text-foreground leading-none">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-0.5">
                      {item.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="w-full mt-6 text-xs text-muted-foreground hover:bg-muted/50 font-medium"
            >
              <Link href="/dashboard/history">View full history</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
