"use client";

import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import { Briefcase, Plus, Users } from "lucide-react";
import Link from "next/link";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { JobsTable } from "@/features/dashboard/components/jobs-table";

export function JobsListClient() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader
        title="Jobs and campaigns"
        subtitle="Manage your active recruitment pipelines and review screening results."
      >
        <Button asChild>
          <Link href={"/dashboard/jobs/new"}>
            <Plus className="mr-2 size-4" />
            Create job
          </Link>
        </Button>
      </DashboardHeader>

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

      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">Active campaigns</h2>
          <p className="text-sm text-muted-foreground">
            Manage your recruitment pipelines and review screening results.
          </p>
        </div>
        <JobsTable />
      </div>
    </div>
  );
}
