"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/web/components/ui/tabs";
import { TrendingUp } from "lucide-react";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { ActivityTable } from "@/features/history/components/activity-table";
import { HistoryTable } from "@/features/history/components/history-table";

export const HistoryClient = () => {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader
        title="Screening history"
        subtitle="Review and export data from your past autonomous hiring cycles."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Total candidates processed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">1,482</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="size-3 text-emerald-600" /> 12% increase from previous month
            </p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Cumulative efficiency saved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">53.6 hours</div>
            <p className="text-xs text-muted-foreground mt-1">
              Review hours reclaimed for human talent
            </p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Average match precision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">84%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Consistency maintained across assessment batches
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Audit logs</h2>
            <p className="text-sm text-muted-foreground">
              Detailed history of campaigns and individual system actions.
            </p>
          </div>
          <TabsList>
            <TabsTrigger value="campaigns">Closed Campaigns</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="campaigns" className="mt-0 border-none p-0">
          <HistoryTable />
        </TabsContent>
        <TabsContent value="activity" className="mt-0 border-none p-0">
          <ActivityTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};
