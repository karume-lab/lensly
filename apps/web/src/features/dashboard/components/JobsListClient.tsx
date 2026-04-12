"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { Input } from "@repo/ui/web/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/web/components/ui/table";
import { Briefcase, MoreHorizontal, Plus, Search, Users } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { useState } from "react";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { type DashboardJob, mockJobs } from "@/lib/mock-data";

export function JobsListClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = mockJobs.filter(
    (job: DashboardJob) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Screening":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Shortlisting":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Review Shortlist":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Draft":
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";
      default:
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <DashboardHeader
          title="Jobs and campaigns"
          subtitle="Manage your active recruitment pipelines and review screening results."
          className="mb-0 border-none space-y-0 pb-0"
        />
        <Button asChild>
          <Link href={"/dashboard/jobs/new"}>
            <Plus className="mr-2 size-4" />
            Create job
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">Active jobs</CardTitle>
            <Briefcase className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">12</div>
            <p className="text-xs text-muted-foreground mt-1">+2 from previous month</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Total applicants
            </CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">1,284</div>
            <p className="text-xs text-muted-foreground mt-1">18% increase this week</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Candidates screened
            </CardTitle>
            <div className="size-2 bg-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">942</div>
            <p className="text-xs text-muted-foreground mt-1">73.4% screening rate</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Average match precision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">82%</div>
            <p className="text-xs text-muted-foreground mt-1">Consistency above benchmark</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardHeader className="pb-3 border-b border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="text-base font-semibold">Recent campaigns</CardTitle>
            <CardDescription>Review and manage your latest job postings.</CardDescription>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Job title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applicants</TableHead>
                <TableHead>Match score</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <TableRow key={job.id} className="group">
                    <TableCell className="font-medium">
                      <div className="flex flex-col">
                        <span className="text-sm">{job.title}</span>
                        <span className="text-xs text-muted-foreground font-normal">
                          {job.department} • {job.seniority}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="font-semibold">{job.applicantCount}</span>
                        <span className="text-muted-foreground">
                          ({job.screenedCount} screened)
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${job.avgScore}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium">{job.avgScore}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" variant="ghost" asChild>
                          <Link href={`/dashboard/jobs/${job.id}/ingestion` as Route}>Ingest</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/dashboard/jobs/${job.id}/shortlist` as Route}>Results</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-32 text-center text-muted-foreground">
                    No matching jobs found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
