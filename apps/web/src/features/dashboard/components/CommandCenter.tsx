"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { ArrowUpRight, Briefcase, Clock, Plus, Users, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { DashboardJob, mockActivity, mockJobs, mockMetrics } from "@/lib/mock-data";

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
  const { metrics, jobs, activity, user } = data;
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [searchValue, setSearchValue] = useState("");

  const columns: ColumnDef<DashboardJob>[] = [
    {
      accessorKey: "title",
      header: "Role",
      cell: ({ row }) => {
        const job = row.original;
        return (
          <div className="flex flex-col">
            <span className="font-medium text-sm">{job.title}</span>
            <span className="text-xs text-muted-foreground">{job.department}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "applicants",
      header: "Screening progress",
      cell: ({ row }) => {
        const job = row.original;
        return (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              {job.screenedCount} / {job.applicantCount}
            </span>
            <span className="text-xs text-muted-foreground">screened</span>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const job = row.original;
        const isReview = job.status === "Review Shortlist";
        return (
          <Badge
            variant={isReview ? "default" : "secondary"}
            className="text-xs font-medium px-2 py-0.5"
          >
            {job.status}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      header: () => <div className="text-right">Action</div>,
      cell: ({ row }) => {
        const job = row.original;
        const isReview = job.status === "Review Shortlist";

        if (isReview) {
          return (
            <div className="text-right">
              <Button size="sm" asChild className="h-8">
                <Link href={`/dashboard/jobs/${job.id}/shortlist`}>
                  <span className="flex items-center gap-1">
                    Review results
                    <ArrowUpRight className="size-3" />
                  </span>
                </Link>
              </Button>
            </div>
          );
        }

        return (
          <div className="text-right">
            <Button variant="ghost" size="sm" asChild className="h-8">
              <Link href={`/dashboard/jobs/${job.id}/applicants`}>View applicants</Link>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome, {user.name}</h1>
          <p className="text-muted-foreground">
            Overview of your current hiring pipelines and pending actions.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/jobs/new">
            <Plus className="mr-2 size-4" />
            Create job
          </Link>
        </Button>
      </div>

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
          <DataTable
            columns={columns}
            data={jobs}
            pageCount={1}
            pagination={pagination}
            onPaginationChange={setPagination}
            searchKey="role"
            searchValue={searchValue}
            onSearchChange={setSearchValue}
          />
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Recent activity</CardTitle>
            <CardDescription>Latest screening updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activity.map((item) => (
                <div key={item.id} className="flex gap-3 text-sm">
                  <div className="mt-0.5 shrink-0 grow-0 h-2 w-2 bg-primary" />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium leading-none">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                    <p className="text-[10px] text-muted-foreground">{item.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-6 text-xs text-muted-foreground">
              View history
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
