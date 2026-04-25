"use client";

import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { ScrollArea } from "@repo/ui/web/components/ui/scroll-area";
import { Briefcase, Clock, Plus, Users, Zap } from "lucide-react";
import Link from "next/link";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { JobsTable } from "@/features/dashboard/components/jobs-table";
import type { api, ExtractData } from "@/lib/api";

type StatsData = ExtractData<typeof api.dashboard.metrics.get>;
type ActivityData = ExtractData<typeof api.dashboard.activity.get>;

export const CommandCenter = ({
  data,
}: {
  data: {
    metrics: StatsData;
    activity: ActivityData;
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
        {metrics &&
          Object.entries(
            metrics as Record<string, { label: string; value: string | number; trend: number }>,
          ).map(([key, metric]) => (
            <Card key={key} className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">
                  {metric.label}
                </CardTitle>
                {key === "activeJobs" && <Briefcase className="size-4 text-muted-foreground" />}
                {key === "totalApplicants" && <Users className="size-4 text-muted-foreground" />}
                {key === "screenedCandidates" && <div className="size-2 bg-primary rounded-full" />}
                {key === "avgMatchScore" && <Zap className="size-4 text-muted-foreground" />}
                {key === "timeSaved" && <Clock className="size-4 text-muted-foreground" />}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">{metric.value}</div>
                <div className="mt-1 flex items-center text-xs">
                  <span className={metric.trend >= 0 ? "text-emerald-600" : "text-destructive"}>
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

        <div className="lg:col-span-1 relative min-h-[500px] lg:min-h-0">
          <div className="lg:absolute lg:inset-0">
            <Card className="border-border shadow-sm flex flex-col h-full">
              <CardHeader className="pb-4 shrink-0">
                <CardTitle className="text-base font-semibold">Recent activity</CardTitle>
                <CardDescription className="text-xs">
                  Latest screening and pipeline updates
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 min-h-0 pb-0">
                <ScrollArea className="h-full">
                  {activity.length === 0 ? (
                    <div className="py-8 text-center text-xs text-muted-foreground">
                      No recent activity
                    </div>
                  ) : (
                    <div className="relative space-y-6 pl-4 pr-4">
                      {/* Vertical line through all activities */}
                      <div className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-border" />

                      {activity.map((item) => (
                        <div key={item.id} className="relative flex gap-4">
                          {/* Timeline dot container for perfect centering */}
                          <div className="relative flex items-center justify-center w-3 h-5 shrink-0 z-10">
                            <div
                              className={`h-3 w-3 rounded-full ring-4 ring-background ${
                                item.type === "ai"
                                  ? "bg-blue-500"
                                  : item.type === "candidate"
                                    ? "bg-emerald-500"
                                    : item.type === "user"
                                      ? "bg-amber-500"
                                      : "bg-muted"
                              }`}
                            />
                          </div>

                          <div className="flex flex-col gap-1 pr-2">
                            <div className="flex items-center justify-between gap-4">
                              <p className="font-semibold text-sm text-foreground leading-none">
                                {item.title.replace(/_/g, " ")}
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
                  )}
                </ScrollArea>
              </CardContent>
              <div className="p-4 shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-full text-xs text-muted-foreground hover:bg-muted/50 font-medium"
                >
                  <Link href="/dashboard/history">View full history</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
