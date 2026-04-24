import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useApplicants = (jobId: string) => {
  return useQuery({
    queryKey: ["applicants", jobId],
    queryFn: async () => {
      const { data, error } = await api.applicants.job({ jobId }).get();
      if (error) throw error;
      return data;
    },
  });
};

export const useScreeningMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await api.applicants({ id }).screen.post();
      if (error) throw error;
      return data;
    },
    onSuccess: (_, _id) => {
      queryClient.invalidateQueries({ queryKey: ["applicants"] });
    },
  });
};

export const useUploadMetadataMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: Parameters<(typeof api.applicants)["upload-metadata"]["post"]>[0]) => {
      const { data, error } = await api.applicants["upload-metadata"].post(body);
      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["applicants", variables.jobId] });
    },
  });
};
