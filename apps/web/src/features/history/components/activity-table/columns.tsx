"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import type { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { Bot, User, UserCheck } from "lucide-react";
import type { api, ExtractData } from "@/lib/api";

type ActivityData = ExtractData<typeof api.activities.get> extends Array<infer T> ? T : never;

export const columns: ColumnDef<ActivityData>[] = [
  {
    accessorKey: "title",
    header: "Action",
    cell: ({ row }) => {
      const type = row.original.type;
      return (
        <div className="flex items-center gap-3">
          <div
            className={`p-1.5 rounded-full ${
              type === "ai"
                ? "bg-blue-100 text-blue-600"
                : type === "candidate"
                  ? "bg-emerald-100 text-emerald-600"
                  : type === "user"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-muted text-muted-foreground"
            }`}
          >
            {type === "ai" ? (
              <Bot className="size-3.5" />
            ) : type === "candidate" ? (
              <UserCheck className="size-3.5" />
            ) : (
              <User className="size-3.5" />
            )}
          </div>
          <span className="font-semibold text-sm tracking-tight capitalize">
            {row.original.title.replace(/_/g, " ")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "subtitle",
    header: "Details",
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground font-medium">{row.original.subtitle}</span>
    ),
  },
  {
    accessorKey: "timestamp",
    header: "Date & Time",
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground">
        {dayjs(row.original.timestamp).format("MMM D, YYYY • h:mm A")}
      </span>
    ),
  },
  {
    accessorKey: "type",
    header: "Source",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-[10px] uppercase tracking-widest font-bold">
        {row.original.type}
      </Badge>
    ),
  },
];
