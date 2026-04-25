"use client";

import { DataTable } from "@repo/ui/web/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import type { PaginationState } from "@tanstack/react-table";
import { Activity as ActivityIcon, Loader2 } from "lucide-react";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useState } from "react";
import { EmptyState } from "@/components/shared/EmptyState";
import { columns } from "@/features/history/components/activity-table/columns";
import { api } from "@/lib/api";

export const ActivityTable = () => {
  const { data: activities, isLoading } = useQuery({
    queryKey: ["full-activity-log"],
    queryFn: async () => {
      const { data, error } = await api.activities.get();
      if (error) throw error;
      return data;
    },
  });

  const [queryState, setQueryState] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    pageSize: parseAsInteger.withDefault(10),
    search: parseAsString.withDefault(""),
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

  if (!activities || activities.length === 0) {
    return (
      <EmptyState
        icon={ActivityIcon}
        title="No activity recorded"
        description="Your interactions with the platform will appear here."
      />
    );
  }

  const filteredActivities = activities.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(queryState.search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(queryState.search.toLowerCase());
    return matchesSearch;
  });

  return (
    <DataTable
      columns={columns}
      data={filteredActivities}
      totalCount={filteredActivities.length}
      pageCount={Math.ceil(filteredActivities.length / queryState.pageSize)}
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
      searchKey="activity"
      searchValue={queryState.search}
      onSearchChange={(search) => setQueryState({ search, page: 1 })}
      onClearFilters={() => setQueryState({ search: "", page: 1 })}
    />
  );
};

export default ActivityTable;
