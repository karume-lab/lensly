"use client";

import { DataTable } from "@repo/ui/web/components/ui/data-table";
import type { PaginationState } from "@tanstack/react-table";
import { Briefcase, Loader2 } from "lucide-react";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useState } from "react";
import { EmptyState } from "@/components/shared/EmptyState";
import { useJobs } from "@/lib/queries/job";
import { columns } from "./columns";

export const JobsTable = () => {
  const { data: jobs, isLoading } = useJobs();

  const [queryState, setQueryState] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    pageSize: parseAsInteger.withDefault(10),
    search: parseAsString.withDefault(""),
    status: parseAsString.withDefault("all"),
    department: parseAsString.withDefault("all"),
  });

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: queryState.page - 1,
    pageSize: queryState.pageSize,
  });

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!jobs || jobs.length === 0) {
    return (
      <EmptyState
        icon={Briefcase}
        title="No active campaigns"
        description="Create your first hiring campaign to start screening candidates with AI."
        action={{
          label: "Create Job",
          href: "/dashboard/jobs/new",
        }}
      />
    );
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(queryState.search.toLowerCase()) ||
      job.department.toLowerCase().includes(queryState.search.toLowerCase());
    const matchesStatus = queryState.status === "all" || job.status === queryState.status;
    const matchesDept = queryState.department === "all" || job.department === queryState.department;
    return matchesSearch && matchesStatus && matchesDept;
  });

  const departments = Array.from(new Set(jobs.map((j) => j.department)));
  const statuses = Array.from(new Set(jobs.map((j) => j.status)));

  return (
    <DataTable
      columns={columns}
      data={filteredJobs}
      totalCount={filteredJobs.length}
      pageCount={Math.ceil(filteredJobs.length / queryState.pageSize)}
      pagination={{
        pageIndex: queryState.page - 1,
        pageSize: queryState.pageSize,
      }}
      onPaginationChange={(updater) => {
        const nextPagination = typeof updater === "function" ? updater(pagination) : updater;
        setPagination(nextPagination);
        setQueryState({
          page: nextPagination.pageIndex + 1,
          pageSize: nextPagination.pageSize,
        });
      }}
      searchKey="jobs"
      searchValue={queryState.search}
      onSearchChange={(search) => setQueryState({ search, page: 1 })}
      onClearFilters={() =>
        setQueryState({ search: "", status: "all", department: "all", page: 1 })
      }
      filterConfigs={[
        {
          name: "Status",
          value: queryState.status,
          onValueChange: (status) => setQueryState({ status, page: 1 }),
          options: statuses.map((s) => ({ label: s, value: s })),
        },
        {
          name: "Department",
          value: queryState.department,
          onValueChange: (department) => setQueryState({ department, page: 1 }),
          options: departments.map((d) => ({ label: d, value: d })),
        },
      ]}
    />
  );
};

export default JobsTable;
