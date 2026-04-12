"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  LayoutGrid,
  Settings2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
import { type AppScreeningResult, mockShortlist } from "@/lib/mock-data";

const ScoreIndicator = ({ score }: { score: number }) => {
  const color =
    score >= 80 ? "text-emerald-600" : score >= 60 ? "text-amber-600" : "text-destructive";

  return (
    <div className={`flex items-center justify-center font-semibold text-sm ${color}`}>
      {score}%
    </div>
  );
};

const ExplainabilityRow = ({ candidate }: { candidate: AppScreeningResult }) => {
  const radarData = [
    { subject: "Skills", A: candidate.skillScore, fullMark: 100 },
    { subject: "Experience", A: candidate.experienceScore, fullMark: 100 },
    { subject: "Education", A: candidate.educationScore, fullMark: 100 },
  ];

  return (
    <div className="bg-muted/10 border-t border-border p-6 grid md:grid-cols-2 gap-8 items-start animate-in fade-in duration-300">
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-semibold flex items-center gap-2">
          <LayoutGrid className="size-4 text-muted-foreground" />
          Score breakdown
        </h4>
        <div className="h-64 w-full bg-background border border-border p-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
              />
              <Radar
                name={candidate.applicant.name}
                dataKey="A"
                stroke="var(--primary)"
                fill="var(--primary)"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 min-w-0">
        <div className="space-y-4 min-w-0">
          <div className="flex items-center gap-2 px-1">
            <CheckCircle2 className="size-3 text-emerald-600" />
            <h4 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Strengths
            </h4>
          </div>
          <div className="space-y-2">
            {candidate.strengths.map((s, i) => (
              <div
                key={`${candidate.id}-strength-${i}`}
                className="text-xs p-3 bg-emerald-500/5 border border-emerald-500/10 text-muted-foreground leading-relaxed"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 min-w-0">
          <div className="flex items-center gap-2 px-1">
            <AlertCircle className="size-3 text-amber-600" />
            <h4 className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Gaps</h4>
          </div>
          <div className="space-y-2">
            {candidate.gaps.map((g, i) => (
              <div
                key={`${candidate.id}-gap-${i}`}
                className="text-xs p-3 bg-amber-500/5 border border-amber-500/10 text-muted-foreground leading-relaxed"
              >
                {g}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 pt-4">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/dashboard/jobs/job_01/candidates/${candidate.applicantId}`}>
              View candidate profile
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const AIShortlist = () => {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ shallow: true }),
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns: ColumnDef<AppScreeningResult>[] = [
    {
      id: "rank",
      header: "Rank",
      cell: ({ row }) => (
        <div className="flex justify-center">
          <span
            className={`inline-flex h-7 w-7 items-center justify-center font-semibold text-xs 
              ${row.index < 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border"}`}
          >
            {row.index + 1}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "applicant.name",
      header: "Candidate",
      cell: ({ row }) => {
        const candidate = row.original;
        return (
          <div className="flex flex-col">
            <span className="font-medium text-sm">{candidate.applicant.name}</span>
            <span className="text-xs text-muted-foreground">{candidate.applicant.role}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "overallScore",
      header: () => <div className="text-center w-full">Match score</div>,
      cell: ({ row }) => (
        <div className="flex justify-center">
          <ScoreIndicator score={row.original.overallScore} />
        </div>
      ),
    },
    {
      accessorKey: "aiRecommendation",
      header: "Recommendation",
      cell: ({ row }) => {
        const candidate = row.original;
        const variants: Record<string, string> = {
          "Strong Yes": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
          Maybe: "bg-amber-500/10 text-amber-600 border-amber-500/20",
          No: "bg-destructive/10 text-destructive border-destructive/20",
        };
        return (
          <Badge
            className={variants[candidate.aiRecommendation] || "bg-muted text-muted-foreground"}
            variant="outline"
          >
            {candidate.aiRecommendation}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      header: () => <div className="text-right">Action</div>,
      cell: ({ row }) => (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className={expandedId === row.original.id ? "rotate-180" : ""}
            onClick={(e) => {
              e.stopPropagation();
              setExpandedId((prev) => (prev === row.original.id ? null : row.original.id));
            }}
          >
            <ChevronDown className="size-4" />
          </Button>
        </div>
      ),
    },
  ];

  const handleExport = () => {
    toast.success("Job export initiated", {
      description: "Finalizing data transfer to HRIS.",
    });
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">AI shortlist</h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Candidates for Senior React Developer</span>
            <Badge
              variant="outline"
              className="bg-emerald-500/5 text-emerald-600 border-emerald-500/20 py-0 h-5"
            >
              Screening complete
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/jobs/new">
              <Settings2 className="mr-2 size-4" />
              Update criteria
            </Link>
          </Button>
          <Button size="sm" onClick={handleExport}>
            <Zap className="mr-2 size-4" />
            Export to HRIS
          </Button>
        </div>
      </div>

      <div className="border border-border overflow-hidden bg-card">
        <DataTable
          columns={columns}
          data={mockShortlist}
          pageCount={1}
          pagination={pagination}
          onPaginationChange={setPagination}
          searchKey="candidates"
          searchValue={search || ""}
          onSearchChange={setSearch}
        />
        {expandedId &&
          (() => {
            const candidate = mockShortlist.find((c) => c.id === expandedId);
            return candidate ? (
              <div className="border-t border-border">
                <ExplainabilityRow candidate={candidate} />
              </div>
            ) : null;
          })()}
      </div>

      <p className="text-center text-[10px] text-muted-foreground py-4 uppercase tracking-widest">
        Showing top {mockShortlist.length} results from 45 analyzed candidates
      </p>
    </div>
  );
};
