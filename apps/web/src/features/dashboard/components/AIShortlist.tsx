"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  LayoutGrid,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
import { type AppScreeningResult, mockShortlist } from "@/lib/mock-data";

const ScoreDonut = ({ score }: { score: number }) => {
  const color = score >= 80 ? "text-emerald-500" : score >= 60 ? "text-yellow-500" : "text-red-500";
  const strokeColor = score >= 80 ? "#10b981" : score >= 60 ? "#eab308" : "#ef4444";
  const circumference = 2 * Math.PI * 18;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div
      className={`relative h-12 w-12 flex items-center justify-center font-bold font-mono text-sm ${color}`}
    >
      <svg className="h-12 w-12 -rotate-90 transform" role="img" aria-label={`Score: ${score}%`}>
        <title>{`Score: ${score}%`}</title>
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          className="text-muted/30"
        />
        <motion.circle
          cx="24"
          cy="24"
          r="18"
          stroke={strokeColor}
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute">{score}</span>
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
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="overflow-hidden bg-muted/30 border-t border-border/50"
    >
      <div className="p-8 grid md:grid-cols-2 gap-8 items-start">
        {/* Radar Chart */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold flex items-center gap-2">
            <LayoutGrid className="h-4 w-4 text-primary" />
            AI Score Breakdown
          </h4>
          <div className="h-64 w-full bg-background/50 rounded-xl border border-border/50 shadow-inner p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#88888844" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#888" }} />
                <Radar
                  name={candidate.applicant.name}
                  dataKey="A"
                  stroke="#2563eb"
                  fill="#2563eb"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Strengths & Gaps */}
        <div className="grid grid-cols-2 gap-6 min-w-0">
          <div className="space-y-4 min-w-0">
            <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2 px-1">
              <CheckCircle2 className="h-3 w-3 flex-shrink-0" />
              <span className="truncate group-hover:overflow-visible group-hover:whitespace-normal">
                Strengths
              </span>
            </h4>
            <div className="space-y-2">
              {candidate.strengths.map((s, i) => (
                <div
                  key={`${candidate.id}-strength-${i}`}
                  className="text-xs p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-muted-foreground leading-relaxed break-words"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 min-w-0">
            <h4 className="text-xs font-bold text-yellow-600 uppercase tracking-widest flex items-center gap-2 px-1">
              <AlertCircle className="h-3 w-3 flex-shrink-0" />
              <span className="truncate group-hover:overflow-visible group-hover:whitespace-normal">
                Identified Gaps
              </span>
            </h4>
            <div className="space-y-2">
              {candidate.gaps.map((g, i) => (
                <div
                  key={`${candidate.id}-gap-${i}`}
                  className="text-xs p-2.5 rounded-lg bg-yellow-500/5 border border-yellow-500/10 text-muted-foreground leading-relaxed break-words"
                >
                  {g}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 pt-4">
            <Button asChild className="w-full group shadow-xl shadow-primary/10">
              <Link href={`/dashboard/jobs/job_01/candidates/${candidate.applicantId}`}>
                View Human-in-the-Loop Validation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
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
            className={`inline-flex h-7 w-7 items-center justify-center rounded-full font-bold text-xs 
              ${row.index < 3 ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted text-muted-foreground border border-border/50"}`}
          >
            #0{row.index + 1}
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
            <span className="font-semibold text-sm">{candidate.applicant.name}</span>
            <span className="text-xs text-muted-foreground">{candidate.applicant.role}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "overallScore",
      header: () => <div className="text-center w-full">Overall Match</div>,
      cell: ({ row }) => (
        <div className="flex justify-center">
          <ScoreDonut score={row.original.overallScore} />
        </div>
      ),
    },
    {
      accessorKey: "aiRecommendation",
      header: "AI Recommendation",
      cell: ({ row }) => {
        const candidate = row.original;
        return (
          <Badge
            className={`
              ${candidate.aiRecommendation === "Strong Yes" && "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20"}
              ${candidate.aiRecommendation === "Maybe" && "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 border-yellow-500/20"}
              ${candidate.aiRecommendation === "No" && "bg-red-500/10 text-red-600 hover:bg-red-500/20 border-red-500/20"}
            `}
            variant="secondary"
          >
            {candidate.aiRecommendation}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className={`transition-transform duration-300 ${expandedId === row.original.id ? "rotate-180" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand(row.original.id);
            }}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleExport = () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
      loading: "Preparing CSV export...",
      success: "Shortlist exported to HRIS successfully!",
      error: "Export failed.",
    });
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 animate-in fly-in-from-right duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Shortlist</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            Top ranked candidates for{" "}
            <span className="text-foreground font-semibold">Senior React Developer</span>
            <Badge
              variant="outline"
              className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 gap-1"
            >
              <Sparkles className="h-3 w-3" />
              Screening Complete
            </Badge>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <Link href="/dashboard/jobs/new">
              <Settings2 className="h-4 w-4" />
              Recalibrate Weights
            </Link>
          </Button>
          <Button size="sm" className="gap-2 shadow-lg shadow-primary/10" onClick={handleExport}>
            <Zap className="h-4 w-4 fill-primary" />
            Export to HRIS
          </Button>
        </div>
      </div>

      <div className="border border-border/50 rounded-xl overflow-hidden shadow-xl shadow-black/5">
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
        <AnimatePresence>
          {expandedId &&
            (() => {
              const candidate = mockShortlist.find((c) => c.id === expandedId);
              return candidate ? (
                <div className="border-t border-border/50 bg-muted/20">
                  <ExplainabilityRow candidate={candidate} />
                </div>
              ) : null;
            })()}
        </AnimatePresence>
      </div>

      <p className="text-center text-xs text-muted-foreground py-4">
        Showing top {mockShortlist.length} results. Total candidates analyzed: 45.
      </p>
    </div>
  );
};
