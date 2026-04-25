import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useDashboardMetrics = () => {
  return useQuery({
    queryKey: ["dashboard-metrics"],
    queryFn: async () => {
      const { data, error } = await api.dashboard.metrics.get();
      if (error) throw error;
      return data;
    },
  });
};

export const useDashboardActivity = () => {
  return useQuery({
    queryKey: ["dashboard-activity"],
    queryFn: async () => {
      const { data, error } = await api.dashboard.activity.get();
      if (error) throw error;
      return data;
    },
  });
};
