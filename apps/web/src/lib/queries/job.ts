import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

export const useHistoryStats = () => {
  return useQuery({
    queryKey: ["history-stats"],
    queryFn: async () => {
      const { data, error } = await api.jobs.history.stats.get();
      if (error) throw error;
      return data;
    },
  });
};

export const useHistory = () => {
  return useQuery({
    queryKey: ["history"],
    queryFn: async () => {
      const { data, error } = await api.jobs.history.get();
      if (error) throw error;
      return data;
    },
  });
};

export const useCreateJobMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: Parameters<typeof api.jobs.post>[0]) => {
      const { data, error } = await api.jobs.post(body);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["job-stats"] });
      queryClient.invalidateQueries({ queryKey: ["history"] });
      queryClient.invalidateQueries({ queryKey: ["history-stats"] });
    },
  });
};

export const useUpdateJobMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: Parameters<ReturnType<typeof api.jobs>["patch"]>[0]) => {
      const { data, error } = await api.jobs({ id }).patch(body);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["job", id] });
      queryClient.invalidateQueries({ queryKey: ["job-stats"] });
      queryClient.invalidateQueries({ queryKey: ["history"] });
      queryClient.invalidateQueries({ queryKey: ["history-stats"] });
    },
  });
};

export const useDeleteJobMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await api.jobs({ id }).delete();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["job-stats"] });
      queryClient.invalidateQueries({ queryKey: ["history"] });
      queryClient.invalidateQueries({ queryKey: ["history-stats"] });
    },
  });
};
