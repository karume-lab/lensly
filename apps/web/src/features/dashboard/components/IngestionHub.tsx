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
import { AnimatePresence, motion } from "framer-motion";
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
            <span className="font-semibold text-sm">{applicant.name}</span>
            <span className="text-xs text-muted-foreground">{applicant.experience} Years Exp.</span>
          </div>
        );
      },
    },
    {
      accessorKey: "skills",
      header: "Role & Skills",
      cell: ({ row }) => {
        const applicant = row.original;
        return (
          <div className="flex flex-wrap gap-1">
            {applicant.skills.slice(0, 3).map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-[10px] font-medium bg-background/50 px-1.5 py-0"
              >
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
      header: () => <div className="text-right">Match Potential</div>,
      cell: ({ row }) => {
        const applicant = row.original;
        return (
          <div className="flex items-center justify-end gap-2">
            <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden shrink-0">
              <motion.div
                className={`h-full ${applicant.matchPotential > 80 ? "bg-primary" : "bg-yellow-500"}`}
                initial={{ width: 0 }}
                animate={{ width: `${applicant.matchPotential}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <span
              className={`font-mono font-bold text-sm ${applicant.matchPotential > 80 ? "text-primary" : "text-yellow-600 dark:text-yellow-400"}`}
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
      toast.info("Extracting Resume Data...", {
        description: "Simulating PDF parsing on the client-side.",
      });
      setTimeout(() => {
        toast.success(`${acceptedFiles.length} External Candidate(s) Added!`);
      }, 2000);
    }
  };

  const handleRunPipeline = () => {
    setIsProcessing(true);
    toast.promise(new Promise((resolve) => setTimeout(resolve, 3000)), {
      loading: "Gemini is evaluating candidates...",
      success: "Screening Complete! 12 High-potential matches found.",
      error: "Pipeline failed.",
    });
    setTimeout(() => {
      router.push(`/dashboard/jobs/${jobId}/shortlist`);
    }, 3500);
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ingestion Hub</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            Job: <span className="text-foreground font-semibold">Senior React Developer</span>
            <Badge
              variant="outline"
              className="text-[10px] uppercase font-bold tracking-widest bg-muted border-border/50"
            >
              # Engineering
            </Badge>
          </p>
        </div>
      </div>

      <Tabs defaultValue="umurava" className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <TabsList className="bg-muted/50 border border-border/50 p-1">
            <TabsTrigger
              value="umurava"
              className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm px-6"
            >
              <Globe className="h-4 w-4" />
              Umurava Network
            </TabsTrigger>
            <TabsTrigger
              value="external"
              className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm px-6"
            >
              <FileUp className="h-4 w-4" />
              External Uploads
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="umurava" className="mt-0 space-y-4">
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
              dropZoneClassName="border-border/50 bg-card/20 hover:bg-card/40 hover:border-primary/30 rounded-xl p-12 h-auto gap-4 flex-col"
            >
              {(dropzone) => (
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    {dropzone.isDragAccept ? (
                      <Loader2 className="h-10 w-10 animate-spin" />
                    ) : (
                      <FileUp className="h-10 w-10" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {dropzone.isDragAccept ? "Release to upload!" : "Drop your resumes here"}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto mt-1">
                      Drag and drop PDF files directly from your desktop. We'll automatically
                      extract the text for Gemini to analyze.
                    </p>
                  </div>
                  <Button type="button" className="mt-2 shadow-xl shadow-primary/10">
                    Browse Local Files
                  </Button>
                </div>
              )}
            </Dropzone>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border/50 bg-card/40">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Automatic OCR
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground">
                    Every PDF is parsed instantly using our client-side extraction engine.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/40">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Batch Processing
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground">
                    Upload up to 50 resumes at once for large-scale talent pooling.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/40">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Trash2 className="h-4 w-4 text-red-500" />
                    Privacy First
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground">
                    Data is processed via private Gemini endpoints. No training on candidate info.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Sticky Action Footer */}
      <AnimatePresence>
        {selectedCandidates.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 pointer-events-none"
          >
            <div className="bg-primary shadow-2xl shadow-primary/40 rounded-2xl p-4 flex items-center justify-between gap-6 pointer-events-auto border border-white/20">
              <div className="flex items-center gap-4 text-primary-foreground pl-4">
                <div className="flex -space-x-3 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-primary bg-primary-foreground/20 text-[10px] flex items-center justify-center font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold leading-none">
                    {selectedCandidates.length} Candidates Selected
                  </p>
                  <p className="text-[10px] font-medium opacity-80 uppercase tracking-wider">
                    Ready for AI screening
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:bg-white/10"
                  onClick={() => setSelectedCandidates([])}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-white text-primary hover:bg-white/90 px-8 font-bold"
                  onClick={() => setShowConfirmModal(true)}
                >
                  Run Screening Pipeline
                  <Zap className="ml-2 h-4 w-4 fill-primary" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              Analyze Intent
              <Badge
                variant="secondary"
                className="ml-2 text-[10px] uppercase font-bold tracking-widest px-2 py-0"
              >
                High Priority
              </Badge>
            </DialogTitle>
            <DialogDescription className="pt-2">
              You are about to evaluate{" "}
              <span className="font-bold text-foreground">
                {selectedCandidates.length} candidates
              </span>{" "}
              using Gemini 3.5 Flash.
              <br />
              <br />
              The system will analyze every resume point-by-point against your Job weights (Skills,
              Exp, Edu).
            </DialogDescription>
          </DialogHeader>
          <div className="bg-muted p-4 rounded-lg flex gap-4 items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border/50 shadow-sm">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Estimated completion: ~8s</p>
              <p className="text-xs text-muted-foreground italic leading-none mt-1">
                Powered by high-throughput inferencing.
              </p>
            </div>
          </div>
          <DialogFooter className="flex sm:justify-between py-2 items-center">
            <Button
              variant="ghost"
              onClick={() => setShowConfirmModal(false)}
              disabled={isProcessing}
            >
              Go back
            </Button>
            <Button
              className="px-8 shadow-lg shadow-primary/20"
              onClick={handleRunPipeline}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Start AI Pipeline"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
