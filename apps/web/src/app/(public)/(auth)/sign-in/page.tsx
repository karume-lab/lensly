import { Suspense } from "react";
import { SignInForm } from "@/features/auth/components/SignInForm";

const SignInPage = () => {
  return (
    <Suspense>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <SignInForm />
      </div>
    </Suspense>
  );
};

export default SignInPage;
