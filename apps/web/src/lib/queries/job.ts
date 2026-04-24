import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useJob = (id: string) => {
  return useQuery({
    queryKey: ["job", id],
    queryFn: async () => {
      const { data, error } = await api.jobs({ id }).get();
      if (error) throw error;
      return data;
    },
  });
};

export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data, error } = await api.jobs.get();
      if (error) throw error;
      return data;
    },
  });
};

export const useJobStats = () => {
  return useQuery({
    queryKey: ["job-stats"],
    queryFn: async () => {
      const { data, error } = await api.jobs.stats.get();
      if (error) throw error;
      return data;
    },
  });
};
