"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { DashboardJob } from "@/lib/mock-data";

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Screening":
      return "bg-info/10 text-info-foreground border-info/20 uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
    case "Shortlisting":
      return "bg-primary/10 text-primary border-primary/20 uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
    case "Review Shortlist":
      return "bg-warning/10 text-warning-foreground border-warning/20 uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
    case "Draft":
      return "bg-muted text-muted-foreground border-border uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
    default:
      return "bg-muted text-muted-foreground border-border uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
  }
};

export const columns: ColumnDef<DashboardJob>[] = [
  {
    accessorKey: "title",
    header: "Role",
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
      return (
        <Badge variant="outline" className={getStatusColor(job.status)}>
          {job.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "avgScore",
    header: "Avg. Match",
    cell: ({ row }) => {
      const job = row.original;
      return (
        <div className="flex items-center gap-2">
          <div className="w-16 h-1.5 bg-muted overflow-hidden rounded-full">
            <div className="h-full bg-primary" style={{ width: `${job.avgScore}%` }} />
          </div>
          <span className="text-xs font-medium">{job.avgScore}%</span>
        </div>
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
