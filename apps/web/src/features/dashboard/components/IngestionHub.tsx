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
import { CheckCircle2, Clock, FileUp, Globe, Loader2, Trash2, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";
import { toast } from "sonner";
import { type IngestionApplicant, mockUmuravaApplicants } from "@/lib/mock-data";

export const IngestionHub = ({ jobId }: { jobId: string }) => {
  const router = useRouter();
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ shallow: true }),
  );
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const toggleCandidate = (id: string) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const columns: ColumnDef<IngestionApplicant>[] = [
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
              {applicant.experience} years experience
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
        return (
          <div className="flex flex-wrap gap-1">
            {applicant.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-[10px] font-medium px-1.5 py-0">
                {skill}
              </Badge>
            ))}
            {applicant.skills.length > 3 && (
              <span className="text-[10px] text-muted-foreground ml-1">
                +{applicant.skills.length - 3} more
              </span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => (
        <span className="text-muted-foreground text-sm">{row.original.location}</span>
      ),
    },
    {
      accessorKey: "matchPotential",
      header: () => <div className="text-right">Match potential</div>,
      cell: ({ row }) => {
        const applicant = row.original;
        return (
          <div className="flex items-center justify-end gap-2">
            <div className="w-12 h-1.5 bg-muted overflow-hidden shrink-0">
              <div
                className={`h-full ${applicant.matchPotential > 80 ? "bg-primary" : "bg-amber-500"}`}
                style={{ width: `${applicant.matchPotential}%` }}
              />
            </div>
            <span
              className={`font-semibold text-sm ${applicant.matchPotential > 80 ? "text-primary" : "text-amber-600"}`}
            >
              {applicant.matchPotential}%
            </span>
          </div>
        );
      },
    },
  ];

  const handleFileDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      toast.info("Extracting data", {
        description: "Processing resume contents.",
      });
      setTimeout(() => {
        toast.success("Candidates added");
      }, 2000);
    }
  };

  const handleRunPipeline = () => {
    setIsProcessing(true);
    toast.promise(new Promise((resolve) => setTimeout(resolve, 3000)), {
      loading: "Evaluating candidates...",
      success: "Screening complete",
      error: "Processing failed",
    });
    setTimeout(() => {
      router.push(`/dashboard/jobs/${jobId}/shortlist`);
    }, 3500);
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Ingestion hub</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              Job: <span className="text-foreground font-medium">Senior React Developer</span>
            </span>
            <Badge variant="secondary" className="h-5 px-1.5 py-0 text-[10px] font-medium">
              Engineering
            </Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="umurava" className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <TabsList>
            <TabsTrigger value="umurava" className="gap-2 px-6">
              <Globe className="size-4" />
              Umurava network
            </TabsTrigger>
            <TabsTrigger value="external" className="gap-2 px-6">
              <FileUp className="size-4" />
              External uploads
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="umurava" className="mt-0">
          <DataTable
            columns={columns}
            data={mockUmuravaApplicants}
            pageCount={1}
            pagination={pagination}
            onPaginationChange={setPagination}
            searchKey="candidates"
            searchValue={search || ""}
            onSearchChange={setSearch}
          />
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
                  <Button type="button" variant="outline">
                    Browse files
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
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => setShowConfirmModal(true)}
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
              <p className="text-sm font-semibold">Processing time: ~8s</p>
              <p className="text-xs text-muted-foreground mt-1">
                Evaluation powered by concurrent analysis.
              </p>
            </div>
          </div>
          <DialogFooter className="flex sm:justify-between py-2 items-center">
            <Button
              variant="ghost"
              onClick={() => setShowConfirmModal(false)}
              disabled={isProcessing}
            >
              Back
            </Button>
            <Button onClick={handleRunPipeline} disabled={isProcessing}>
              {isProcessing ? (
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
