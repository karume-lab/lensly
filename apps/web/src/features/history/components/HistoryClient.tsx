"use client";

import type { HistoryItem } from "@repo/types";
import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import { Input } from "@repo/ui/web/components/ui/input";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Calendar, Download, FileText, Search, TrendingUp } from "lucide-react";
import { useState } from "react";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { mockHistory } from "@/lib/mock-data";

export const HistoryClient = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [searchValue, setSearchValue] = useState("");

  const columns: ColumnDef<HistoryItem>[] = [
    {
      accessorKey: "jobTitle",
      header: "Campaign name",
      cell: ({ row }) => (
        <div className="flex flex-col">
          <span className="font-medium text-sm tracking-tight">{row.original.jobTitle}</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
            <Calendar className="size-3" /> {row.original.date}
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
            <span className="text-[10px] text-muted-foreground font-medium">Scanned</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{row.original.shortlisted}</span>
            <span className="text-[10px] text-muted-foreground font-medium">Shortlisted</span>
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
            <span className="text-[10px] text-muted-foreground font-medium">Match rate</span>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "timeSaved",
      header: "Time saved",
      cell: ({ row }) => (
        <Badge variant="secondary" className="font-medium">
          {row.original.timeSaved}
        </Badge>
      ),
    },
    {
      id: "actions",
      header: () => <div className="text-right">Action</div>,
      cell: () => (
        <div className="text-right">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="size-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      <DashboardHeader
        title="Screening history"
        subtitle="Review and export data from your past autonomous hiring cycles."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Total candidates processed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">1,482</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="size-3 text-emerald-600" /> 12% increase from previous month
            </p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Cumulative efficiency saved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">53.6 hours</div>
            <p className="text-xs text-muted-foreground mt-1">
              Review hours reclaimed for human talent
            </p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Average match precision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">84%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Consistency maintained across assessment batches
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <div className="p-4 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="size-4 text-muted-foreground" />
            <h3 className="font-semibold text-sm">Historical logs</h3>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Filter history..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={mockHistory}
          pageCount={1}
          pagination={pagination}
          onPaginationChange={setPagination}
          searchKey="history"
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />
      </Card>
    </div>
  );
};
