"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/web/components/ui/dropdown-menu";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpRight, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { toast } from "sonner";
import type { api, ExtractData } from "@/lib/api";
import { useDeleteJobMutation } from "@/lib/queries/job";

type JobData = ExtractData<typeof api.jobs.get> extends Array<infer T> ? T : never;

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

const ActionsCell = ({ job }: { job: JobData }) => {
  const deleteMutation = useDeleteJobMutation();
  const isReview = job.status === "Review Shortlist" || job.status === "Active";

  const handleDelete = () => {
    deleteMutation.mutate(job.id, {
      onSuccess: () => {
        toast.success("Job deleted successfully");
      },
      onError: () => {
        toast.error("Failed to delete job. Please try again.");
      },
    });
  };

  return (
    <div className="flex items-center justify-end gap-2">
      {isReview ? (
        <Button size="sm" asChild className="h-8">
          <Link href={`/dashboard/jobs/${job.id}/shortlist` as Route}>
            <span className="flex items-center gap-1">
              Review results
              <ArrowUpRight className="size-3" />
            </span>
          </Link>
        </Button>
      ) : (
        <Button variant="ghost" size="sm" asChild className="h-8">
          <Link href={`/dashboard/jobs/${job.id}/applicants/ingestion` as Route}>
            View applicants
          </Link>
        </Button>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            aria-label="Open job actions menu"
            disabled={deleteMutation.isPending}
          >
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link
              href={`/dashboard/jobs/${job.id}/edit` as Route}
              className="flex items-center gap-2"
            >
              <Pencil className="size-3.5" />
              Edit job
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive focus:text-destructive flex items-center gap-2"
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
          >
            <Trash2 className="size-3.5" />
            {deleteMutation.isPending ? "Deleting..." : "Delete job"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const columns: ColumnDef<JobData>[] = [
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
        <Badge variant="outline" className={getStatusColor(job.status ?? "Draft")}>
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
            <div className="h-full bg-primary" style={{ width: `${job.avgScore || 0}%` }} />
          </div>
          <span className="text-xs font-medium">{job.avgScore || 0}%</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Action</div>,
    cell: ({ row }) => <ActionsCell job={row.original} />,
  },
];
