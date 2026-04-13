"use client";

import { DataTable } from "@repo/ui/web/components/ui/data-table";
import type { PaginationState } from "@tanstack/react-table";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useState } from "react";
import { mockHistory } from "@/lib/mock-data";
import { columns } from "./columns";

export const HistoryTable = () => {
  const [queryState, setQueryState] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    pageSize: parseAsInteger.withDefault(10),
    search: parseAsString.withDefault(""),
    status: parseAsString.withDefault("all"),
  });

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: queryState.page - 1,
    pageSize: queryState.pageSize,
  });

  const filteredHistory = mockHistory.filter((item) => {
    const matchesSearch = item.jobTitle.toLowerCase().includes(queryState.search.toLowerCase());
    const matchesStatus = queryState.status === "all" || item.status === queryState.status;
    return matchesSearch && matchesStatus;
  });

  const statuses = Array.from(new Set(mockHistory.map((h) => h.status)));

  return (
    <DataTable
      columns={columns}
      data={filteredHistory}
      totalCount={filteredHistory.length}
      pageCount={Math.ceil(filteredHistory.length / queryState.pageSize)}
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
      searchKey="history"
      searchValue={queryState.search}
      onSearchChange={(search) => setQueryState({ search, page: 1 })}
      onClearFilters={() => setQueryState({ search: "", status: "all", page: 1 })}
      filterConfigs={[
        {
          name: "Status",
          value: queryState.status,
          onValueChange: (status) => setQueryState({ status, page: 1 }),
          options: statuses.map((s) => ({ label: s, value: s })),
        },
      ]}
    />
  );
};

export default HistoryTable;
