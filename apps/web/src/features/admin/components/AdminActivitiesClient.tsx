"use client";

import { DataTable } from "@repo/ui/web/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import type { ColumnDef, OnChangeFn, PaginationState } from "@tanstack/react-table";
import { Loader2 } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import { useMemo } from "react";

import type { api, ExtractData } from "@/lib/api";
import { adminActivitiesQuery } from "@/lib/queries/admin";

type AdminActivity = NonNullable<ExtractData<typeof api.admin.activities.get>>["data"][number];

export const AdminActivitiesClient = () => {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ shallow: false }),
  );
  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsInteger.withDefault(20).withOptions({ shallow: false }),
  );

  const { data: response, isLoading } = useQuery(adminActivitiesQuery(page, limit));

  const pagination = {
    pageIndex: page - 1,
    pageSize: limit,
  };

  const onPaginationChange: OnChangeFn<PaginationState> = (updaterOrValue) => {
    const nextPagination =
      typeof updaterOrValue === "function" ? updaterOrValue(pagination) : updaterOrValue;

    setPage(nextPagination.pageIndex + 1);
    setLimit(nextPagination.pageSize);
  };

  const columns: ColumnDef<AdminActivity>[] = useMemo(
    () => [
      {
        accessorKey: "timestamp",
        header: "Time",
        cell: ({ row }) => new Date(row.original.timestamp).toLocaleString(),
      },
      {
        accessorKey: "user",
        header: "User",
        cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="font-medium">{row.original.user}</span>
            <span className="text-xs text-muted-foreground">{row.original.userEmail}</span>
          </div>
        ),
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <span className="font-mono text-xs uppercase bg-secondary px-2 py-1 rounded">
            {row.original.action.replace("_", " ")}
          </span>
        ),
      },
      {
        accessorKey: "entityType",
        header: "Entity",
      },
      {
        accessorKey: "entityId",
        header: "Entity ID",
        cell: ({ row }) => (
          <span className="font-mono text-xs text-muted-foreground">{row.original.entityId}</span>
        ),
      },
    ],
    [],
  );

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">System Audit Log</h2>
        <p className="text-sm text-muted-foreground">
          Monitor all platform-wide activities and administrative actions.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={response?.data || []}
        pageCount={response?.metadata?.totalPages || 0}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
    </div>
  );
};
