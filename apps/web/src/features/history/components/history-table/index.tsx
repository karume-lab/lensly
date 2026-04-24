"use client";

import { DataTable } from "@repo/ui/web/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import type { PaginationState } from "@tanstack/react-table";
import { History as HistoryIcon, Loader2 } from "lucide-react";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useState } from "react";
import { EmptyState } from "@/components/shared/EmptyState";
import { api } from "@/lib/api";
import { columns } from "./columns";

export const HistoryTable = () => {
  const { data: history, isLoading } = useQuery({
    queryKey: ["job-history"],
    queryFn: async () => {
      const { data, error } = await api.jobs.history.get();
      if (error) throw error;
      return data;
    },
  });

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

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!history || history.length === 0) {
    return (
      <EmptyState
        icon={HistoryIcon}
        title="No history yet"
        description="Completed hiring campaigns will appear here once you close them."
      />
    );
  }

  const filteredHistory = history.filter((item) => {
    const matchesSearch = item.jobTitle.toLowerCase().includes(queryState.search.toLowerCase());
    return matchesSearch;
  });

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
    />
  );
};

export default HistoryTable;
