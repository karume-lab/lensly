"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent } from "@repo/ui/web/components/ui/card";
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
    const intent = decision === "approve" ? "Approved for Interview" : "Rejected";
    const message =
      decision === "approve" ? "Candidate shortlisted!" : "Rejection sent to candidate.";

    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
      loading: `Processing ${decision}...`,
      success: `${intent}: ${message}`,
      error: "Update failed.",
    });

    setTimeout(() => {
      router.push(`/dashboard/jobs/${jobId}/shortlist`);
    }, 2000);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-[64px] flex flex-col bg-background animate-in slide-in-from-right duration-500 overflow-hidden"
      data-candidate-id={candidateId}
      data-job-id={jobId}
    >
      {/* Top Breadcrumb/Nav */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border/50 bg-card/50 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
            <Link href={`/dashboard/jobs/${jobId}/shortlist`}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex flex-col">
            <h2 className="text-sm font-bold leading-none">{data.name}</h2>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
              {data.role}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground mr-2 font-medium">Candidate 1 of 5</span>
          <Button variant="outline" size="icon" className="h-8 w-8 disabled:opacity-30" disabled>
            <ChevronRight className="h-4 w-4 rotate-180" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 hover:bg-primary/5 hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane: AI reasoning (50%) */}
        <div className="flex-1 flex flex-col border-r border-border/50 overflow-y-auto custom-scrollbar bg-card/5 animate-in slide-in-from-left duration-700">
          <div className="p-10 space-y-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/20 gap-1 px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                >
                  <Brain className="h-3 w-3 fill-primary" />
                  AI Lens Result
                </Badge>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-medium">Overall Match:</span>
                  <span className="text-2xl font-bold font-mono tracking-tighter text-primary">
                    {data.overallScore}%
                  </span>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl flex items-center justify-between border shadow-lg 
                 ${data.recommendation === "Strong Yes" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600" : "bg-yellow-500/10 border-yellow-500/20 text-yellow-600"}`}
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-background/50 border border-current/20">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest leading-none">
                      Final Recommendation
                    </span>
                    <span className="text-lg font-black tracking-tight">{data.recommendation}</span>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="bg-background/20 font-bold border-current/20 px-4"
                >
                  Verified Match
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Reasoning Breakdown
              </h3>
              <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
                {data.aiReasoning.split("\n\n").map((paragraph, i) => (
                  <p key={`${data.id}-p-${i}`}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-4 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
                    Decision Factor
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    Highest weight placed on technical depth over tenure.
                  </span>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-4 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
                    Context Check
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    Self-taught transition verified via high-quality open source contributions.
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-auto shrink-0 p-6 border-t border-border/50 bg-card/10 backdrop-blur-sm">
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 h-12 gap-2 font-bold border-red-500/20 text-red-500 hover:bg-red-500/10"
                onClick={() => handleDecision("reject")}
                disabled={isUpdating}
              >
                <XCircle className="h-5 w-5" />
                Reject Candidate
              </Button>
              <Button
                className="flex-[2] h-12 gap-2 font-bold bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-600/20"
                onClick={() => handleDecision("approve")}
                disabled={isUpdating}
              >
                <CheckCircle2 className="h-5 w-5" />
                Approve for Interview
              </Button>
            </div>
          </div>
        </div>

        {/* Right Pane: Source Document / Resume (50%) */}
        <div className="flex-1 bg-muted/20 overflow-y-auto custom-scrollbar flex flex-col relative animate-in slide-in-from-right duration-700">
          <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between px-4 py-2 rounded-lg bg-background/80 backdrop-blur-md border border-border/50 shadow-sm">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-medium">Original Resume: {data.name}_CV.pdf</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-[10px] uppercase font-bold tracking-widest gap-1 hover:text-primary"
            >
              Download <ExternalLink className="h-3 w-3" />
            </Button>
          </div>

          <div className="mt-20 p-8 max-w-2xl mx-auto w-full">
            {/* Beautiful Resume Render */}
            <Card className="bg-background border-none shadow-2xl rounded-none shadow-black/10 overflow-hidden ring-1 ring-border/20">
              <div className="h-2 w-full bg-primary" />
              <CardContent className="p-12 space-y-10">
                {/* Resume Header */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-slate-100">
                      {data.name}
                    </h1>
                    <p className="text-lg font-medium text-primary">
                      {data.profile.skills.slice(0, 3).join(" • ")}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground font-medium">
                      <MapPin className="h-3 w-3" /> {data.profile.location}
                    </div>
                    <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground font-medium">
                      <Mail className="h-3 w-3" /> {data.profile.email}
                    </div>
                    <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground font-medium">
                      <Linkedin className="h-3 w-3" /> {data.profile.linkedin}
                    </div>
                  </div>
                </div>

                {/* Summary Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Technical Skillset
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.profile.skills.map((skill) => (
                      <Badge
                        key={`${data.id}-skill-${skill}`}
                        variant="secondary"
                        className="bg-muted/50 border-none px-3 font-semibold text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Experience Section */}
                <div className="space-y-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Work Experience
                  </h3>
                  <div className="space-y-8">
                    {data.profile.experience.map((exp, i) => (
                      <div key={`${data.id}-exp-${i}`} className="relative pl-6">
                        <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary" />
                        <div className="absolute left-[3.5px] top-4 h-[calc(100%-8px)] w-px bg-border" />

                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="font-bold text-slate-800 dark:text-slate-200">
                            {exp.role} @ {exp.company}
                          </h4>
                          <span className="text-[10px] font-bold text-slate-400">
                            {exp.duration}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((point, j) => (
                            <li
                              key={`${data.id}-exp-${i}-point-${j}`}
                              className="text-xs text-muted-foreground leading-snug list-disc ml-3 border-none"
                            >
                              {point}.
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Education
                  </h3>
                  {data.profile.education.map((edu, i) => (
                    <div
                      key={`${data.id}-edu-${i}`}
                      className="flex justify-between items-baseline"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {edu.degree}
                        </span>
                        <span className="text-xs text-slate-500">{edu.school}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">{edu.year}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="h-20" /> {/* Spacer */}
          </div>
        </div>
      </div>
    </div>
  );
};
