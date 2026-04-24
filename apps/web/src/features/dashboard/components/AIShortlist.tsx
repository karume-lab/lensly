"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  LayoutGrid,
  Loader2,
  Settings2,
  Zap,
} from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
import { api, type ExtractData } from "@/lib/api";
import { useJob } from "@/lib/queries/job";

type ShortlistData = ExtractData<ReturnType<typeof api.applicants.job>["shortlist"]["get"]>;
type CandidateData = ShortlistData extends Array<infer T> ? T : never;

const ScoreIndicator = ({ score }: { score: number }) => {
  const color =
    score >= 80 ? "text-emerald-600" : score >= 60 ? "text-amber-600" : "text-destructive";

  return (
    <div className={`flex items-center justify-center font-semibold text-sm ${color}`}>
      {score}%
    </div>
  );
};

const ExplainabilityRow = ({ candidate, jobId }: { candidate: CandidateData; jobId: string }) => {
  const radarData = [
    { subject: "Skills", A: candidate.skillScore, fullMark: 100 },
    { subject: "Experience", A: candidate.experienceScore, fullMark: 100 },
    { subject: "Education", A: candidate.educationScore, fullMark: 100 },
  ];

  return (
    <div className="bg-muted/10 border-t border-border p-6 grid md:grid-cols-2 gap-8 items-start  duration-300">
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
            {candidate.strengths.map((s: string, i: number) => (
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
            {candidate.gaps.map((g: string, i: number) => (
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
            <Link href={`/dashboard/jobs/${jobId}/candidates/${candidate.applicantId}` as Route}>
              View candidate profile
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const AIShortlist = ({ jobId }: { jobId: string }) => {
  const { data: job, isLoading: jobLoading } = useJob(jobId);
  const { data: shortlist, isLoading: shortlistLoading } = useQuery({
    queryKey: ["shortlist", jobId],
    queryFn: async () => {
      const { data, error } = await api.applicants.job({ jobId }).shortlist.get();
      if (error) throw error;
      return data;
    },
  });

  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ shallow: true }),
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns: ColumnDef<CandidateData>[] = [
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
    if (!shortlist) return;

    const headers = ["Rank", "Candidate", "Role", "Match Score", "Recommendation"];
    const rows = shortlist.map((c, i) => [
      i + 1,
      c.applicant.name,
      c.applicant.role,
      `${c.overallScore}%`,
      c.aiRecommendation,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      headers.join(",") +
      "\n" +
      rows.map((r) => r.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `shortlist_${jobId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Job export initiated", {
      description: "Shortlist data exported to CSV.",
    });
  };

  if (jobLoading || shortlistLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">AI shortlist</h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Candidates for {job?.title}</span>
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
            <Link href={`/dashboard/jobs/${jobId}/settings` as Route}>
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
          data={shortlist || []}
          pageCount={1}
          pagination={pagination}
          onPaginationChange={setPagination}
          searchKey="name"
          searchValue={search || ""}
          onSearchChange={setSearch}
        />
        {expandedId &&
          (() => {
            const candidate = shortlist?.find((c) => c.id === expandedId);
            return candidate ? (
              <div className="border-t border-border">
                <ExplainabilityRow candidate={candidate} jobId={jobId} />
              </div>
            ) : null;
          })()}
      </div>

      <p className="text-center text-[10px] text-muted-foreground py-4 uppercase tracking-widest">
        Showing top {shortlist?.length || 0} results from {job?.applicantCount || 0} analyzed
        candidates
      </p>
    </div>
  );
};
