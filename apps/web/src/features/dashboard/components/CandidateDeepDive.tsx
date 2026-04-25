"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card } from "@repo/ui/web/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  FileText,
  Loader2,
  Mail,
  MapPin,
  TrendingUp,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { api, type ExtractData } from "@/lib/api";
import { useShortlist, useUpdateApplicantStatusMutation } from "@/lib/queries/applicant";

type DeepDiveData = NonNullable<ExtractData<ReturnType<typeof api.applicants>["deep-dive"]["get"]>>;

export const CandidateDeepDive = ({
  jobId,
  candidateId,
}: {
  jobId: string;
  candidateId: string;
}) => {
  const router = useRouter();
  const { data, isLoading } = useQuery<DeepDiveData>({
    queryKey: ["candidate-deep-dive", candidateId],
    queryFn: async () => {
      const { data, error } = await api.applicants({ id: candidateId })["deep-dive"].get();
      if (error) throw error;
      return data;
    },
  });

  const statusMutation = useUpdateApplicantStatusMutation(candidateId);
  const { data: shortlist } = useShortlist(jobId);

  const handleDecision = async (decision: "approve" | "reject") => {
    const status = decision === "approve" ? "Interviewing" : "Rejected";

    try {
      await statusMutation.mutateAsync({ status });
      toast.success(`Candidate ${decision === "approve" ? "shortlisted" : "rejected"}`);

      const currentIndex = shortlist?.findIndex((a) => a.applicantId === candidateId) ?? -1;
      const nextCandidate = shortlist && currentIndex !== -1 ? shortlist[currentIndex + 1] : null;

      if (nextCandidate) {
        router.push(`/dashboard/jobs/${jobId}/candidates/${nextCandidate.applicantId}`);
      } else {
        router.push(`/dashboard/jobs/${jobId}/shortlist`);
      }
    } catch (_error) {
      toast.error("Update failed");
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!data) return <div>Candidate not found</div>;

  const screening = data.screening;
  const structured = data.structuredData;

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-[64px] flex flex-col bg-background overflow-hidden"
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
            <p className="text-xs text-muted-foreground mt-1">
              {structured?.experience?.[0]?.role || "N/A"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane: Assessment rationale */}
        <div className="flex-1 flex flex-col border-r border-border overflow-y-auto bg-muted/5">
          <div className="p-10 space-y-8 max-w-2xl mx-auto w-full">
            {screening ? (
              <>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="font-semibold">
                      <Brain className="size-3 mr-2" />
                      Screening match
                    </Badge>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-primary">
                        {screening.overallScore}%
                      </span>
                      <span className="text-xs text-muted-foreground font-medium uppercase">
                        Match rate
                      </span>
                    </div>
                  </div>

                  <div
                    className={`p-4 border flex items-center justify-between ${
                      screening.aiRecommendation === "Strong Yes"
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
                        <p className="text-lg font-bold">{screening.aiRecommendation}</p>
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
                    {screening.aiReasoning?.split("\n\n").map((paragraph, i) => (
                      <p key={`${paragraph.slice(0, 10)}-${i}`} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="p-12 text-center border-2 border-dashed rounded-lg">
                <Brain className="size-12 mx-auto text-muted-foreground opacity-20 mb-4" />
                <p className="text-muted-foreground">
                  Screening not yet performed for this candidate.
                </p>
              </div>
            )}
          </div>

          <div className="mt-auto p-6 border-t border-border bg-card">
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 h-10 border-destructive/20 text-destructive hover:bg-destructive/10"
                onClick={() => handleDecision("reject")}
                loading={statusMutation.isPending}
              >
                <XCircle className="size-4 mr-2" />
                Reject candidate
              </Button>
              <Button
                className="flex-2 h-10 bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => handleDecision("approve")}
                loading={statusMutation.isPending}
              >
                <CheckCircle2 className="size-4 mr-2" />
                Move to Interview
              </Button>
            </div>
          </div>
        </div>

        {/* Right Pane: Source document */}
        <div className="flex-1 bg-muted/20 overflow-y-auto flex flex-col relative">
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-card/80 backdrop-blur-sm border-b border-border">
            <div className="flex items-center gap-2">
              <FileText className="size-4 text-muted-foreground" />
              <span className="text-xs font-medium">Original profile: {data.name}</span>
            </div>
          </div>

          <div className="p-12 max-w-3xl mx-auto w-full">
            <Card className="border border-border bg-card p-12 space-y-10">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h1 className="text-3xl font-bold text-foreground">{data.name}</h1>
                  <p className="text-base font-medium text-emerald-600">
                    {structured?.skills?.slice(0, 3).join(" • ") || "N/A"}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
                    <MapPin className="size-3" /> {structured?.location || "Remote"}
                  </div>
                  <div className="flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
                    <Mail className="size-3" /> {data.email}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Technical skillset
                </h3>
                <div className="flex flex-wrap gap-2">
                  {structured?.skills?.map((skill: string) => (
                    <Badge key={`skill-${skill}`} variant="outline" className="font-medium">
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
                  {structured?.experience?.map((exp, i) => (
                    <div key={`${exp.company}-${exp.role}-${i}`} className="relative pl-6">
                      <div className="absolute left-0 top-1.5 size-2 bg-border" />
                      <div className="absolute left-[3.5px] top-4 h-[calc(100%-8px)] w-px bg-border/50" />

                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-semibold text-foreground">
                          {exp.role} @ {exp.company || "N/A"}
                        </h4>
                        <span className="text-[10px] font-medium text-muted-foreground">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
