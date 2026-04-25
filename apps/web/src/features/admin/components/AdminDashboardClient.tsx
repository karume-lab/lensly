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
import {
  BarChart3,
  Briefcase,
  Loader2,
  ShieldAlert,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { api } from "@/lib/api";

export const AdminDashboardClient = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: QUERY_KEYS.admin.stats(),
    queryFn: async () => {
      const { data, error } = await api.admin.stats.get();
      if (error) throw error;
      return data;
    },
  });

  const { data: usersResponse } = useQuery({
    queryKey: QUERY_KEYS.admin.users.all(),
    queryFn: async () => {
      const { data, error } = await api.admin.users.get({ query: { limit: 100 } });
      if (error) throw error;
      return data;
    },
  });

  const chartData = useMemo(() => {
    if (!usersResponse?.data) return [];

    // Group users by month
    const groups: Record<string, number> = {};
    for (const user of usersResponse.data) {
      const date = new Date(user.createdAt);
      const month = date.toLocaleString("default", { month: "short" });
      groups[month] = (groups[month] || 0) + 1;
    }

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months
      .filter((m) => groups[m] !== undefined)
      .map((month) => ({
        name: month,
        total: groups[month],
      }));
  }, [usersResponse]);

  const totalUsers = stats?.users.total ?? 0;
  const bannedUsers = stats?.users.banned ?? 0;
  const activeUsers = stats?.users.active ?? 0;

  const totalJobs = stats?.jobs.total ?? 0;
  const openJobs = stats?.jobs.open ?? 0;

  const totalApplicants = stats?.applicants.total ?? 0;
  const screenedApplicants = stats?.applicants.screened ?? 0;

  return (
    <div className="flex-1 space-y-6 p-4 pt-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Platform Overview</h2>
        <p className="text-muted-foreground">
          Real-time statistics and performance metrics for the Lensly application.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : totalUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Registered accounts</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : openJobs}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Currently open positions</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
            <UserCheck className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : totalApplicants}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Across all job postings</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Banned Users</CardTitle>
            <ShieldAlert className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : bannedUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Restricted access</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Platform Metrics
            </CardTitle>
            <CardDescription>Detailed breakdown of system adoption</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="h-50 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e2e2" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      fontSize={12}
                      tick={{ fill: "#888888" }}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Bar dataKey="total" radius={[4, 4, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${entry.name}`}
                          fill={index % 2 === 0 ? "#3b82f6" : "#60a5fa"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">User Status</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold">{activeUsers}</span>
                    <span className="text-sm text-emerald-500 font-medium">
                      {Math.round((activeUsers / Math.max(totalUsers, 1)) * 100)}% Active
                    </span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500"
                      style={{
                        width: `${(activeUsers / Math.max(totalUsers, 1)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Screening Rate</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold">{screenedApplicants}</span>
                    <span className="text-sm text-blue-500 font-medium">
                      {Math.round((screenedApplicants / Math.max(totalApplicants, 1)) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{
                        width: `${(screenedApplicants / Math.max(totalApplicants, 1)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Quick Stats
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg border p-3 bg-card">
                    <p className="text-xs text-muted-foreground">Total Jobs</p>
                    <p className="text-xl font-bold">{totalJobs}</p>
                  </div>
                  <div className="rounded-lg border p-3 bg-card">
                    <p className="text-xs text-muted-foreground">Closed Jobs</p>
                    <p className="text-xl font-bold">{stats?.jobs.closed ?? 0}</p>
                  </div>
                  <div className="rounded-lg border p-3 bg-card">
                    <p className="text-xs text-muted-foreground">Avg. Apps/Job</p>
                    <p className="text-xl font-bold">
                      {totalJobs > 0 ? (totalApplicants / totalJobs).toFixed(1) : 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest platform-wide events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="animate-spin h-8 w-8 text-muted-foreground" />
                </div>
              ) : (
                stats?.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-4 items-start">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium leading-none">
                        <span className="text-primary font-semibold">{activity.user}</span>{" "}
                        {activity.action.toLowerCase().replace("_", " ")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.entityType} • {new Date(activity.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))
              )}

              {!isLoading && stats?.recentActivity.length === 0 && (
                <p className="text-center text-sm text-muted-foreground py-8">
                  No recent activities recorded.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
