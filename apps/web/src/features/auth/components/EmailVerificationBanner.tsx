"use client";

import { authClient } from "@repo/auth/client";
import { Alert, AlertDescription, AlertTitle } from "@repo/ui/web/components/ui/alert";
import { Button } from "@repo/ui/web/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";

export const EmailVerificationBanner = () => {
  const { data: session } = authClient.useSession();

  const resendMutation = useMutation({
    mutationFn: async () => {
      if (!session?.user?.email) throw new Error("User email not found");
      const { error } = await authClient.sendVerificationEmail({
        email: session.user.email,
        callbackURL: "/verify-email",
      });
      if (error) throw new Error(error.message || "Failed to send verification email");
    },
    onSuccess: () => {
      toast.success("Verification email sent! Please check your inbox.");
    },
    onError: (error: Error) => {
      toast.error(error.message || "An unexpected error occurred");
    },
  });

  if (!session?.user || session.user.emailVerified) {
    return null;
  }

  return (
    <Alert className="mb-6 border-primary/20 bg-primary/10 text-primary">
      <Mail className="h-4 w-4 text-primary" />
      <AlertTitle className="font-semibold text-primary">Verify your email</AlertTitle>
      <AlertDescription className="mt-2 flex flex-col justify-between gap-4 text-primary/90 sm:flex-row sm:items-center">
        <span className="text-sm leading-relaxed">
          Your email address{" "}
          <strong className="font-semibold text-primary">{session.user.email}</strong> is not
          verified. Please check your inbox for the verification link.
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => resendMutation.mutate()}
          disabled={resendMutation.isPending}
          className="h-9 shrink-0 border-primary/30 bg-background text-primary shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {resendMutation.isPending ? (
            <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
          ) : (
            <Mail className="mr-2 h-3.5 w-3.5" />
          )}
          Resend Link
        </Button>
      </AlertDescription>
    </Alert>
  );
};
