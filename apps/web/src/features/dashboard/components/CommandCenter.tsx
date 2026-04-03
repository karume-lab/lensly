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
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Clock,
  Plus,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { type DashboardJob, mockActivity, type mockJobs, type mockMetrics } from "@/lib/mock-data";

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
      header: "Job",
      cell: ({ row }) => {
        const job = row.original;
        return (
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{job.title}</span>
            <span className="text-xs text-muted-foreground">{job.department}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "applicants",
      header: "Applicants",
      cell: ({ row }) => {
        const job = row.original;
        return (
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-sm">{job.screenedCount}</span>
            <span className="text-[10px] text-muted-foreground uppercase font-medium tracking-tight">
              / {job.applicantCount} screened
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "AI Status",
      cell: ({ row }) => {
        const job = row.original;
        const isReview = job.status === "Review Shortlist";
        return (
          <Badge
            variant={isReview ? "default" : "secondary"}
            className={`${isReview ? "bg-primary/10 text-primary border-primary/20" : "bg-muted/50 text-muted-foreground border-border/50"} 
                text-[10px] font-bold uppercase tracking-wider px-2 py-0.5`}
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
              <Button
                size="sm"
                asChild
                className="relative group h-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 overflow-hidden"
              >
                <Link href={`/dashboard/jobs/${job.id}/shortlist`}>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                  <span className="relative flex items-center gap-1">
                    Review Results
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  {/* Glowing Pulse Effect */}
                  <span className="absolute -inset-1 rounded-md bg-primary/40 animate-pulse -z-10 blur-sm" />
                </Link>
              </Button>
            </div>
          );
        }

        return (
          <div className="text-right">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-8 text-xs font-semibold hover:bg-primary/5 hover:text-primary"
            >
              <Link href={`/dashboard/jobs/${job.id}/applicants`}>View Applicants</Link>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8 animate-in fade-in duration-500">
      {/* Top Greeting */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user.name}</h1>
          <p className="text-muted-foreground mt-1">
            Here&apos;s what requires your attention right now.
          </p>
        </div>
        <Button
          asChild
          className="shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 bg-primary text-primary-foreground"
        >
          <Link href="/dashboard/jobs/new">
            <Plus className="mr-2 h-4 w-4" />
            Post New Job
          </Link>
        </Button>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {Object.entries(metrics).map(([key, metric], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-border/50 bg-card/40 backdrop-blur-md transition-all hover:shadow-xl hover:shadow-primary/5 group h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  {metric.label}
                </CardTitle>
                <div className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors">
                  {key === "activeJobs" && <Briefcase className="h-4 w-4" />}
                  {key === "pendingReviews" && <Users className="h-4 w-4" />}
                  {key === "avgMatchScore" && (
                    <Zap className="h-4 w-4 fill-yellow-500/20 text-yellow-500" />
                  )}
                  {key === "timeSaved" && <Clock className="h-4 w-4" />}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold font-mono tracking-tight">{metric.value}</div>
                <div
                  className={`mt-1 flex items-center text-[10px] font-black uppercase tracking-tighter ${metric.trend >= 0 ? "text-emerald-500" : "text-rose-500"}`}
                >
                  <TrendingUp className={`mr-1 h-3 w-3 ${metric.trend < 0 ? "rotate-90" : ""}`} />
                  {metric.trend > 0 ? "+" : ""}
                  {metric.trend}
                  <span className="ml-1 text-muted-foreground font-normal lowercase tracking-normal">
                    vs yesterday
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Circular Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="overflow-hidden border-primary/20 bg-primary/5 backdrop-blur-md transition-all hover:shadow-xl hover:shadow-primary/10 group h-full relative">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-primary">
                AI Evaluation
              </CardTitle>
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center pt-2">
              <div className="relative h-16 w-16">
                <svg className="h-full w-full" viewBox="0 0 36 36">
                  <title>AI Evaluation Progress</title>
                  <path
                    className="stroke-primary/10"
                    strokeWidth="3.5"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="stroke-primary"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={{ strokeDasharray: "74, 100" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">74%</span>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2 font-medium">
                Batch Evaluation Active
              </p>
            </CardContent>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none opacity-50" />
          </Card>
        </motion.div>
      </div>

      <div className="grid gap-8 md:grid-cols-7">
        {/* Main Job Table (70%) */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight">Jobs Requiring Action</h2>
            <p className="text-xs text-muted-foreground">
              Review shortlists and unblock the pipeline.
            </p>
          </div>
          <DataTable
            columns={columns}
            data={jobs}
            pageCount={1}
            pagination={pagination}
            onPaginationChange={setPagination}
            searchKey="jobs"
            searchValue={searchValue}
            onSearchChange={setSearchValue}
          />
        </div>

        {/* Activity Feed (30%) */}
        <Card className="md:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Activity Feed</CardTitle>
            <CardDescription>Real-time system events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {activity.map((activity, index) => (
                <div key={activity.id} className="relative flex gap-4">
                  {index !== mockActivity.length - 1 && (
                    <span className="absolute left-4 top-8 h-[calc(100%-1rem)] w-px bg-border/50" />
                  )}
                  <div
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all hover:scale-110 
                    ${activity.type === "ai" ? "bg-primary/10 border-primary/20 text-primary shadow-sm" : "bg-muted border-border/50 text-muted-foreground"}`}
                  >
                    {activity.type === "ai" ? (
                      <Zap className="h-4 w-4" />
                    ) : (
                      <Users className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold leading-none">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-6 text-muted-foreground hover:text-primary"
            >
              View All History
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
