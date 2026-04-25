"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import type { ColumnDef, OnChangeFn, PaginationState } from "@tanstack/react-table";
import { Loader2, Users } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import { useMemo } from "react";

import type { api, ExtractData } from "@/lib/api";
import { adminJobsQuery } from "@/lib/queries/admin";

type AdminJob = NonNullable<ExtractData<typeof api.admin.jobs.get>>["data"][number];

export const AdminJobsClient = () => {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ shallow: false }),
  );
  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsInteger.withDefault(10).withOptions({ shallow: false }),
  );

  const { data: response, isLoading } = useQuery(adminJobsQuery(page, limit));

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

  const columns: ColumnDef<AdminJob>[] = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Job Title",
        cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="font-bold">{row.original.title}</span>
            <span className="text-xs text-muted-foreground">{row.original.department}</span>
          </div>
        ),
      },
      {
        accessorKey: "seniority",
        header: "Seniority",
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const status = row.original.status;
          return (
            <Badge
              variant={
                status === "Open" ? "default" : status === "Closed" ? "destructive" : "secondary"
              }
            >
              {status}
            </Badge>
          );
        },
      },
      {
        accessorKey: "applicantCount",
        header: "Applicants",
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{row.original.applicantCount}</span>
          </div>
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Created",
        cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Platform Jobs</h2>
          <p className="text-sm text-muted-foreground">
            Manage all job postings across the platform.
          </p>
        </div>
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
