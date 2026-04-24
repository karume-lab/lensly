"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import { Checkbox } from "@repo/ui/web/components/ui/checkbox";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/web/components/ui/dialog";
import Dropzone from "@repo/ui/web/components/ui/dropzone";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/web/components/ui/tabs";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import {
  CheckCircle2,
  Clock,
  FileUp,
  Globe,
  Loader2,
  Search as SearchIcon,
  Trash2,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";
import { toast } from "sonner";
import { EmptyState } from "@/components/shared/EmptyState";
import type { api, ExtractData } from "@/lib/api";
import {
  useApplicants,
  useScreeningMutation,
  useUploadMetadataMutation,
} from "@/lib/queries/applicant";
import { useJob } from "@/lib/queries/job";

type ApplicantData =
  ExtractData<ReturnType<typeof api.applicants.job>["get"]> extends Array<infer T> ? T : never;

export const IngestionHub = ({ jobId }: { jobId: string }) => {
  const router = useRouter();
  const { data: job, isLoading: jobLoading } = useJob(jobId);
  const { data: applicants, isLoading: applicantsLoading } = useApplicants(jobId);
  const screeningMutation = useScreeningMutation();
  const uploadMutation = useUploadMetadataMutation();

  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ shallow: true }),
  );
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const toggleCandidate = (id: string) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const columns: ColumnDef<ApplicantData>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            const allIds = table.getRowModel().rows.map((r) => r.original.id);
            if (value) {
              setSelectedCandidates((prev) => Array.from(new Set([...prev, ...allIds])));
            } else {
              setSelectedCandidates((prev) => prev.filter((id) => !allIds.includes(id)));
            }
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={selectedCandidates.includes(row.original.id)}
          onCheckedChange={() => toggleCandidate(row.original.id)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Candidate",
      cell: ({ row }) => {
        const applicant = row.original;
        return (
          <div className="flex flex-col">
            <span className="font-medium text-sm">{applicant.name}</span>
            <span className="text-xs text-muted-foreground">
              {applicant.structuredData?.experience?.[0]?.duration || "N/A"}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "skills",
      header: "Role and skills",
      cell: ({ row }) => {
        const applicant = row.original;
        const skills = applicant.structuredData?.skills || [];
        return (
          <div className="flex flex-wrap gap-1">
            {skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-[10px] font-medium px-1.5 py-0">
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <span className="text-[10px] text-muted-foreground ml-1">
                +{skills.length - 3} more
              </span>
            )}
            {skills.length === 0 && (
              <span className="text-[10px] text-muted-foreground">No skills listed</span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge variant="secondary" className="capitalize">
          {row.original.status.replace("_", " ")}
        </Badge>
      ),
    },
    {
      accessorKey: "source",
      header: "Source",
      cell: ({ row }) => (
        <span className="text-muted-foreground text-sm">{row.original.source}</span>
      ),
    },
  ];

  const handleFileDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      toast.info("Extracting data", {
        description: `Processing ${acceptedFiles.length} resume(s).`,
      });

      try {
        for (const file of acceptedFiles) {
          // Simulate extraction and upload
          await uploadMutation.mutateAsync({
            jobId,
            name: file.name.replace(".pdf", ""),
            source: "External Upload",
            structuredData: {
              skills: ["Extracted Skill"],
              experience: [{ duration: "Pending Analysis" }],
            },
          });
        }
        toast.success("Candidates added successfully");
      } catch (_error) {
        toast.error("Failed to upload candidates");
      }
    }
  };

  const handleRunPipeline = async () => {
    try {
      for (const id of selectedCandidates) {
        await screeningMutation.mutateAsync(id);
      }
      toast.success("Screening complete for all selected candidates");
      router.push(`/dashboard/jobs/${jobId}/shortlist`);
    } catch (_error) {
      toast.error("Screening failed");
    } finally {
      setShowConfirmModal(false);
    }
  };

  if (jobLoading || applicantsLoading) {
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
          <h1 className="text-2xl font-semibold tracking-tight">Ingestion hub</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              Job: <span className="text-foreground font-medium">{job?.title}</span>
            </span>
            <Badge variant="secondary" className="h-5 px-1.5 py-0 text-[10px] font-medium">
              {job?.department}
            </Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="network" className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <TabsList>
            <TabsTrigger value="network" className="gap-2 px-6">
              <Globe className="size-4" />
              Network Candidates
            </TabsTrigger>
            <TabsTrigger value="external" className="gap-2 px-6">
              <FileUp className="size-4" />
              External uploads
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="network" className="mt-0">
          {!applicants || applicants.length === 0 ? (
            <EmptyState
              icon={SearchIcon}
              title="No applicants yet"
              description="Upload resumes or wait for candidates to apply to see them here."
            />
          ) : (
            <DataTable
              columns={columns}
              data={applicants}
              pageCount={1}
              pagination={pagination}
              onPaginationChange={setPagination}
              searchKey="name"
              searchValue={search || ""}
              onSearchChange={setSearch}
            />
          )}
        </TabsContent>

        <TabsContent value="external" className="mt-0">
          <div className="flex flex-col gap-6">
            <Dropzone
              accept={{ "application/pdf": [".pdf"] }}
              multiple
              onDrop={handleFileDrop}
              dropZoneClassName="border-border bg-muted/20 hover:bg-muted/30 p-12 h-auto gap-4 flex-col transition-colors"
            >
              {(dropzone) => (
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center bg-primary/5 text-primary">
                    {dropzone.isDragAccept ? (
                      <Loader2 className="size-8 animate-spin" />
                    ) : (
                      <FileUp className="size-8" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">
                      {dropzone.isDragAccept ? "Release to upload" : "Upload candidate resumes"}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Drag and drop PDF files from your system. Data is extracted and analyzed
                      automatically.
                    </p>
                  </div>
                  <Button type="button" variant="outline" disabled={uploadMutation.isPending}>
                    {uploadMutation.isPending ? "Uploading..." : "Browse files"}
                  </Button>
                </div>
              )}
            </Dropzone>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    Automatic extraction
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Resumes are parsed instantly using localized extraction protocols.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Zap className="size-4 text-primary" />
                    Batch processing
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Evaluate multiple applications simultaneously for efficient screening.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Trash2 className="size-4 text-muted-foreground" />
                    Data privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Process is secured via private endpoints. No data is stored or shared.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {selectedCandidates.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50">
          <div className="bg-primary border border-primary/20 p-3 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-primary-foreground pl-2">
              <div className="flex flex-col">
                <p className="text-sm font-semibold">
                  {selectedCandidates.length} candidates selected
                </p>
                <p className="text-[10px] opacity-80 uppercase tracking-wider">
                  Ready for screening
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-white/10"
                onClick={() => setSelectedCandidates([])}
                disabled={screeningMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => setShowConfirmModal(true)}
                disabled={screeningMutation.isPending}
              >
                Run screening
                <Zap className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Zap className="size-5 text-primary" />
              Candidate assessment
            </DialogTitle>
            <DialogDescription className="pt-2">
              Evaluate {selectedCandidates.length} candidates against defined job criteria.
              <br />
              <br />
              Screening will compare each profile against requirements for skills, experience, and
              education.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-muted p-4 border border-border flex gap-4 items-center">
            <Clock className="size-5 text-muted-foreground" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold">
                Processing time: ~{selectedCandidates.length * 3}s
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Evaluation powered by concurrent analysis.
              </p>
            </div>
          </div>
          <DialogFooter className="flex sm:justify-between py-2 items-center">
            <Button
              variant="ghost"
              onClick={() => setShowConfirmModal(false)}
              disabled={screeningMutation.isPending}
            >
              Back
            </Button>
            <Button onClick={handleRunPipeline} disabled={screeningMutation.isPending}>
              {screeningMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Start screening"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
