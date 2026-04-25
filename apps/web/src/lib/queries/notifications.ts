import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { api } from "@/lib/api";

export const useNotifications = () => {
  const query = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const { data, error } = await api.notifications.get();
      if (error) throw error;
      return data;
    },
    refetchInterval: 30000, // Poll every 30 seconds
  });

  // Handle browser notifications when new ones arrive
  useEffect(() => {
    if (query.data && query.data.length > 0) {
      const latest = query.data[0];
      const lastShownId = localStorage.getItem("last_notification_id");

      if (latest && latest.id !== lastShownId && !latest.read) {
        if (Notification.permission === "granted") {
          new Notification(latest.title, {
            body: latest.message,
            icon: "/favicon.ico",
          });
          localStorage.setItem("last_notification_id", latest.id);
        }
      }
    }
  }, [query.data]);

  return query;
};

export const useMarkNotificationRead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await api.notifications({ id }).read.put();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};

export const useMarkAllNotificationsRead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const { data, error } = await api.notifications["read-all"].put();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};
