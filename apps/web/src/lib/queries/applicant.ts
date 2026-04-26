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

export const useShortlist = (jobId: string) => {
  return useQuery({
    queryKey: ["shortlist", jobId],
    queryFn: async () => {
      const { data, error } = await api.applicants.job({ jobId }).shortlist.get();
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
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["applicants"] });
      if (data?.result?.jobId) {
        queryClient.invalidateQueries({ queryKey: ["shortlist", data.result.jobId] });
        queryClient.invalidateQueries({ queryKey: ["job", data.result.jobId] });
      }
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["job-stats"] });
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
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["job", variables.jobId] });
      queryClient.invalidateQueries({ queryKey: ["job-stats"] });
    },
  });
};
export const useUploadApplicantMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ jobId, file }: { jobId: string; file: File }) => {
      const { data, error } = await api.applicants.upload.post({
        jobId,
        file,
      });
      if (error) throw error;
      return { data, fileName: file.name, jobId };
    },
    onSuccess: ({ jobId }) => {
      queryClient.invalidateQueries({ queryKey: ["applicants", jobId] });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["job", jobId] });
      queryClient.invalidateQueries({ queryKey: ["job-stats"] });
    },
  });
};

export const useUpdateApplicantStatusMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ status }: { status: string }) => {
      const { data, error } = await api.applicants({ id }).status.patch({ status });
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["applicants", data.jobId] });
      queryClient.invalidateQueries({ queryKey: ["shortlist", data.jobId] });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["job", data.jobId] });
      queryClient.invalidateQueries({ queryKey: ["job-stats"] });
    },
  });
};
