"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { QUERY_KEYS } from "@repo/utils/query-keys";
import { useQuery } from "@tanstack/react-query";
import { BarChart3, Loader2, ShieldAlert, TrendingUp, UserCheck, Users } from "lucide-react";
import { api } from "@/lib/api";

export const AdminDashboardClient = () => {
  // Fetch combined stats from the new endpoint
  const { data: stats, isLoading } = useQuery({
    queryKey: QUERY_KEYS.admin.stats(),
    queryFn: async () => {
      const { data, error } = await api.admin.stats.get();
      if (error) throw error;
      return data;
    },
  });

  const totalUsers = stats?.users.total ?? 0;
  const bannedUsers = stats?.users.banned ?? 0;
  const activeUsers = totalUsers - bannedUsers;

  return (
    <div className="flex-1 space-y-6 p-4 pt-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Platform Overview</h2>
        <p className="text-muted-foreground">
          Real-time statistics and performance metrics for the Lensly application.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : totalUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Registered accounts across platform
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
            <UserCheck className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : activeUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Non-banned platform users</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Banned Accounts</CardTitle>
            <ShieldAlert className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : bannedUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Currently restricted access</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              User Growth
            </CardTitle>
            <CardDescription>Platform adoption metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 py-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">Total Registered</span>
                <span className="text-3xl font-bold">{isLoading ? "..." : totalUsers}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">Banned Users</span>
                <span className="text-3xl font-bold text-destructive">
                  {isLoading ? "..." : bannedUsers}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Platform Status
            </CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Active Ratio</span>
                <span className="text-2xl font-bold">
                  {isLoading
                    ? "..."
                    : `${Math.round((activeUsers / Math.max(totalUsers, 1)) * 100)}%`}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground italic text-xs">
                  Stats are refreshed automatically.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
