"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { Calendar, Download } from "lucide-react";
import type { api, ExtractData } from "@/lib/api";

type HistoryData = ExtractData<typeof api.jobs.history.get> extends Array<infer T> ? T : never;

export const columns: ColumnDef<HistoryData>[] = [
  {
    accessorKey: "jobTitle",
    header: "Campaign name",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm tracking-tight">{row.original.jobTitle}</span>
        <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
          <Calendar className="size-3" /> {dayjs(row.original.date).format("MMM D, YYYY")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "candidates",
    header: "Metrics",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{row.original.candidates}</span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
            Scanned
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{row.original.shortlisted}</span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
            Shortlisted
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "avgScore",
    header: "Assessment precision",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-primary">{row.original.avgScore}%</span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
            Match rate
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "timeSaved",
    header: "Time saved",
    cell: ({ row }) => (
      <Badge variant="secondary" className="font-bold uppercase tracking-wider text-[10px]">
        {row.original.timeSaved}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right">Action</div>,
    cell: () => (
      <div className="text-right">
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted">
          <Download className="size-4" />
        </Button>
      </div>
    ),
  },
];
