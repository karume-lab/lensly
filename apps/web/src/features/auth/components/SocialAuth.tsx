"use client";

import { SiGoogle } from "@icons-pack/react-simple-icons";
import { authClient } from "@repo/auth/client";
import { Button } from "@repo/ui/web/components/ui/button";
import { Separator } from "@repo/ui/web/components/ui/separator";
import { useState } from "react";
import { toast } from "sonner";

export const SocialAuth = () => {
  const [isPending, setIsPending] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsPending(true);
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });

    if (error) {
      toast.error(error.message || "Failed to sign in with Google");
      setIsPending(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-zinc-900 px-2 text-zinc-500 dark:text-zinc-400">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        type="button"
        className="w-full h-11 space-x-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 shadow-sm"
        onClick={handleGoogleSignIn}
        loading={isPending}
      >
        {!isPending && <SiGoogle className="size-4 text-[#4285F4]" />}
        <span className="font-medium text-zinc-700 dark:text-zinc-300">Sign in with Google</span>
      </Button>
    </div>
  );
};
