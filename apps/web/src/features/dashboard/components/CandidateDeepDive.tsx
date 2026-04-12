"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card } from "@repo/ui/web/components/ui/card";
import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileText,
  Linkedin,
  Mail,
  MapPin,
  TrendingUp,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { mockCandidateDetail } from "@/lib/mock-data";

export const CandidateDeepDive = ({
  jobId,
  candidateId,
}: {
  jobId: string;
  candidateId: string;
}) => {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const data = mockCandidateDetail;

  const handleDecision = (decision: "approve" | "reject") => {
    setIsUpdating(true);
    const intent = decision === "approve" ? "Approved" : "Rejected";
    const message = decision === "approve" ? "Candidate moved to shortlist" : "Rejection recorded";

    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
      loading: `Processing ${decision}...`,
      success: `${intent}: ${message}`,
      error: "Update failed",
    });

    setTimeout(() => {
      router.push(`/dashboard/jobs/${jobId}/shortlist`);
    }, 2000);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-[64px] flex flex-col bg-background animate-in fade-in duration-500 overflow-hidden"
      data-candidate-id={candidateId}
      data-job-id={jobId}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0 bg-card">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
            <Link href={`/dashboard/jobs/${jobId}/shortlist`}>
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-none">{data.name}</h2>
            <p className="text-xs text-muted-foreground mt-1">{data.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="font-medium">Candidate 1 of 5</span>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
              <ChevronRight className="size-4 rotate-180" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane: Assessment rationale */}
        <div className="flex-1 flex flex-col border-r border-border overflow-y-auto bg-muted/5">
          <div className="p-10 space-y-8 max-w-2xl mx-auto w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="font-semibold">
                  <Brain className="size-3 mr-2" />
                  Screening match
                </Badge>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">{data.overallScore}%</span>
                  <span className="text-xs text-muted-foreground font-medium uppercase">
                    Match rate
                  </span>
                </div>
              </div>

              <div
                className={`p-4 border flex items-center justify-between ${
                  data.recommendation === "Strong Yes"
                    ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-600"
                    : "bg-amber-500/5 border-amber-500/20 text-amber-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="size-5" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider opacity-80">
                      Recommendation
                    </p>
                    <p className="text-lg font-bold">{data.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <FileText className="size-4 text-muted-foreground" />
                Assessment rationale
              </h3>
              <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                {data.aiReasoning.split("\n\n").map((paragraph, i) => (
                  <p key={`${data.id}-p-${i}`} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border">
                <div className="p-4 space-y-2">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                    Decision factor
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Highest weight placed on technical depth over tenure.
                  </p>
                </div>
              </Card>
              <Card className="border-border">
                <div className="p-4 space-y-2">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                    Context check
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Self-taught transition verified via high-quality open source contributions.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-auto p-6 border-t border-border bg-card">
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 h-10 border-destructive/20 text-destructive hover:bg-destructive/10"
                onClick={() => handleDecision("reject")}
                disabled={isUpdating}
              >
                <XCircle className="size-4 mr-2" />
                Reject candidate
              </Button>
              <Button
                className="flex-[2] h-10 bg-emerald-600 hover:bg-emerald-700"
                onClick={() => handleDecision("approve")}
                disabled={isUpdating}
              >
                <CheckCircle2 className="size-4 mr-2" />
                Move to interview
              </Button>
            </div>
          </div>
        </div>

        {/* Right Pane: Source document */}
        <div className="flex-1 bg-muted/20 overflow-y-auto flex flex-col relative">
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-card/80 backdrop-blur-sm border-b border-border">
            <div className="flex items-center gap-2">
              <FileText className="size-4 text-muted-foreground" />
              <span className="text-xs font-medium">Original resume: {data.name}_cv.pdf</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-[10px] font-semibold uppercase tracking-widest"
            >
              Download <ExternalLink className="size-3 ml-2" />
            </Button>
          </div>

          <div className="p-12 max-w-3xl mx-auto w-full">
            <Card className="border border-border bg-white dark:bg-zinc-950 p-12 space-y-10">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                    {data.name}
                  </h1>
                  <p className="text-base font-medium text-emerald-600">
                    {data.profile.skills.slice(0, 3).join(" • ")}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
                    <MapPin className="size-3" /> {data.profile.location}
                  </div>
                  <div className="flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
                    <Mail className="size-3" /> {data.profile.email}
                  </div>
                  <div className="flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
                    <Linkedin className="size-3" /> {data.profile.linkedin}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Technical skillset
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.profile.skills.map((skill) => (
                    <Badge
                      key={`${data.id}-skill-${skill}`}
                      variant="outline"
                      className="font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Work experience
                </h3>
                <div className="space-y-8">
                  {data.profile.experience.map((exp, i) => (
                    <div key={`${data.id}-exp-${i}`} className="relative pl-6">
                      <div className="absolute left-0 top-1.5 size-2 bg-border" />
                      <div className="absolute left-[3.5px] top-4 h-[calc(100%-8px)] w-px bg-border/50" />

                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                          {exp.role} @ {exp.company}
                        </h4>
                        <span className="text-[10px] font-medium text-muted-foreground">
                          {exp.duration}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((point, j) => (
                          <li
                            key={`${data.id}-exp-${i}-point-${j}`}
                            className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="mt-1.5 size-1 shrink-0 bg-slate-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Education
                </h3>
                {data.profile.education.map((edu, i) => (
                  <div key={`${data.id}-edu-${i}`} className="flex justify-between items-baseline">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold">{edu.degree}</span>
                      <span className="text-xs text-muted-foreground">{edu.school}</span>
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
