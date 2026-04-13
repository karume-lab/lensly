"use client";

import { DataTable } from "@repo/ui/web/components/ui/data-table";
import type { PaginationState } from "@tanstack/react-table";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useState } from "react";
import { type DashboardJob, mockJobs } from "@/lib/mock-data";
import { columns } from "./columns";

export const JobsTable = () => {
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

  const filteredJobs = mockJobs.filter((job: DashboardJob) => {
    const matchesSearch =
      job.title.toLowerCase().includes(queryState.search.toLowerCase()) ||
      job.department.toLowerCase().includes(queryState.search.toLowerCase());
    const matchesStatus = queryState.status === "all" || job.status === queryState.status;
    const matchesDept = queryState.department === "all" || job.department === queryState.department;
    return matchesSearch && matchesStatus && matchesDept;
  });

  const departments = Array.from(new Set(mockJobs.map((j) => j.department)));
  const statuses = Array.from(new Set(mockJobs.map((j) => j.status)));

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
