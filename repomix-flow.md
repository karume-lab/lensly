This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: apps/web/src/app/**/*, apps/web/src/features/**/*, apps/web/src/lib/queries/**/*, packages/api/src/routers/**/*, packages/db/src/schema/**/*, packages/validators/src/**/*, packages/auth/src/**/*, docker-compose.yml
- Files matching these patterns are excluded: apps/mobile/**/*, packages/ui/**/*, packages/assets/**/*, tmp/**/*, **/*.png, **/*.svg, **/*.ico, repomix*.md
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
apps/
  web/
    src/
      app/
        (protected)/
          admin/
            users/
              [id]/
                page.tsx
              create/
                page.tsx
              page.tsx
            layout.tsx
            page.tsx
          dashboard/
            history/
              page.tsx
            jobs/
              [jobId]/
                applicants/
                  ingestion/
                    page.tsx
                  page.tsx
                candidates/
                  [candidateId]/
                    page.tsx
                edit/
                  page.tsx
                shortlist/
                  page.tsx
                page.tsx
              new/
                page.tsx
              page.tsx
            profile/
              page.tsx
            settings/
              page.tsx
            layout.tsx
            page.tsx
          onboarding/
            page.tsx
        (public)/
          (auth)/
            sign-in/
              page.tsx
            sign-up/
              page.tsx
          (www)/
            page.tsx
          docs/
            api/
              reference/
                route.ts
        api/
          [[...slug]]/
            route.ts
          auth/
            [...all]/
              route.ts
          openapi.json/
            [[...slug]]/
              route.ts
        layout.tsx
        not-found.tsx
        opengraph-image.tsx
        robots.ts
        sitemap.ts
        twitter-image.tsx
      features/
        admin/
          components/
            AdminDashboardClient.tsx
            AdminUserCreateClient.tsx
            AdminUserEditClient.tsx
            AdminUsersClient.tsx
            AppSidebar.tsx
        auth/
          components/
            AccountProfileClient.tsx
            EmailVerificationBanner.tsx
            SignInForm.tsx
            SignOutButton.tsx
            SignUpForm.tsx
            SocialAuth.tsx
        candidates/
          index.ts
        dashboard/
          components/
            jobs-table/
              columns.tsx
              index.tsx
            AIShortlist.tsx
            CandidateDeepDive.tsx
            CommandCenter.tsx
            DashboardHeader.tsx
            DashboardSidebar.tsx
            IngestionHub.tsx
            JobIngestionClient.tsx
            JobOverviewClient.tsx
            JobsListClient.tsx
            NewJobForm.tsx
          index.ts
        history/
          components/
            history-table/
              columns.tsx
              index.tsx
            HistoryClient.tsx
          index.ts
        ingestion/
          index.ts
        jobs/
          index.ts
        onboarding/
          components/
            OnboardingClient.tsx
          index.ts
        profile/
          index.ts
        scoring/
          index.ts
        screening/
          index.ts
        settings/
          components/
            SettingsClient.tsx
          index.ts
        shortlist/
          index.ts
        www/
          components/
            NavigationPill.tsx
            TestimonialsCarousel.tsx
      lib/
        queries/
          admin.ts
          applicant.ts
          job.ts
          profile.ts
packages/
  api/
    src/
      routers/
        activity.ts
        admin.ts
        applicant.ts
        dashboard.ts
        index.ts
        job.ts
        profile.ts
        types.ts
  auth/
    src/
      client.ts
      index.ts
  db/
    src/
      schema/
        activity.ts
        applicant.ts
        auth.ts
        index.ts
        job.ts
        profile.ts
        screening-result.ts
  validators/
    src/
      applicant.ts
      auth.ts
      index.ts
      job.ts
      profile.ts
      settings.ts
docker-compose.yml
```

# Files

## File: apps/web/src/app/(protected)/admin/users/[id]/page.tsx
```typescript
import { AdminUserEditClient } from "@/features/admin/components/AdminUserEditClient";

const AdminUserEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <AdminUserEditClient userId={id} />;
};

export default AdminUserEditPage;
```

## File: apps/web/src/app/(protected)/admin/users/create/page.tsx
```typescript
import { AdminUserCreateClient } from "@/features/admin/components/AdminUserCreateClient";

const AdminUserCreatePage = () => {
  return <AdminUserCreateClient />;
};

export default AdminUserCreatePage;
```

## File: apps/web/src/app/(protected)/admin/users/page.tsx
```typescript
import { Suspense } from "react";
import { AdminUsersClient } from "@/features/admin/components/AdminUsersClient";

const AdminUsersPage = () => {
  return (
    <Suspense>
      <AdminUsersClient />
    </Suspense>
  );
};

export default AdminUsersPage;
```

## File: apps/web/src/app/(protected)/admin/page.tsx
```typescript
import { AdminDashboardClient } from "@/features/admin/components/AdminDashboardClient";

const AdminDashboardPage = () => {
  return <AdminDashboardClient />;
};

export default AdminDashboardPage;
```

## File: apps/web/src/app/(protected)/dashboard/jobs/[jobId]/applicants/ingestion/page.tsx
```typescript
import { JobIngestionClient } from "@/features/dashboard/components/JobIngestionClient";

export default async function JobIngestionPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  return <JobIngestionClient jobId={jobId} />;
}
```

## File: apps/web/src/app/(protected)/dashboard/jobs/[jobId]/candidates/[candidateId]/page.tsx
```typescript
import { CandidateDeepDive } from "@/features/dashboard";

const CandidateDetailPage = async ({
  params,
}: {
  params: Promise<{ jobId: string; candidateId: string }>;
}) => {
  const { jobId, candidateId } = await params;
  return <CandidateDeepDive jobId={jobId} candidateId={candidateId} />;
};

export default CandidateDetailPage;
```

## File: apps/web/src/app/(protected)/dashboard/jobs/[jobId]/edit/page.tsx
```typescript
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { NewJobForm } from "@/features/dashboard/components/NewJobForm";
import { api } from "@/lib/api";

export default async function EditJobPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const h = await headers();

  const { data: job, error } = await api.jobs({ id: jobId }).get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  if (error || !job) {
    notFound();
  }

  return <NewJobForm initialData={job} />;
}
```

## File: apps/web/src/app/(protected)/dashboard/jobs/new/page.tsx
```typescript
import { NewJobForm } from "@/features/dashboard";

const NewJobPage = () => {
  return <NewJobForm />;
};

export default NewJobPage;
```

## File: apps/web/src/app/(protected)/dashboard/settings/page.tsx
```typescript
import type { Metadata } from "next";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import SettingsClient from "@/features/settings/components/SettingsClient";

export const metadata: Metadata = {
  title: "Settings | Lensly AI",
  description: "Configure your hiring preferences and AI agent behavior.",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <DashboardHeader
        title="Command & Control"
        subtitle="Manage your hiring identity, AI intelligence models, and notification triggers."
      />
      <div className="mt-4">
        <SettingsClient />
      </div>
    </div>
  );
}
```

## File: apps/web/src/app/(protected)/onboarding/page.tsx
```typescript
import { headers } from "next/headers";
import { OnboardingClient } from "@/features/onboarding/components/OnboardingClient";
import { api } from "@/lib/api";

export default async function OnboardingPage() {
  const h = await headers();

  const { data: profile, error } = await api.profile.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  if (error || !profile) {
    // This should ideally not happen as the backend returns defaults
    throw new Error("Failed to load profile context");
  }

  return <OnboardingClient initialData={profile} />;
}
```

## File: apps/web/src/app/(public)/docs/api/reference/route.ts
```typescript
import { ApiReference } from "@scalar/nextjs-api-reference";

const config = {
  url: "/api/openapi.json/json",
};

export const GET = ApiReference(config);
```

## File: apps/web/src/app/api/[[...slug]]/route.ts
```typescript
import { app } from "@repo/api";

export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const DELETE = app.handle;
export const PATCH = app.handle;
```

## File: apps/web/src/app/api/auth/[...all]/route.ts
```typescript
import { auth } from "@repo/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth.handler);
```

## File: apps/web/src/app/api/openapi.json/[[...slug]]/route.ts
```typescript
import { app } from "@repo/api";

export const GET = async (request: Request) => {
  return app.handle(request);
};
```

## File: apps/web/src/app/not-found.tsx
```typescript
import { NotFoundClient } from "@/components/shared/NotFoundClient";

const NotFound = () => {
  return <NotFoundClient />;
};

export default NotFound;
```

## File: apps/web/src/app/opengraph-image.tsx
```typescript
import { generateOGImage } from "@/lib/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const openGraphImage = async () => {
  return generateOGImage(size);
};

export default openGraphImage;
```

## File: apps/web/src/app/robots.ts
```typescript
import type { MetadataRoute } from "next";

const generateRobots = (): MetadataRoute.Robots => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
};

export default generateRobots;
```

## File: apps/web/src/app/sitemap.ts
```typescript
import type { MetadataRoute } from "next";

const generateSiteMap = (): MetadataRoute.Sitemap => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sign-in`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sign-up`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
};

export default generateSiteMap;
```

## File: apps/web/src/app/twitter-image.tsx
```typescript
import { generateOGImage } from "@/lib/og";

export const size = {
  width: 1200,
  height: 675,
};

export const contentType = "image/png";

const twitterImage = async () => {
  return generateOGImage(size);
};

export default twitterImage;
```

## File: apps/web/src/features/admin/components/AdminUserCreateClient.tsx
```typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/web/components/ui/form";
import { Input } from "@repo/ui/web/components/ui/input";
import { PasswordInput } from "@repo/ui/web/components/ui/password-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/web/components/ui/select";
import { type CreateUserValues, createUserSchema } from "@repo/validators";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useCreateUser } from "@/lib/hooks/use-admin-users";

export const AdminUserCreateClient = () => {
  const router = useRouter();

  const form = useForm<CreateUserValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "user",
    },
  });

  const createUserMutation = useCreateUser();

  const { isDirty } = form.formState;

  const onSubmit = (values: CreateUserValues) => {
    createUserMutation.mutate(values);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-4">
        <Link href="/admin/users">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Provision New System Entity
          </h2>
          <p className="text-sm text-zinc-500">Add an interactive user account</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Secure Password</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="Minimum 6 Characters" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4 border-t dark:border-zinc-800">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Security Role Assignment</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger id="role" className="w-full">
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="user">Standard End-User</SelectItem>
                            <SelectItem value="admin">System Administrator</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => router.push("/admin/users")}>
                  Cancel
                </Button>
                <Button type="submit" disabled={!isDirty} loading={createUserMutation.isPending}>
                  Finalize Provisioning
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
```

## File: apps/web/src/features/admin/components/AdminUserEditClient.tsx
```typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/web/components/ui/form";
import { Input } from "@repo/ui/web/components/ui/input";
import { Label } from "@repo/ui/web/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/web/components/ui/select";
import { type UpdateUserValues, updateUserSchema } from "@repo/validators";
import dayjs from "dayjs";
import { ArrowLeft, Loader2, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAdminUser, useUpdateUserRole } from "@/lib/hooks/use-admin-users";

export const AdminUserEditClient = ({ userId }: { userId: string }) => {
  const router = useRouter();

  const { data: user, isLoading } = useAdminUser(userId);

  const form = useForm<UpdateUserValues>({
    resolver: zodResolver(updateUserSchema),
    values: {
      role: (user?.role as "admin" | "user") || "user",
    },
  });

  const updateRoleMutation = useUpdateUserRole();

  const { isDirty } = form.formState;

  const onSubmit = (values: UpdateUserValues) => {
    updateRoleMutation.mutate({ id: userId, role: values.role });
  };

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
        <ShieldAlert className="h-12 w-12 text-red-500" />
        <h2 className="text-xl font-bold">User Not Found</h2>
        <Button onClick={() => router.push("/admin/users")}>Return to Database</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-4">
        <Link href="/admin/users">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Edit System User
          </h2>
          <p className="text-sm text-zinc-500">ID: {user.id}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input value={user.name} disabled className="bg-zinc-50 dark:bg-zinc-900/50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input value={user.email} disabled className="bg-zinc-50 dark:bg-zinc-900/50" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 flex flex-col justify-center">
                    <Label>Verification Status</Label>
                    <span className="text-sm font-medium mt-1">
                      {user.emailVerified ? "✅ Verified" : "⏳ Pending"}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Label>Joined Platform</Label>
                    <Input
                      value={dayjs(user.createdAt).format("MM/DD/YYYY")}
                      disabled
                      className="bg-zinc-50 dark:bg-zinc-900/50"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t dark:border-zinc-800">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Security Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger id="role" className="w-full bg-background">
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="user">Standard User</SelectItem>
                            <SelectItem value="admin">System Administrator</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => router.push("/admin/users")}>
                  Cancel
                </Button>
                <Button type="submit" disabled={!isDirty} loading={updateRoleMutation.isPending}>
                  Save Permissions
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
```

## File: apps/web/src/features/auth/components/EmailVerificationBanner.tsx
```typescript
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
```

## File: apps/web/src/features/auth/components/SignOutButton.tsx
```typescript
"use client";

import { authClient } from "@repo/auth/client";
import { Button } from "@repo/ui/web/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SignOutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showIcon?: boolean;
  label?: string;
}

export const SignOutButton = ({
  variant = "secondary",
  size = "default",
  className = "",
  showIcon = false,
  label = "Sign out",
}: SignOutButtonProps) => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleSignOut = async () => {
    setIsPending(true);
    try {
      await authClient.signOut();
      router.push("/sign-in");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleSignOut}
      loading={isPending}
      className={className}
    >
      {showIcon && <LogOut className="mr-2" />}
      {label}
    </Button>
  );
};
```

## File: apps/web/src/features/auth/components/SocialAuth.tsx
```typescript
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
```

## File: apps/web/src/features/candidates/index.ts
```typescript

```

## File: apps/web/src/features/dashboard/index.ts
```typescript
export { AIShortlist } from "@/features/dashboard/components/AIShortlist";
export { CandidateDeepDive } from "@/features/dashboard/components/CandidateDeepDive";
export { CommandCenter } from "@/features/dashboard/components/CommandCenter";
export { IngestionHub } from "@/features/dashboard/components/IngestionHub";
export { NewJobForm } from "@/features/dashboard/components/NewJobForm";
```

## File: apps/web/src/features/history/index.ts
```typescript
export * from "@/features/history/components/HistoryClient";
```

## File: apps/web/src/features/ingestion/index.ts
```typescript

```

## File: apps/web/src/features/jobs/index.ts
```typescript

```

## File: apps/web/src/features/onboarding/components/OnboardingClient.tsx
```typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/web/components/ui/form";
import { Input } from "@repo/ui/web/components/ui/input";
import { Slider } from "@repo/ui/web/components/ui/slider";
import { type OnboardingInput, OnboardingSchema } from "@repo/validators/profile";
import { Brain, Building2, Loader2, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { api, ExtractData } from "@/lib/api";
import { useUpdateProfileMutation } from "@/lib/queries/profile";

type ProfileData = ExtractData<typeof api.profile.get>;

interface OnboardingClientProps {
  initialData: ProfileData;
}

export function OnboardingClient({ initialData }: OnboardingClientProps) {
  const router = useRouter();
  const updateMutation = useUpdateProfileMutation();

  const form = useForm<OnboardingInput>({
    resolver: zodResolver(OnboardingSchema),
    defaultValues: {
      companyName: initialData.companyName ?? "",
      role: initialData.role ?? "",
      defaultWeightSkills: initialData.defaultWeightSkills ?? 50,
      defaultWeightExperience: initialData.defaultWeightExperience ?? 30,
      defaultWeightEducation: initialData.defaultWeightEducation ?? 20,
    },
  });

  const weightSkills = form.watch("defaultWeightSkills");
  const weightExperience = form.watch("defaultWeightExperience");
  const weightEducation = form.watch("defaultWeightEducation");

  const handleWeightChange = (
    key: "defaultWeightSkills" | "defaultWeightExperience" | "defaultWeightEducation",
    value: number,
  ) => {
    const newValue = value;
    const weights = {
      defaultWeightSkills: weightSkills,
      defaultWeightExperience: weightExperience,
      defaultWeightEducation: weightEducation,
    };

    const otherKeys = (Object.keys(weights) as Array<keyof typeof weights>).filter(
      (k) => k !== key,
    );

    const remaining = 100 - newValue;
    const currentSumOther = otherKeys.reduce((acc, k) => acc + weights[k], 0);

    const newWeights = { ...weights };
    newWeights[key] = newValue;

    if (currentSumOther === 0) {
      const share = remaining / otherKeys.length;
      for (const k of otherKeys) newWeights[k] = share;
    } else {
      for (const k of otherKeys) {
        newWeights[k] = Math.round((weights[k] / currentSumOther) * remaining);
      }
    }

    const finalSum = Object.values(newWeights).reduce((a, b) => a + b, 0);
    if (finalSum !== 100 && otherKeys[0]) {
      newWeights[otherKeys[0]] += 100 - finalSum;
    }

    form.setValue("defaultWeightSkills", newWeights.defaultWeightSkills, { shouldValidate: true });
    form.setValue("defaultWeightExperience", newWeights.defaultWeightExperience, {
      shouldValidate: true,
    });
    form.setValue("defaultWeightEducation", newWeights.defaultWeightEducation, {
      shouldValidate: true,
    });
  };

  const onSubmit = (data: OnboardingInput) => {
    updateMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Profile updated successfully");
        router.push("/dashboard");
      },
      onError: () => {
        toast.error("Failed to update profile. Please try again.");
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome to Lensly</h1>
        <p className="text-muted-foreground">
          Let's set up your recruitment preferences to get started.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Building2 className="size-4" /> Professional context
              </CardTitle>
              <CardDescription>Tell us about your organization and role.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Acme Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your role</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Talent Acquisition Manager" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Brain className="size-4" /> Default assessment weights
              </CardTitle>
              <CardDescription>
                Define how you typically prioritize candidate traits. These can be adjusted per job.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-4">
              <div className="space-y-8">
                <FormField
                  control={form.control}
                  name="defaultWeightSkills"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-medium">Technical skills</FormLabel>
                        <span className="text-sm font-semibold text-primary">{field.value}%</span>
                      </div>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          onValueChange={([v]) => handleWeightChange("defaultWeightSkills", v ?? 0)}
                          max={100}
                          step={1}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="defaultWeightExperience"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-medium">Work experience</FormLabel>
                        <span className="text-sm font-semibold text-primary">{field.value}%</span>
                      </div>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          onValueChange={([v]) =>
                            handleWeightChange("defaultWeightExperience", v ?? 0)
                          }
                          max={100}
                          step={1}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="defaultWeightEducation"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-medium">Education context</FormLabel>
                        <span className="text-sm font-semibold text-primary">{field.value}%</span>
                      </div>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          onValueChange={([v]) =>
                            handleWeightChange("defaultWeightEducation", v ?? 0)
                          }
                          max={100}
                          step={1}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full" disabled={updateMutation.isPending}>
            {updateMutation.isPending ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Saving profile...
              </>
            ) : (
              <>
                <Rocket className="mr-2 size-4" />
                Complete onboarding
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
```

## File: apps/web/src/features/onboarding/index.ts
```typescript

```

## File: apps/web/src/features/profile/index.ts
```typescript

```

## File: apps/web/src/features/scoring/index.ts
```typescript

```

## File: apps/web/src/features/screening/index.ts
```typescript

```

## File: apps/web/src/features/settings/components/SettingsClient.tsx
```typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/web/components/ui/form";
import { Input } from "@repo/ui/web/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/web/components/ui/select";
import { Separator } from "@repo/ui/web/components/ui/separator";
import { Switch } from "@repo/ui/web/components/ui/switch";
import { UserSettingsSchema, type UserSettingsValues } from "@repo/validators";
import { Bell, Cpu, Loader2, Save, ShieldCheck, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SettingsClient() {
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<UserSettingsValues>({
    resolver: zodResolver(UserSettingsSchema),
    defaultValues: {
      name: "Alex Johnson",
      email: "alex@lensly.ai",
      role: "Head of Talent Acquisition",
      companyName: "Lensly AI",
      notifications: {
        emailAlerts: true,
        browserAlerts: true,
        aiInsights: true,
      },
      preferences: {
        theme: "system",
        defaultAiModel: "claude-3-5-sonnet",
        autoShortlist: false,
      },
    },
  });

  const onSubmit = async (values: UserSettingsValues) => {
    setIsSaving(true);
    try {
      console.log("Saving settings:", values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Settings saved", {
        description: "Your profile and preferences have been updated.",
      });
    } catch {
      toast.error("Failed to save", {
        description: "An error occurred while updating your settings.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-10">
            <Card className="border-border">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <User className="size-4 text-muted-foreground" /> Account profile
                </CardTitle>
                <CardDescription>Update your contact information and role details.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Email address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Job title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Senior Recruiter" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Cpu className="size-4 text-muted-foreground" /> Platform configuration
                </CardTitle>
                <CardDescription>Manage automation settings and model preferences.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <FormField
                  control={form.control}
                  name="preferences.defaultAiModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Default screening model</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a model" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="claude-3-5-sonnet">Claude 3.5 Sonnet</SelectItem>
                          <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                          <SelectItem value="gemini-1.5-pro">Gemini 1.5 Pro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        The primary model used for initial candidate assessment.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferences.autoShortlist"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between border p-6">
                      <div className="space-y-1">
                        <FormLabel className="text-base font-semibold">
                          Automated shortlisting
                        </FormLabel>
                        <FormDescription>
                          Automatically move candidates with high matching scores to the review
                          stage.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Bell className="size-4 text-muted-foreground" /> Notifications
                </CardTitle>
                <CardDescription>
                  Choose how you want to be notified about screening progress.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <FormField
                  control={form.control}
                  name="notifications.aiInsights"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm font-medium">Analysis updates</FormLabel>
                        <FormDescription className="text-xs">
                          Receive notifications when candidate analysis is complete.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="notifications.emailAlerts"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm font-medium">Email summaries</FormLabel>
                        <FormDescription className="text-xs">
                          Receive daily email reports of top-performing candidates.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" disabled={isSaving} className="min-w-[160px]">
                {isSaving ? (
                  <>
                    <Loader2 className="size-4 animate-spin mr-2" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="size-4 mr-2" /> Save settings
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <Card className="border-border">
          <CardHeader className="border-b border-border">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Usage limits
            </h4>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="size-5 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Professional plan</div>
                <div className="text-[10px] text-muted-foreground uppercase">
                  Active subscription
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your account currently includes unlimited automated scanning.
            </p>
            <Separator />
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span>Monthly scan volume</span>
                <span>Unlimited</span>
              </div>
              <div className="h-1.5 w-full bg-muted">
                <div className="h-full w-[15%] bg-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 space-y-4 border border-dashed">
          <h4 className="font-semibold text-base">Support</h4>
          <p className="text-sm text-muted-foreground">
            For assistance with enterprise integration or high-volume hiring, please contact our
            support team.
          </p>
          <a href="mailto:support@lensly.ai" className="inline-block">
            <Button variant="link" className="p-0 h-auto text-sm font-semibold">
              Contact support
            </Button>
          </a>
        </Card>
      </div>
    </div>
  );
}
```

## File: apps/web/src/features/settings/index.ts
```typescript

```

## File: apps/web/src/features/shortlist/index.ts
```typescript

```

## File: apps/web/src/features/www/components/TestimonialsCarousel.tsx
```typescript
"use client";

import { Avatar, AvatarFallback } from "@repo/ui/web/components/ui/avatar";
import { Card, CardContent } from "@repo/ui/web/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/web/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote:
      "A solid fullstack template with a great Next.js and Turborepo foundation. Honestly, a really impressive setup.",
    author: "Bob",
    role: "Lead Engineer at Google",
    initial: "B",
  },
  {
    quote:
      "The sheer velocity this template gives us is incredible. We went from idea to production in under a week.",
    author: "Sarah Jenkins",
    role: "Lead Engineer at Meta",
    initial: "S",
  },
  {
    quote:
      "Finally, a stack that doesn't compromise on type safety or developer experience. Highly recommended!",
    author: "Michael Chen",
    role: "Fullstack Engineer",
    initial: "M",
  },
  {
    quote:
      "The Expo integration alongside web is seamless. Sharing components and logic has never been easier.",
    author: "Elena Rodriguez",
    role: "Lead Mobile Dev",
    initial: "E",
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className="max-w-4xl mx-auto relative px-12">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.author}
              className="basis-[90%] sm:basis-[80%] md:basis-[70%] lg:basis-[60%]"
            >
              <div className="p-2">
                <Card className="border-border/50 shadow-sm bg-card/40 backdrop-blur-md">
                  <CardContent className="flex flex-col items-center justify-center p-8 sm:p-12 text-center min-h-[300px]">
                    <div className="text-6xl text-primary/20 leading-none font-serif mb-4">"</div>
                    <p className="text-xl sm:text-2xl font-medium leading-relaxed italic text-foreground mb-8 text-balance">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                          {testimonial.initial}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4 bg-background hover:bg-accent border-primary/20 hover:border-primary/50 text-foreground scale-125" />
        <CarouselNext className="hidden sm:flex -right-4 bg-background hover:bg-accent border-primary/20 hover:border-primary/50 text-foreground scale-125" />
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
```

## File: apps/web/src/lib/queries/profile.ts
```typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data, error } = await api.profile.get();
      if (error) throw error;
      return data;
    },
  });
};

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: Parameters<typeof api.profile.put>[0]) => {
      const { data, error } = await api.profile.put(body);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
```

## File: packages/api/src/routers/activity.ts
```typescript
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";
import { ActivitySchema } from "./types";

export const activityRouter = new Elysia({ prefix: "/activities" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get(
    "/",
    async ({ user }) => {
      const activities = await schema.Activity.find({ userId: user.id })
        .sort({ createdAt: -1 })
        .limit(10);
      return activities.map((a) => ({
        id: a._id.toString(),
        title: a.action,
        subtitle: `${a.entityType}: ${a.entityId}`,
        timestamp: (a.createdAt || new Date()).toLocaleString(),
        type: "user",
      }));
    },
    {
      response: t.Array(ActivitySchema),
    },
  )
  .post(
    "/",
    async ({ body, user }) => {
      const activity = new schema.Activity({ ...body, userId: user.id });
      await activity.save();
      return {
        id: activity._id.toString(),
        title: activity.action,
        subtitle: `${activity.entityType}: ${activity.entityId}`,
        timestamp: (activity.createdAt || new Date()).toLocaleString(),
        type: "user",
      };
    },
    {
      body: t.Object({
        action: t.String(),
        entityId: t.String(),
        entityType: t.String(),
        metadata: t.Optional(t.Any()),
      }),
      response: ActivitySchema,
    },
  );
```

## File: packages/api/src/routers/dashboard.ts
```typescript
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";
import { ActivitySchema } from "./types";

export const dashboardRouter = new Elysia({ prefix: "/dashboard" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get(
    "/metrics",
    async ({ user }) => {
      const activeJobs = await schema.Job.countDocuments({
        userId: user.id,
        status: { $ne: "Closed" },
      });
      const jobIds = await schema.Job.find({ userId: user.id }).distinct("_id");
      const applicants = await schema.Applicant.find({ jobId: { $in: jobIds } });
      const pendingReviews = applicants.filter((a) => a.status === "Applied").length;

      const results = await schema.ScreeningResult.find({ jobId: { $in: jobIds } });
      const avgScore =
        results.length > 0
          ? Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length)
          : 0;

      return {
        activeJobs: { value: activeJobs, trend: 0, label: "Active Jobs" },
        pendingReviews: { value: pendingReviews, trend: 0, label: "Pending Reviews" },
        avgMatchScore: { value: avgScore, trend: 0, label: "Avg Match Score" },
        timeSaved: {
          value: `${(activeJobs * 0.5).toFixed(1)}h`,
          trend: 0,
          label: "AI Time Saved Today",
        },
      };
    },
    {
      response: t.Object({
        activeJobs: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        pendingReviews: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        avgMatchScore: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        timeSaved: t.Object({ value: t.String(), trend: t.Number(), label: t.String() }),
      }),
    },
  )
  .get(
    "/activity",
    async ({ user }) => {
      const activities = await schema.Activity.find({ userId: user.id })
        .sort({ createdAt: -1 })
        .limit(10);
      return activities.map((a) => ({
        id: a._id.toString(),
        title: a.action,
        subtitle: `${a.entityType}: ${a.entityId}`,
        timestamp: (a.createdAt || new Date()).toLocaleString(),
        type: "user",
      }));
    },
    {
      response: t.Array(ActivitySchema),
    },
  );
```

## File: packages/api/src/routers/job.ts
```typescript
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";
import { JobSchema } from "./types";

export const jobRouter = new Elysia({ prefix: "/jobs" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get(
    "/",
    async ({ user }) => {
      const jobs = await schema.Job.find({ userId: user.id }).sort({ createdAt: -1 });
      const jobsWithCounts = await Promise.all(
        jobs.map(async (job) => {
          const applicantCount = await schema.Applicant.countDocuments({ jobId: job._id });
          const screenedCount = await schema.Applicant.countDocuments({
            jobId: job._id,
            status: { $ne: "Pending_Screening" },
          });
          const results = await schema.ScreeningResult.find({ jobId: job._id });
          const avgScore =
            results.length > 0
              ? Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length)
              : 0;

          return {
            id: job._id.toString(),
            userId: job.userId,
            title: job.title,
            department: job.department,
            seniority: job.seniority,
            description: job.description,
            requiredSkills: job.requiredSkills,
            weightSkills: job.weightSkills,
            weightExperience: job.weightExperience,
            weightEducation: job.weightEducation,
            status: job.status,
            createdAt: job.createdAt,
            updatedAt: job.updatedAt,
            applicantCount,
            screenedCount,
            avgScore,
          };
        }),
      );
      return jobsWithCounts;
    },
    {
      response: t.Array(JobSchema),
    },
  )
  .get(
    "/history",
    async ({ user }) => {
      const jobs = await schema.Job.find({ userId: user.id, status: "Closed" }).sort({
        updatedAt: -1,
      });
      const history = await Promise.all(
        jobs.map(async (job) => {
          const candidates = await schema.Applicant.countDocuments({ jobId: job._id });
          const shortlisted = await schema.ScreeningResult.countDocuments({
            jobId: job._id,
            aiRecommendation: "Strong Yes",
          });
          const results = await schema.ScreeningResult.find({ jobId: job._id });
          const avgScore =
            results.length > 0
              ? Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length)
              : 0;

          return {
            id: job._id.toString(),
            jobTitle: job.title,
            date: (job.updatedAt || new Date()).toISOString().split("T")[0] ?? "",
            candidates,
            shortlisted,
            avgScore,
            timeSaved: `${(candidates * 0.5).toFixed(1)}h`,
          };
        }),
      );
      return history;
    },
    {
      response: t.Array(
        t.Object({
          id: t.String(),
          jobTitle: t.String(),
          date: t.String(),
          candidates: t.Number(),
          shortlisted: t.Number(),
          avgScore: t.Number(),
          timeSaved: t.String(),
        }),
      ),
    },
  )
  .get(
    "/stats",
    async ({ user }) => {
      const activeJobs = await schema.Job.countDocuments({
        userId: user.id,
        status: { $ne: "Closed" },
      });
      const jobIds = await schema.Job.find({ userId: user.id }).distinct("_id");
      const applicants = await schema.Applicant.find({ jobId: { $in: jobIds } });
      const pendingReviews = applicants.filter((a) => a.status === "Pending_Screening").length;

      const results = await schema.ScreeningResult.find({ jobId: { $in: jobIds } });
      const avgScore =
        results.length > 0
          ? Math.round(results.reduce((acc, r) => acc + r.overallScore, 0) / results.length)
          : 0;

      return {
        activeJobs: { value: activeJobs, trend: 0, label: "Active Jobs" },
        pendingReviews: { value: pendingReviews, trend: 0, label: "Pending Reviews" },
        avgMatchScore: { value: avgScore, trend: 0, label: "Avg Match Score" },
        timeSaved: {
          value: `${(activeJobs * 0.5).toFixed(1)}h`,
          trend: 0,
          label: "AI Time Saved Today",
        },
      };
    },
    {
      response: t.Object({
        activeJobs: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        pendingReviews: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        avgMatchScore: t.Object({ value: t.Number(), trend: t.Number(), label: t.String() }),
        timeSaved: t.Object({ value: t.String(), trend: t.Number(), label: t.String() }),
      }),
    },
  )
  .get(
    "/:id",
    async ({ params: { id }, user }) => {
      const job = await schema.Job.findOne({ _id: id, userId: user.id });
      if (!job) throw new Response("Job not found", { status: 404 });

      const applicantCount = await schema.Applicant.countDocuments({ jobId: job._id });
      const screenedCount = await schema.Applicant.countDocuments({
        jobId: job._id,
        status: { $ne: "Pending_Screening" },
      });

      return {
        ...job.toObject(),
        id: job._id.toString(),
        applicantCount,
        screenedCount,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: JobSchema,
    },
  )
  .post(
    "/",
    async ({ body, user }) => {
      const job = new schema.Job({ ...body, userId: user.id });
      await job.save();
      return {
        id: job._id.toString(),
        userId: job.userId,
        title: job.title,
        department: job.department,
        seniority: job.seniority,
        description: job.description,
        requiredSkills: job.requiredSkills,
        weightSkills: job.weightSkills,
        weightExperience: job.weightExperience,
        weightEducation: job.weightEducation,
        status: job.status,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt,
      };
    },
    {
      body: t.Object({
        title: t.String(),
        department: t.String(),
        seniority: t.String(),
        description: t.String(),
        requiredSkills: t.Array(t.String()),
        weightSkills: t.Number(),
        weightExperience: t.Number(),
        weightEducation: t.Number(),
        status: t.Optional(t.String()),
      }),
      response: JobSchema,
    },
  )
  .patch(
    "/:id",
    async ({ params: { id }, body, user }) => {
      const job = await schema.Job.findOneAndUpdate(
        { _id: id, userId: user.id },
        { $set: body },
        { new: true },
      );
      if (!job) throw new Response("Job not found", { status: 404 });
      return {
        id: job._id.toString(),
        userId: job.userId,
        title: job.title,
        department: job.department,
        seniority: job.seniority,
        description: job.description,
        requiredSkills: job.requiredSkills,
        weightSkills: job.weightSkills,
        weightExperience: job.weightExperience,
        weightEducation: job.weightEducation,
        status: job.status,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Partial(
        t.Object({
          title: t.String(),
          department: t.String(),
          seniority: t.String(),
          description: t.String(),
          requiredSkills: t.Array(t.String()),
          weightSkills: t.Number(),
          weightExperience: t.Number(),
          weightEducation: t.Number(),
          status: t.String(),
        }),
      ),
      response: JobSchema,
    },
  )
  .delete(
    "/:id",
    async ({ params: { id }, user }) => {
      const result = await schema.Job.deleteOne({ _id: id, userId: user.id });
      if (result.deletedCount === 0) throw new Response("Job not found", { status: 404 });
      return { success: true };
    },
    {
      params: t.Object({ id: t.String() }),
      response: t.Object({ success: t.Boolean() }),
    },
  );
```

## File: packages/auth/src/client.ts
```typescript
import { getBaseUrl } from "@repo/utils";
import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

const baseURL = getBaseUrl();

export const authClient = createAuthClient({
  baseURL,
  fetchOptions: {
    headers: {
      Origin: baseURL,
    },
  },
  plugins: [adminClient()],
});
```

## File: packages/validators/src/profile.ts
```typescript
import { z } from "zod";

export const OnboardingSchema = z.object({
  companyName: z.string().min(2, "Company Name is required"),
  role: z.string().min(2, "Role is required"),
  defaultWeightSkills: z.number().int().min(0).max(100),
  defaultWeightExperience: z.number().int().min(0).max(100),
  defaultWeightEducation: z.number().int().min(0).max(100),
});

export type OnboardingInput = z.infer<typeof OnboardingSchema>;
```

## File: packages/validators/src/settings.ts
```typescript
import { z } from "zod";

export const UserSettingsSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(2, "Role/Title is required"),
  companyName: z.string().min(2, "Company Name is required"),
  notifications: z.object({
    emailAlerts: z.boolean(),
    browserAlerts: z.boolean(),
    aiInsights: z.boolean(),
  }),
  preferences: z.object({
    theme: z.enum(["light", "dark", "system"]),
    defaultAiModel: z.enum(["gpt-4o", "claude-3-5-sonnet", "gemini-1.5-pro"]),
    autoShortlist: z.boolean(),
  }),
});

export type UserSettingsValues = z.infer<typeof UserSettingsSchema>;
```

## File: docker-compose.yml
```yaml
services:
  mongodb:
    image: mongo:latest
    container_name: lensly-mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    environment:
      - MONGO_INITDB_DATABASE=lensly

volumes:
  mongodb_data:
```

## File: apps/web/src/app/(protected)/admin/layout.tsx
```typescript
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/web/components/ui/breadcrumb";
import { Separator } from "@repo/ui/web/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@repo/ui/web/components/ui/sidebar";
import { TooltipProvider } from "@repo/ui/web/components/ui/tooltip";
import { AppSidebar } from "@/features/admin/components/AppSidebar";
import { EmailVerificationBanner } from "@/features/auth/components/EmailVerificationBanner";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
            <EmailVerificationBanner />
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default RootLayout;
```

## File: apps/web/src/app/(protected)/dashboard/history/page.tsx
```typescript
import { Suspense } from "react";
import { HistoryClient } from "@/features/history";

export const metadata = {
  title: "Screening History | Lensly",
  description: "Review and export data from your past autonomous hiring cycles.",
};

export default function HistoryPage() {
  return (
    <Suspense>
      <HistoryClient />
    </Suspense>
  );
}
```

## File: apps/web/src/app/(protected)/dashboard/jobs/[jobId]/applicants/page.tsx
```typescript
import { Suspense } from "react";
import { IngestionHub } from "@/features/dashboard";

const IngestionHubPage = ({ params }: { params: { jobId: string } }) => {
  return (
    <Suspense>
      <IngestionHub jobId={params.jobId} />
    </Suspense>
  );
};

export default IngestionHubPage;
```

## File: apps/web/src/app/(protected)/dashboard/jobs/[jobId]/shortlist/page.tsx
```typescript
import { Suspense } from "react";
import { AIShortlist } from "@/features/dashboard";

export default async function ShortlistPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  return (
    <Suspense>
      <AIShortlist jobId={jobId} />
    </Suspense>
  );
}
```

## File: apps/web/src/app/(protected)/dashboard/jobs/[jobId]/page.tsx
```typescript
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { JobOverviewClient } from "@/features/dashboard/components/JobOverviewClient";
import { api } from "@/lib/api";

export default async function JobOverviewPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const h = await headers();

  const { data: job, error } = await api.jobs({ id: jobId }).get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  if (error || !job) {
    notFound();
  }

  return <JobOverviewClient initialData={job} />;
}
```

## File: apps/web/src/app/(protected)/dashboard/jobs/page.tsx
```typescript
import { Suspense } from "react";
import { JobsListClient } from "@/features/dashboard/components/JobsListClient";

const JobsPage = () => {
  return (
    <Suspense>
      <JobsListClient />
    </Suspense>
  );
};

export default JobsPage;
```

## File: apps/web/src/app/(public)/(auth)/sign-in/page.tsx
```typescript
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
```

## File: apps/web/src/app/(public)/(auth)/sign-up/page.tsx
```typescript
import { Suspense } from "react";
import { SignUpForm } from "@/features/auth/components/SignUpForm";

const SignUpPage = () => {
  return (
    <Suspense>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <SignUpForm />
      </div>
    </Suspense>
  );
};

export default SignUpPage;
```

## File: apps/web/src/features/dashboard/components/jobs-table/index.tsx
```typescript
"use client";

import { DataTable } from "@repo/ui/web/components/ui/data-table";
import type { PaginationState } from "@tanstack/react-table";
import { Briefcase, Loader2 } from "lucide-react";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useState } from "react";
import { EmptyState } from "@/components/shared/EmptyState";
import { useJobs } from "@/lib/queries/job";
import { columns } from "./columns";

export const JobsTable = () => {
  const { data: jobs, isLoading } = useJobs();

  const [queryState, setQueryState] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    pageSize: parseAsInteger.withDefault(10),
    search: parseAsString.withDefault(""),
    status: parseAsString.withDefault("all"),
    department: parseAsString.withDefault("all"),
  });

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: queryState.page - 1,
    pageSize: queryState.pageSize,
  });

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!jobs || jobs.length === 0) {
    return (
      <EmptyState
        icon={Briefcase}
        title="No active campaigns"
        description="Create your first hiring campaign to start screening candidates with AI."
        action={{
          label: "Create Job",
          href: "/dashboard/jobs/new",
        }}
      />
    );
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(queryState.search.toLowerCase()) ||
      job.department.toLowerCase().includes(queryState.search.toLowerCase());
    const matchesStatus = queryState.status === "all" || job.status === queryState.status;
    const matchesDept = queryState.department === "all" || job.department === queryState.department;
    return matchesSearch && matchesStatus && matchesDept;
  });

  const departments = Array.from(new Set(jobs.map((j) => j.department)));
  const statuses = Array.from(new Set(jobs.map((j) => j.status)));

  return (
    <DataTable
      columns={columns}
      data={filteredJobs}
      totalCount={filteredJobs.length}
      pageCount={Math.ceil(filteredJobs.length / queryState.pageSize)}
      pagination={{
        pageIndex: queryState.page - 1,
        pageSize: queryState.pageSize,
      }}
      onPaginationChange={(updater) => {
        const nextPagination = typeof updater === "function" ? updater(pagination) : updater;
        setPagination(nextPagination);
        setQueryState({
          page: nextPagination.pageIndex + 1,
          pageSize: nextPagination.pageSize,
        });
      }}
      searchKey="jobs"
      searchValue={queryState.search}
      onSearchChange={(search) => setQueryState({ search, page: 1 })}
      onClearFilters={() =>
        setQueryState({ search: "", status: "all", department: "all", page: 1 })
      }
      filterConfigs={[
        {
          name: "Status",
          value: queryState.status,
          onValueChange: (status) => setQueryState({ status, page: 1 }),
          options: statuses.map((s) => ({ label: s, value: s })),
        },
        {
          name: "Department",
          value: queryState.department,
          onValueChange: (department) => setQueryState({ department, page: 1 }),
          options: departments.map((d) => ({ label: d, value: d })),
        },
      ]}
    />
  );
};

export default JobsTable;
```

## File: apps/web/src/features/dashboard/components/DashboardHeader.tsx
```typescript
import { Separator } from "@repo/ui/web/components/ui/separator";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const DashboardHeader = ({ title, subtitle, children }: DashboardHeaderProps) => {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
          {subtitle && <p className="text-muted-foreground text-base">{subtitle}</p>}
        </div>
        {children && <div className="flex items-center gap-3">{children}</div>}
      </div>
      <Separator />
    </div>
  );
};

export default DashboardHeader;
```

## File: apps/web/src/features/history/components/history-table/columns.tsx
```typescript
"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { Calendar, Download } from "lucide-react";
import type { api, ExtractData } from "@/lib/api";

type HistoryData = ExtractData<typeof api.jobs.history.get> extends Array<infer T> ? T : never;

export const columns: ColumnDef<HistoryData>[] = [
  {
    accessorKey: "jobTitle",
    header: "Campaign name",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm tracking-tight">{row.original.jobTitle}</span>
        <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
          <Calendar className="size-3" /> {row.original.date}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "candidates",
    header: "Metrics",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{row.original.candidates}</span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
            Scanned
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{row.original.shortlisted}</span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
            Shortlisted
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "avgScore",
    header: "Assessment precision",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-primary">{row.original.avgScore}%</span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
            Match rate
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "timeSaved",
    header: "Time saved",
    cell: ({ row }) => (
      <Badge variant="secondary" className="font-bold uppercase tracking-wider text-[10px]">
        {row.original.timeSaved}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right">Action</div>,
    cell: () => (
      <div className="text-right">
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted">
          <Download className="size-4" />
        </Button>
      </div>
    ),
  },
];
```

## File: apps/web/src/features/history/components/history-table/index.tsx
```typescript
"use client";

import { DataTable } from "@repo/ui/web/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import type { PaginationState } from "@tanstack/react-table";
import { History as HistoryIcon, Loader2 } from "lucide-react";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useState } from "react";
import { EmptyState } from "@/components/shared/EmptyState";
import { api } from "@/lib/api";
import { columns } from "./columns";

export const HistoryTable = () => {
  const { data: history, isLoading } = useQuery({
    queryKey: ["job-history"],
    queryFn: async () => {
      const { data, error } = await api.jobs.history.get();
      if (error) throw error;
      return data;
    },
  });

  const [queryState, setQueryState] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    pageSize: parseAsInteger.withDefault(10),
    search: parseAsString.withDefault(""),
    status: parseAsString.withDefault("all"),
  });

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: queryState.page - 1,
    pageSize: queryState.pageSize,
  });

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!history || history.length === 0) {
    return (
      <EmptyState
        icon={HistoryIcon}
        title="No history yet"
        description="Completed hiring campaigns will appear here once you close them."
      />
    );
  }

  const filteredHistory = history.filter((item) => {
    const matchesSearch = item.jobTitle.toLowerCase().includes(queryState.search.toLowerCase());
    return matchesSearch;
  });

  return (
    <DataTable
      columns={columns}
      data={filteredHistory}
      totalCount={filteredHistory.length}
      pageCount={Math.ceil(filteredHistory.length / queryState.pageSize)}
      pagination={{
        pageIndex: queryState.page - 1,
        pageSize: queryState.pageSize,
      }}
      onPaginationChange={(updater) => {
        const nextPagination = typeof updater === "function" ? updater(pagination) : updater;
        setPagination(nextPagination);
        setQueryState({
          page: nextPagination.pageIndex + 1,
          pageSize: nextPagination.pageSize,
        });
      }}
      searchKey="history"
      searchValue={queryState.search}
      onSearchChange={(search) => setQueryState({ search, page: 1 })}
      onClearFilters={() => setQueryState({ search: "", status: "all", page: 1 })}
    />
  );
};

export default HistoryTable;
```

## File: apps/web/src/features/history/components/HistoryClient.tsx
```typescript
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import { TrendingUp } from "lucide-react";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { HistoryTable } from "./history-table";

export const HistoryClient = () => {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader
        title="Screening history"
        subtitle="Review and export data from your past autonomous hiring cycles."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Total candidates processed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">1,482</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <TrendingUp className="size-3 text-emerald-600" /> 12% increase from previous month
            </p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Cumulative efficiency saved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">53.6 hours</div>
            <p className="text-xs text-muted-foreground mt-1">
              Review hours reclaimed for human talent
            </p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Average match precision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">84%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Consistency maintained across assessment batches
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">Historical logs</h2>
          <p className="text-sm text-muted-foreground">
            Audit and download reports from previous recruitment campaigns.
          </p>
        </div>
        <HistoryTable />
      </div>
    </div>
  );
};
```

## File: apps/web/src/features/www/components/NavigationPill.tsx
```typescript
"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@repo/ui/web/components/ui/navigation-menu";
import { cn } from "@repo/ui/web/lib/utils";
import { Home, MessageSquare, Zap } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

const NAVIGATION_ITEMS = [
  {
    href: "#hero",
    label: "Home",
    Icon: Home,
  },
  {
    href: "#features",
    label: "Features",
    Icon: Zap,
  },
  {
    href: "#testimonials",
    label: "Testimonials",
    Icon: MessageSquare,
  },
];

const NavigationPill = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <NavigationMenu
        className={cn(
          "border border-border",
          "bg-background",
          "px-4 py-2 transition-all duration-300 hover:bg-muted/50",
        )}
      >
        <NavigationMenuList className="gap-2">
          {NAVIGATION_ITEMS.map(({ href, label, Icon }) => (
            <NavigationMenuItem key={href}>
              <Link
                href={href as Route}
                className={cn(
                  "flex items-center justify-center size-10 transition-all duration-300",
                  "text-foreground/70 hover:text-primary",
                  "hover:bg-primary/10 hover:scale-110",
                  "focus:bg-primary/10 focus:outline-none",
                )}
              >
                <Icon className="size-5 transition-transform duration-300" />
                <span className="sr-only">{label}</span>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationPill;
```

## File: apps/web/src/lib/queries/admin.ts
```typescript
import { QUERY_KEYS } from "@repo/utils/query-keys";
import type { createUserSchema } from "@repo/validators";
import { queryOptions } from "@tanstack/react-query";
import type { z } from "zod";
import { api } from "@/lib/api";

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const adminUsersQuery = (page: number, limit: number, search?: string) =>
  queryOptions({
    queryKey: QUERY_KEYS.admin.users.list(page, limit, search),
    queryFn: async () => {
      const { data, error } = await api.admin.users.get({
        query: { page, limit, search: search || undefined },
      });
      if (error) throw error.value;
      return data;
    },
  });

export const adminUserQuery = (id: string) =>
  queryOptions({
    queryKey: QUERY_KEYS.admin.users.detail(id),
    queryFn: async () => {
      const { data, error } = await api.admin.users({ id }).get();
      if (error) throw error.value;
      return data;
    },
  });

export const createUserMutation = () => ({
  mutationFn: async (input: CreateUserInput) => {
    const { data, error } = await api.admin.users.post(input);
    if (error) throw error.value;
    return data;
  },
});

export const updateUserRoleMutation = () => ({
  mutationFn: async ({ id, role }: { id: string; role: "admin" | "user" }) => {
    const { data, error } = await api.admin.users({ id }).role.put({ role });
    if (error) throw error.value;
    return data;
  },
});

export const deleteUserMutation = () => ({
  mutationFn: async ({ id }: { id: string }) => {
    const { data, error } = await api.admin.users({ id }).delete();
    if (error) throw error.value;
    return data;
  },
});
```

## File: apps/web/src/lib/queries/applicant.ts
```typescript
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
export const useUploadApplicantMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ jobId, file }: { jobId: string; file: File }) => {
      const { data, error } = await api.applicants.upload.post({
        jobId,
        file,
      });
      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["applicants", variables.jobId] });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
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
    },
  });
};
```

## File: apps/web/src/lib/queries/job.ts
```typescript
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
    },
  });
};
```

## File: packages/api/src/routers/profile.ts
```typescript
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";
import { ProfileSchema } from "./types";

export const profileRouter = new Elysia({ prefix: "/profile" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get(
    "/",
    async ({ user }) => {
      let profile = await schema.Profile.findOne({ userId: user.id });
      if (!profile) {
        profile = new schema.Profile({
          userId: user.id,
          defaultWeightSkills: 50,
          defaultWeightExperience: 30,
          defaultWeightEducation: 20,
        });
        await profile.save();
      }
      return profile;
    },
    {
      response: ProfileSchema,
    },
  )
  .put(
    "/",
    async ({ body, user }) => {
      const profile = await schema.Profile.findOneAndUpdate(
        { userId: user.id },
        { $set: body },
        { new: true, upsert: true },
      );
      return profile;
    },
    {
      body: t.Partial(
        t.Object({
          companyName: t.String(),
          role: t.String(),
          defaultWeightSkills: t.Number(),
          defaultWeightExperience: t.Number(),
          defaultWeightEducation: t.Number(),
        }),
      ),
      response: ProfileSchema,
    },
  );
```

## File: packages/db/src/schema/activity.ts
```typescript
import { type Model, model, models, Schema } from "mongoose";

export interface IActivity {
  userId: string;
  action: string;
  entityId: string;
  entityType: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export const ActivitySchema = new Schema<IActivity>(
  {
    userId: { type: String, required: true },
    action: { type: String, required: true },
    entityId: { type: String, required: true },
    entityType: { type: String, required: true },
    metadata: { type: Schema.Types.Mixed },
  },
  { timestamps: true },
);

export const Activity: Model<IActivity> =
  models.Activity || model<IActivity>("Activity", ActivitySchema);
export const activity = Activity;
```

## File: packages/db/src/schema/applicant.ts
```typescript
import type mongoose from "mongoose";
import { type Model, model, models, Schema } from "mongoose";

export interface IApplicant {
  jobId: mongoose.Types.ObjectId;
  name: string;
  email?: string;
  source: string;
  resumeUrl?: string;
  rawText?: string;
  structuredData?: {
    education?: {
      institution?: string;
      degree?: string;
      field?: string;
      year?: number;
    }[];
    experience?: {
      company?: string;
      role?: string;
      duration?: string;
      description?: string;
    }[];
    skills?: string[];
    location?: string;
  };
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export const ApplicantSchema = new Schema<IApplicant>(
  {
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    name: { type: String, required: true },
    email: { type: String },
    source: { type: String, required: true },
    resumeUrl: { type: String },
    rawText: { type: String },
    structuredData: {
      education: [
        {
          institution: String,
          degree: String,
          field: String,
          year: Number,
        },
      ],
      experience: [
        {
          company: String,
          role: String,
          duration: String,
          description: String,
        },
      ],
      skills: [String],
      location: String,
    },
    status: { type: String, required: true, default: "Pending_Screening" },
  },
  { timestamps: true },
);

export const Applicant: Model<IApplicant> =
  models.Applicant || model<IApplicant>("Applicant", ApplicantSchema);
export const applicant = Applicant;
```

## File: packages/db/src/schema/job.ts
```typescript
import { type Model, model, models, Schema } from "mongoose";

export interface IJob {
  userId: string;
  title: string;
  department: string;
  seniority: string;
  description: string;
  requiredSkills: string[];
  weightSkills: number;
  weightExperience: number;
  weightEducation: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export const JobSchema = new Schema<IJob>(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    seniority: { type: String, required: true },
    description: { type: String, required: true },
    requiredSkills: [{ type: String }],
    weightSkills: { type: Number, required: true },
    weightExperience: { type: Number, required: true },
    weightEducation: { type: Number, required: true },
    status: { type: String, required: true, default: "Draft" },
  },
  { timestamps: true },
);

export const Job: Model<IJob> = models.Job || model<IJob>("Job", JobSchema);
export const job = Job;
```

## File: packages/db/src/schema/profile.ts
```typescript
import { type Model, model, models, Schema } from "mongoose";

export interface IProfile {
  userId: string;
  companyName?: string;
  role?: string;
  defaultWeightSkills: number;
  defaultWeightExperience: number;
  defaultWeightEducation: number;
  createdAt: Date;
  updatedAt: Date;
}

export const ProfileSchema = new Schema<IProfile>(
  {
    userId: { type: String, required: true, unique: true },
    companyName: { type: String },
    role: { type: String },
    defaultWeightSkills: { type: Number, default: 50 },
    defaultWeightExperience: { type: Number, default: 30 },
    defaultWeightEducation: { type: Number, default: 20 },
  },
  { timestamps: true },
);

export const Profile: Model<IProfile> = models.Profile || model<IProfile>("Profile", ProfileSchema);
export const profile = Profile;
```

## File: packages/db/src/schema/screening-result.ts
```typescript
import type mongoose from "mongoose";
import { type Model, model, models, Schema } from "mongoose";

export interface IScreeningResult {
  applicantId: mongoose.Types.ObjectId;
  jobId: mongoose.Types.ObjectId;
  overallScore: number;
  skillScore: number;
  experienceScore: number;
  educationScore: number;
  relevanceScore: number;
  strengths: string[];
  gaps: string[];
  aiRecommendation: string;
  aiReasoning?: string;
  processedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const ScreeningResultSchema = new Schema<IScreeningResult>(
  {
    applicantId: {
      type: Schema.Types.ObjectId,
      ref: "Applicant",
      required: true,
      unique: true,
    },
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    overallScore: { type: Number, required: true },
    skillScore: { type: Number, required: true },
    experienceScore: { type: Number, required: true },
    educationScore: { type: Number, required: true },
    relevanceScore: { type: Number, required: true },
    strengths: [{ type: String }],
    gaps: [{ type: String }],
    aiRecommendation: { type: String, required: true },
    aiReasoning: { type: String },
    processedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const ScreeningResult: Model<IScreeningResult> =
  models.ScreeningResult || model<IScreeningResult>("ScreeningResult", ScreeningResultSchema);
export const screeningResult = ScreeningResult;
```

## File: packages/validators/src/applicant.ts
```typescript
import { z } from "zod";

export const CreateApplicantSchema = z.object({
  jobId: z.string().min(1, "Job ID is required"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  source: z.string().min(1, "Source is required"),
  resumeUrl: z.string().url("Invalid resume URL").optional(),
  rawText: z.string().optional(),
});

export const UpdateApplicantStatusSchema = z.object({
  status: z.enum([
    "Pending_Screening",
    "Screening_In_Progress",
    "Screened",
    "Shortlisted",
    "Rejected",
  ]),
});

export type CreateApplicantInput = z.infer<typeof CreateApplicantSchema>;
export type UpdateApplicantStatusInput = z.infer<typeof UpdateApplicantStatusSchema>;

export interface Applicant {
  id: string;
  jobId: string;
  name: string;
  email: string;
  source: string;
  status: string;
  resumeUrl?: string;
  rawText?: string;
  structuredData?: {
    education?: {
      institution?: string;
      degree?: string;
      field?: string;
      year?: number;
    }[];
    experience?: {
      company?: string;
      role?: string;
      duration?: string;
      description?: string;
    }[];
    skills?: string[];
    location?: string;
  };
  screening?: {
    overallScore: number;
    aiRecommendation: string;
    aiReasoning: string;
  };
  createdAt: string;
  updatedAt: string;
}
```

## File: packages/validators/src/auth.ts
```typescript
import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["admin", "user"]),
});

export const updateUserSchema = z.object({
  role: z.enum(["admin", "user"]),
});

export const updateProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  image: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

export type SignInValues = z.infer<typeof signInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;
export type CreateUserValues = z.infer<typeof createUserSchema>;
export type UpdateUserValues = z.infer<typeof updateUserSchema>;
export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
```

## File: apps/web/src/app/(protected)/dashboard/profile/page.tsx
```typescript
import { AccountProfileClient } from "@/features/auth/components/AccountProfileClient";

const ProfilePage = () => {
  return <AccountProfileClient />;
};

export default ProfilePage;
```

## File: apps/web/src/app/layout.tsx
```typescript
import "@repo/ui/web/globals.css";
import { Toaster } from "@repo/ui/web/components/ui/sonner";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = GeistSans;
const geistMono = GeistMono;

import SEOConfig, { metadataConfig } from "@/components/shared/SEOConfig";
import { EmailVerificationBanner } from "@/features/auth/components/EmailVerificationBanner";

export const metadata: Metadata = metadataConfig;

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <NuqsAdapter>
              <SEOConfig />
              <EmailVerificationBanner />
              {children}
              <Toaster richColors />
            </NuqsAdapter>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
```

## File: apps/web/src/features/admin/components/AdminUsersClient.tsx
```typescript
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@repo/ui/web/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/web/components/ui/avatar";
import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@repo/ui/web/components/ui/card";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import type { ColumnDef, OnChangeFn, PaginationState } from "@tanstack/react-table";
import { Edit, Loader2, Shield, Trash2, User } from "lucide-react";
import Link from "next/link";
import { parseAsInteger, useQueryState } from "nuqs";
import { useMemo, useState } from "react";
import type { api, ExtractData } from "@/lib/api";
import { useAdminUsers, useDeleteUser, useUpdateUserRole } from "@/lib/hooks/use-admin-users";

type AdminUserData = NonNullable<ExtractData<typeof api.admin.users.get>>["data"][number];

export const AdminUsersClient = () => {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ shallow: false }),
  );
  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsInteger.withDefault(10).withOptions({ shallow: false }),
  );
  const [search, setSearch] = useQueryState("search", { defaultValue: "", shallow: false });
  const [view, setView] = useQueryState("view", { defaultValue: "table", shallow: false });

  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const { data: response, isLoading } = useAdminUsers(page, limit, search);

  const updateRoleMutation = useUpdateUserRole();
  const deleteUserMutation = useDeleteUser();

  const pagination = {
    pageIndex: page - 1,
    pageSize: limit,
  };

  const onPaginationChange: OnChangeFn<PaginationState> = (updaterOrValue) => {
    const nextPagination =
      typeof updaterOrValue === "function" ? updaterOrValue(pagination) : updaterOrValue;

    setPage(nextPagination.pageIndex + 1);
    setLimit(nextPagination.pageSize);
  };

  const columns: ColumnDef<AdminUserData>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => (
          <span className="font-mono text-xs text-zinc-500">{row.original.id.slice(0, 8)}...</span>
        ),
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => <span className="font-medium">{row.original.email}</span>,
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => {
          const role = row.original.role;
          return (
            <span
              className={
                role === "admin"
                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500 px-2 py-1 text-xs font-semibold"
                  : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 px-2 py-1 text-xs font-medium"
              }
            >
              {role || "user"}
            </span>
          );
        },
      },
      {
        id: "actions",
        header: () => <div className="text-right">Actions</div>,
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div className="text-right space-x-2 whitespace-nowrap">
              <Link href={`/admin/users/${user.id}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Edit className="w-4 h-4 text-zinc-500" />
                </Button>
              </Link>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  updateRoleMutation.mutate({
                    id: user.id,
                    role: user.role === "admin" ? "user" : "admin",
                  })
                }
                loading={
                  updateRoleMutation.isPending && updateRoleMutation.variables?.id === user.id
                }
              >
                {user.role === "admin" ? (
                  <>
                    <User className="w-4 h-4 mr-2" /> Demote
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" /> Promote
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => setDeleteConfirmId(user.id)}
                loading={
                  deleteUserMutation.isPending && deleteUserMutation.variables?.id === user.id
                }
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          );
        },
      },
    ],
    [updateRoleMutation, deleteUserMutation],
  );

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            User Management
          </h2>
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {response?.metadata?.totalCount || 0} Total Records
          </span>
        </div>
        <Link href="/admin/users/create">
          <Button>Create User</Button>
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={response?.data || []}
        pageCount={response?.metadata?.totalPages || 0}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
        searchKey="users"
        searchValue={search}
        onSearchChange={setSearch}
        viewMode={view as "table" | "grid"}
        onViewModeChange={(v) => setView(v)}
        renderCard={(user) => (
          <Card
            key={user.id}
            className="overflow-hidden transition-all hover:shadow-md border-border/50"
          >
            <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between space-y-0">
              <Badge
                variant={user.role === "admin" ? "default" : "secondary"}
                className={
                  user.role === "admin"
                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500"
                    : ""
                }
              >
                {user.role || "user"}
              </Badge>
              <div className="flex gap-1">
                <Link href={`/admin/users/${user.id}`}>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4 text-zinc-500" />
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={() => setDeleteConfirmId(user.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col items-center text-center">
              <Avatar className="h-16 w-16 mb-3 border-2 border-background shadow-sm">
                <AvatarImage src={user.image ?? undefined} alt={user.name} />
                <AvatarFallback className="text-xl">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-base truncate w-full">{user.name}</h3>
              <p className="text-xs text-muted-foreground truncate w-full">{user.email}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                variant="outline"
                size="sm"
                className="w-full h-8 text-xs"
                onClick={() =>
                  updateRoleMutation.mutate({
                    id: user.id,
                    role: user.role === "admin" ? "user" : "admin",
                  })
                }
                loading={
                  updateRoleMutation.isPending && updateRoleMutation.variables?.id === user.id
                }
              >
                {user.role === "admin" ? "Demote to User" : "Promote to Admin"}
              </Button>
            </CardFooter>
          </Card>
        )}
      />

      <AlertDialog
        open={!!deleteConfirmId}
        onOpenChange={(open) => !open && setDeleteConfirmId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user account and remove
              their data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                if (deleteConfirmId) {
                  deleteUserMutation.mutate({ id: deleteConfirmId });
                  setDeleteConfirmId(null);
                }
              }}
            >
              Delete User
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
```

## File: apps/web/src/features/dashboard/components/JobsListClient.tsx
```typescript
"use client";

import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import { Briefcase, Plus, Users } from "lucide-react";
import Link from "next/link";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { JobsTable } from "./jobs-table";

export function JobsListClient() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader
        title="Jobs and campaigns"
        subtitle="Manage your active recruitment pipelines and review screening results."
      >
        <Button asChild>
          <Link href={"/dashboard/jobs/new"}>
            <Plus className="mr-2 size-4" />
            Create job
          </Link>
        </Button>
      </DashboardHeader>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">Active jobs</CardTitle>
            <Briefcase className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">12</div>
            <p className="text-xs text-muted-foreground mt-1">+2 from previous month</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Total applicants
            </CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">1,284</div>
            <p className="text-xs text-muted-foreground mt-1">18% increase this week</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Candidates screened
            </CardTitle>
            <div className="size-2 bg-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">942</div>
            <p className="text-xs text-muted-foreground mt-1">73.4% screening rate</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              Average match precision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">82%</div>
            <p className="text-xs text-muted-foreground mt-1">Consistency above benchmark</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">Active campaigns</h2>
          <p className="text-sm text-muted-foreground">
            Manage your recruitment pipelines and review screening results.
          </p>
        </div>
        <JobsTable />
      </div>
    </div>
  );
}
```

## File: packages/api/src/routers/admin.ts
```typescript
import { PaginatedUserResponseSchema, UserSchema } from "@repo/api/routers/types";
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";

export const adminRouter = new Elysia({ prefix: "/admin" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    if (session.user.role !== "admin") {
      throw new Response("Forbidden: Admin access required", { status: 403 });
    }
    return { user: session.user };
  })
  .get(
    "/users",
    async ({ query }) => {
      const limit = query.limit || 10;
      const page = query.page || 1;
      const skip = (page - 1) * limit;

      const filter: Record<string, unknown> = {};
      if (query.search) {
        filter.$or = [
          { name: { $regex: query.search, $options: "i" } },
          { email: { $regex: query.search, $options: "i" } },
        ];
      }

      const users = await schema.User.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);

      const totalCount = await schema.User.countDocuments(filter);
      const totalPages = Math.ceil(totalCount / limit);

      return {
        data: users.map((u) => ({
          id: u._id.toString(),
          name: u.name,
          email: u.email,
          emailVerified: u.emailVerified,
          image: u.image || null,
          role: u.role || null,
          banned: u.banned || false,
          banReason: u.banReason || null,
          banExpires: u.banExpires || null,
          createdAt: u.createdAt,
          updatedAt: u.updatedAt,
        })),
        metadata: { totalCount, page, totalPages },
      };
    },
    {
      query: t.Object({
        limit: t.Optional(t.Numeric({ default: 10 })),
        page: t.Optional(t.Numeric({ default: 1 })),
        search: t.Optional(t.String()),
      }),
      detail: { tags: ["Admin"], description: "Get paginated list of all users" },
      response: PaginatedUserResponseSchema,
    },
  )
  .post(
    "/users",
    async ({ body }) => {
      const { email, password, name, role } = body;

      const result = await auth.api.signUpEmail({
        body: { email, password, name },
        asResponse: false,
      });

      const user = await schema.User.findByIdAndUpdate(
        result.user.id,
        { $set: { role: role ?? "user" } },
        { new: true },
      );

      if (!user) throw new Response("Failed to retrieve created user", { status: 500 });

      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image || null,
        role: user.role || null,
        banned: user.banned || false,
        banReason: user.banReason || null,
        banExpires: user.banExpires || null,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
        password: t.String(),
        role: t.Optional(t.Union([t.Literal("admin"), t.Literal("user")])),
      }),
      detail: { tags: ["Admin"], description: "Create a new user with a specific role" },
      response: UserSchema,
    },
  )
  .get(
    "/users/:id",
    async ({ params: { id } }) => {
      const user = await schema.User.findById(id);
      if (!user) throw new Response("User not found", { status: 404 });
      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image || null,
        role: user.role || null,
        banned: user.banned || false,
        banReason: user.banReason || null,
        banExpires: user.banExpires || null,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      detail: { tags: ["Admin"], description: "Get a single user by ID" },
      response: UserSchema,
    },
  )
  .put(
    "/users/:id/role",
    async ({ params: { id }, body: { role } }) => {
      const updated = await schema.User.findByIdAndUpdate(id, { $set: { role } }, { new: true });
      if (!updated) throw new Response("User not found", { status: 404 });
      return {
        id: updated._id.toString(),
        name: updated.name,
        email: updated.email,
        emailVerified: updated.emailVerified,
        image: updated.image || null,
        role: updated.role || null,
        banned: updated.banned || false,
        banReason: updated.banReason || null,
        banExpires: updated.banExpires || null,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({ role: t.Union([t.Literal("admin"), t.Literal("user")]) }),
      detail: { tags: ["Admin"], description: "Update a user's role" },
      response: UserSchema,
    },
  )
  .delete(
    "/users/:id",
    async ({ params: { id } }) => {
      const existing = await schema.User.findById(id);
      if (!existing) throw new Response("User not found", { status: 404 });

      await auth.api.removeUser({ body: { userId: id } });
      return { success: true };
    },
    {
      params: t.Object({ id: t.String() }),
      detail: { tags: ["Admin"], description: "Delete a user" },
      response: t.Object({ success: t.Boolean() }),
    },
  )
  .get(
    "/stats",
    async () => {
      const total = await schema.User.countDocuments({});
      const bannedCount = await schema.User.countDocuments({ banned: true });

      return {
        users: { total, banned: bannedCount },
      };
    },
    {
      detail: { tags: ["Admin"], description: "Get administrative statistics" },
      response: t.Object({
        users: t.Object({ total: t.Number(), banned: t.Number() }),
      }),
    },
  );
```

## File: packages/validators/src/job.ts
```typescript
import { z } from "zod";

export const JobBaseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  department: z.string().min(2, "Department must be at least 2 characters"),
  seniority: z.string().min(2, "Seniority must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  requiredSkills: z.array(z.string()).min(1, "At least one skill is required"),
  weightSkills: z.number().int().min(0).max(100),
  weightExperience: z.number().int().min(0).max(100),
  weightEducation: z.number().int().min(0).max(100),
});

export const CreateJobSchema = JobBaseSchema.refine(
  (data) => {
    return data.weightSkills + data.weightExperience + data.weightEducation === 100;
  },
  {
    message: "Total weight must equal 100%",
    path: ["weightSkills"], // Point to one of the weight fields for the error
  },
);

export const UpdateJobSchema = JobBaseSchema.partial();

export type CreateJobInput = z.infer<typeof CreateJobSchema>;
export type UpdateJobInput = z.infer<typeof UpdateJobSchema>;

export interface Job {
  id: string;
  title: string;
  department: string;
  seniority: string;
  description: string;
  requiredSkills: string[];
  weightSkills: number;
  weightExperience: number;
  weightEducation: number;
  status?: string;
  applicantCount: number;
  screenedCount: number;
  avgScore?: number;
  createdAt: string;
  updatedAt: string;
}
```

## File: apps/web/src/app/(protected)/dashboard/layout.tsx
```typescript
import { Separator } from "@repo/ui/web/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@repo/ui/web/components/ui/sidebar";
import { TooltipProvider } from "@repo/ui/web/components/ui/tooltip";
import { DynamicBreadcrumbs } from "@/components/shared/DynamicBreadcrumbs";
import { ThemeSwitch } from "@/components/shared/ThemeSwitch";
import { EmailVerificationBanner } from "@/features/auth/components/EmailVerificationBanner";
import { DashboardSidebar } from "@/features/dashboard/components/DashboardSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b border-border/40 backdrop-blur-sm sticky top-0 z-20 px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
              <DynamicBreadcrumbs />
            </div>
            <div className="flex items-center gap-2">
              <ThemeSwitch />
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-8 p-4 md:p-8 pt-6">
            <div className="w-full max-w-7xl mx-auto">
              <EmailVerificationBanner />
              {children}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default DashboardLayout;
```

## File: apps/web/src/app/(public)/(www)/page.tsx
```typescript
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import dayjs from "dayjs";
import { BrainCircuit, CheckSquare, FileSearch, LineChart, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import SiteLogo from "@/components/shared/SiteLogo";
import { ThemeSwitch } from "@/components/shared/ThemeSwitch";
import NavigationPill from "@/features/www/components/NavigationPill";
import TestimonialsCarousel from "@/features/www/components/TestimonialsCarousel";

const features = [
  {
    title: "AI-Assisted Screening",
    description:
      "Evaluate hundreds of structured profiles and unstructured resumes instantly using our advanced Gemini integration.",
    icon: <BrainCircuit className="size-6 text-primary" />,
  },
  {
    title: "Human-in-the-Loop",
    description:
      "Maintain complete control over final hiring decisions with a transparent, explainable review interface.",
    icon: <CheckSquare className="size-6 text-primary" />,
  },
  {
    title: "Unstructured Data Parsing",
    description:
      "Effortlessly ingest and analyze data from external job boards, CSV spreadsheets, and raw PDF resumes.",
    icon: <FileSearch className="size-6 text-primary" />,
  },
  {
    title: "Weighted Scoring",
    description:
      "Customize the AI's focus by weighting skills, experience, and education to match your exact job requirements.",
    icon: <LineChart className="size-6 text-primary" />,
  },
  {
    title: "Role-Based Security",
    description:
      "Enterprise-grade authentication ensures sensitive candidate data and HR workflows remain completely secure.",
    icon: <ShieldCheck className="size-6 text-primary" />,
  },
  {
    title: "Seamless Talent Sync",
    description:
      "Direct integration with the Umurava Talent Pool to instantly pull in pre-vetted, high-quality candidates.",
    icon: <Users className="size-6 text-primary" />,
  },
];

const WWWPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <NavigationPill />
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 flex items-center gap-2">
        <ThemeSwitch />
        <Button asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>

      <main className="flex-1 w-full mx-auto">
        <section
          id="hero"
          className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 px-6"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
          <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
            <SiteLogo className="size-24" />

            <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight sm:text-7xl lg:text-8xl sm:leading-[1.1] lg:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
              Hire smarter with
              <br className="hidden sm:block" />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Lensly
              </span>
            </h1>

            <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground sm:text-xl">
              An intelligent talent profile screening platform that enhances recruiter
              decision-making while preserving human-led final hiring choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="px-8 text-base font-semibold" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 text-base font-semibold" asChild>
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="py-20 px-6 sm:py-32 bg-secondary/30 relative border-t border-b border-border/50"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
                The future of technical recruiting
              </h2>
              <p className="text-lg text-muted-foreground">
                We've combined cutting-edge LLMs with intuitive HR workflows to solve the problem of
                high application volumes and objective candidate comparison.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
                >
                  <CardHeader>
                    <div className="mb-4 h-12 w-12 bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="py-20 px-6 sm:py-32 text-center relative max-w-7xl mx-auto overflow-hidden"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16">
            Trusted by hiring teams
          </h2>

          <TestimonialsCarousel />
        </section>
      </main>

      <footer className="border-t border-border/50 bg-card py-12 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-1 sm:col-span-2">
            <div className="flex flex-row items-center gap-3">
              <div className="size-16 flex items-center justify-center">
                <SiteLogo />
              </div>
              <span className="font-bold text-2xl tracking-tight">Lensly</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Accelerating the hiring process while ensuring transparency, fairness, and human
              oversight.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://github.com/karume-lab/lensly"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiGithub className="size-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Daniel Karume</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/karume-lab"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://karume.vercel.app/core/daniel-karume-resume.pdf"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="https://karume.vercel.app/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Javan Odhiambo</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/Javan-Odhiambo"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {dayjs().year()} Lensly. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            Built for the Umurava AI Hackathon
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WWWPage;
```

## File: apps/web/src/features/admin/components/AdminDashboardClient.tsx
```typescript
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
import { BarChart3, Loader2, ShieldAlert, TrendingUp, UserCheck, Users } from "lucide-react";
import { api } from "@/lib/api";

export const AdminDashboardClient = () => {
  // Fetch combined stats from the new endpoint
  const { data: stats, isLoading } = useQuery({
    queryKey: QUERY_KEYS.admin.stats(),
    queryFn: async () => {
      const { data, error } = await api.admin.stats.get();
      if (error) throw error;
      return data;
    },
  });

  const totalUsers = stats?.users.total ?? 0;
  const bannedUsers = stats?.users.banned ?? 0;
  const activeUsers = totalUsers - bannedUsers;

  return (
    <div className="flex-1 space-y-6 p-4 pt-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Platform Overview</h2>
        <p className="text-muted-foreground">
          Real-time statistics and performance metrics for the Lensly application.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : totalUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Registered accounts across platform
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
            <UserCheck className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : activeUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Non-banned platform users</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Banned Accounts</CardTitle>
            <ShieldAlert className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : bannedUsers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Currently restricted access</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              User Growth
            </CardTitle>
            <CardDescription>Platform adoption metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 py-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">Total Registered</span>
                <span className="text-3xl font-bold">{isLoading ? "..." : totalUsers}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">Banned Users</span>
                <span className="text-3xl font-bold text-destructive">
                  {isLoading ? "..." : bannedUsers}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Platform Status
            </CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Active Ratio</span>
                <span className="text-2xl font-bold">
                  {isLoading
                    ? "..."
                    : `${Math.round((activeUsers / Math.max(totalUsers, 1)) * 100)}%`}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground italic text-xs">
                  Stats are refreshed automatically.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
```

## File: apps/web/src/features/admin/components/AppSidebar.tsx
```typescript
"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { authClient } from "@repo/auth/client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@repo/ui/web/components/ui/sidebar";
import { BookOpen, Code2, LayoutDashboard, Settings2 } from "lucide-react";
import { NavMain, NavProjects, NavUser } from "@/components/shared/SidebarComponents";
import SiteLogo from "@/components/shared/SiteLogo";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/admin",
        },
      ],
    },
    {
      title: "Admin",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Users",
          url: "/admin/users",
        },
      ],
    },
    {
      title: "Developer",
      url: "#",
      icon: Code2,
      items: [
        {
          title: "API Reference",
          url: "/docs/api/reference",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Quick Start Tutorial",
      url: "https://code2tutorial.com/tutorial/926b939b-24c9-487a-a3f9-359877d46087/index.md",
      icon: BookOpen,
    },
    {
      name: "Documentation",
      url: "/docs/getting-started",
      icon: BookOpen,
    },
    {
      name: "GitHub",
      url: "https://github.com/karume-lab/lensly",
      icon: SiGithub,
    },
  ],
};

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { data: session, isPending } = authClient.useSession();
  const { state } = useSidebar();

  const user = session?.user
    ? {
        name: session.user.name,
        email: session.user.email,
        avatar: session.user.image ?? "",
      }
    : null;

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2 transition-all duration-200 group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:justify-center h-12">
          <SiteLogo
            className={`w-auto object-contain shrink-0 transition-all duration-200 ${isCollapsed ? "h-8" : "h-10"}`}
          />
          <span className="font-bold text-xl group-data-[collapsible=icon]:hidden whitespace-nowrap">
            Lensly
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        {isPending ? (
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="h-8 w-8 animate-pulse bg-sidebar-accent" />
            <div className="flex-1 space-y-1">
              <div className="h-3 w-20 animate-pulse rounded bg-sidebar-accent" />
              <div className="h-2 w-24 animate-pulse rounded bg-sidebar-accent" />
            </div>
          </div>
        ) : (
          user && <NavUser user={user} />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
```

## File: apps/web/src/features/auth/components/AccountProfileClient.tsx
```typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@repo/auth/client";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/web/components/ui/avatar";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/web/components/ui/form";
import { Input } from "@repo/ui/web/components/ui/input";
import { Label } from "@repo/ui/web/components/ui/label";
import { type UpdateProfileValues, updateProfileSchema } from "@repo/validators";
import { Camera, Check, Loader2, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";

export const AccountProfileClient = () => {
  const { data: session, isPending: isSessionLoading } = authClient.useSession();
  const [isUpdating, setIsUpdating] = useState(false);

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    values: {
      name: session?.user.name || "",
      image: session?.user.image || "",
    },
  });

  const onSubmit = async (values: UpdateProfileValues) => {
    setIsUpdating(true);
    try {
      const { error } = await authClient.updateUser({
        name: values.name,
        image: values.image,
      });

      if (error) throw error;

      toast.success("Profile updated successfully");
      form.reset(values);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update profile";
      toast.error(message);
    } finally {
      setIsUpdating(false);
    }
  };

  if (isSessionLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader
        title="Personal Profile"
        subtitle="Manage your personal information and profile preferences."
      />

      <div className="grid gap-8 md:grid-cols-[250px_1fr]">
        <aside className="space-y-4">
          <Card className="overflow-hidden border-border/50">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="relative group">
                <Avatar className="h-24 w-24 border-2 border-background shadow-sm">
                  <AvatarImage src={session.user.image || ""} alt={session.user.name} />
                  <AvatarFallback className="text-2xl bg-muted text-muted-foreground">
                    {session.user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg">{session.user.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {session.user.role || "User"}
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>

        <div className="space-y-6">
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your name and profile picture URL.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input {...field} className="pl-10 h-10" placeholder="John Doe" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          value={session.user.email}
                          disabled
                          className="pl-10 h-10 bg-muted/50 cursor-not-allowed opacity-70"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Check className="h-3 w-3 text-green-500" />
                        Verified account email
                      </p>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Avatar URL</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Camera className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              {...field}
                              className="pl-10 h-10"
                              placeholder="https://example.com/avatar.jpg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-end pt-4 border-t border-border/50">
                    <Button type="submit" loading={isUpdating} disabled={!form.formState.isDirty}>
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
```

## File: apps/web/src/features/auth/components/SignInForm.tsx
```typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@repo/auth/client";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { Input } from "@repo/ui/web/components/ui/input";
import { Label } from "@repo/ui/web/components/ui/label";
import { PasswordInput } from "@repo/ui/web/components/ui/password-input";
import { QUERY_KEYS } from "@repo/utils/query-keys";
import { type SignInValues, signInSchema } from "@repo/validators";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Route } from "next";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SocialAuth } from "@/features/auth/components/SocialAuth";

export const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInMutation = useMutation({
    mutationFn: async (values: SignInValues) => {
      const { data, error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
      });
      if (error) throw new Error(error.message || "Invalid credentials");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.auth.session() });
      toast.success("Welcome back!");
      const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
      router.push(callbackUrl as Route);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (values: SignInValues) => {
    signInMutation.mutate(values);
  };

  return (
    <Card className="w-full max-w-md border-border">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Sign in to Lensly
        </CardTitle>
        <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
          Welcome back! Please enter your details.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {signInMutation.isError && (
          <div className="mb-4 bg-red-50 p-4 dark:bg-red-900/30">
            <p className="text-sm font-medium text-red-800 dark:text-red-300">
              {signInMutation.error.message}
            </p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs font-medium text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                autoComplete="current-password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs font-medium text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full" loading={signInMutation.isPending}>
            Sign in
          </Button>
        </form>

        <div className="mt-8">
          <SocialAuth />
        </div>
      </CardContent>

      <CardFooter className="flex justify-center border-t border-zinc-100 p-6 dark:border-zinc-800/50">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
```

## File: apps/web/src/features/auth/components/SignUpForm.tsx
```typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@repo/auth/client";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { Input } from "@repo/ui/web/components/ui/input";
import { Label } from "@repo/ui/web/components/ui/label";
import { PasswordInput } from "@repo/ui/web/components/ui/password-input";
import { QUERY_KEYS } from "@repo/utils/query-keys";
import { type SignUpValues, signUpSchema } from "@repo/validators";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Route } from "next";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SocialAuth } from "@/features/auth/components/SocialAuth";

export const SignUpForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const signUpMutation = useMutation({
    mutationFn: async (values: SignUpValues) => {
      const { data, error } = await authClient.signUp.email({
        email: values.email,
        password: values.password,
        name: values.name,
      });
      if (error) throw new Error(error.message || "Failed to create account");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.auth.session() });
      toast.success("Account created successfully!");

      const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
      router.push(callbackUrl as Route);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (values: SignUpValues) => {
    signUpMutation.mutate(values);
  };

  return (
    <Card className="w-full max-w-md border-border">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Create an account
        </CardTitle>
        <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
          Join Lensly to start managing your tasks today.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {signUpMutation.isError && (
          <div className="mb-4 bg-red-50 p-4 dark:bg-red-900/30">
            <p className="text-sm font-medium text-red-800 dark:text-red-300">
              {signUpMutation.error.message}
            </p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs font-medium text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs font-medium text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                placeholder="••••••••"
                autoComplete="new-password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs font-medium text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full" loading={signUpMutation.isPending}>
            Sign up
          </Button>
        </form>

        <div className="mt-8">
          <SocialAuth />
        </div>
      </CardContent>

      <CardFooter className="flex justify-center border-t border-zinc-100 p-6 dark:border-zinc-800/50">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
```

## File: apps/web/src/features/dashboard/components/jobs-table/columns.tsx
```typescript
"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/web/components/ui/dropdown-menu";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpRight, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { toast } from "sonner";
import type { api, ExtractData } from "@/lib/api";
import { useDeleteJobMutation } from "@/lib/queries/job";

type JobData = ExtractData<typeof api.jobs.get> extends Array<infer T> ? T : never;

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Screening":
      return "bg-info/10 text-info-foreground border-info/20 uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
    case "Shortlisting":
      return "bg-primary/10 text-primary border-primary/20 uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
    case "Review Shortlist":
      return "bg-warning/10 text-warning-foreground border-warning/20 uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
    case "Draft":
      return "bg-muted text-muted-foreground border-border uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
    default:
      return "bg-muted text-muted-foreground border-border uppercase tracking-wider text-[10px] font-bold whitespace-nowrap";
  }
};

const ActionsCell = ({ job }: { job: JobData }) => {
  const deleteMutation = useDeleteJobMutation();
  const isReview = job.status === "Review Shortlist" || job.status === "Active";

  const handleDelete = () => {
    deleteMutation.mutate(job.id, {
      onSuccess: () => {
        toast.success("Job deleted successfully");
      },
      onError: () => {
        toast.error("Failed to delete job. Please try again.");
      },
    });
  };

  return (
    <div className="flex items-center justify-end gap-2">
      {isReview ? (
        <Button size="sm" asChild className="h-8">
          <Link href={`/dashboard/jobs/${job.id}/shortlist` as Route}>
            <span className="flex items-center gap-1">
              Review results
              <ArrowUpRight className="size-3" />
            </span>
          </Link>
        </Button>
      ) : (
        <Button variant="ghost" size="sm" asChild className="h-8">
          <Link href={`/dashboard/jobs/${job.id}/ingestion` as Route}>View applicants</Link>
        </Button>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            aria-label="Open job actions menu"
            disabled={deleteMutation.isPending}
          >
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link
              href={`/dashboard/jobs/${job.id}/edit` as Route}
              className="flex items-center gap-2"
            >
              <Pencil className="size-3.5" />
              Edit job
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive focus:text-destructive flex items-center gap-2"
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
          >
            <Trash2 className="size-3.5" />
            {deleteMutation.isPending ? "Deleting..." : "Delete job"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const columns: ColumnDef<JobData>[] = [
  {
    accessorKey: "title",
    header: "Role",
    cell: ({ row }) => {
      const job = row.original;
      return (
        <div className="flex flex-col">
          <span className="font-semibold text-sm">{job.title}</span>
          <span className="text-xs text-muted-foreground">{job.department}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "applicants",
    header: "Screening progress",
    cell: ({ row }) => {
      const job = row.original;
      return (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {job.screenedCount} / {job.applicantCount}
          </span>
          <span className="text-xs text-muted-foreground">screened</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const job = row.original;
      return (
        <Badge variant="outline" className={getStatusColor(job.status ?? "Draft")}>
          {job.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "avgScore",
    header: "Avg. Match",
    cell: ({ row }) => {
      const job = row.original;
      return (
        <div className="flex items-center gap-2">
          <div className="w-16 h-1.5 bg-muted overflow-hidden rounded-full">
            <div className="h-full bg-primary" style={{ width: `${job.avgScore || 0}%` }} />
          </div>
          <span className="text-xs font-medium">{job.avgScore || 0}%</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Action</div>,
    cell: ({ row }) => <ActionsCell job={row.original} />,
  },
];
```

## File: apps/web/src/features/dashboard/components/JobIngestionClient.tsx
```typescript
"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { ChevronLeft, Loader2, Share2 } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { toast } from "sonner";
import { IngestionHub } from "@/features/dashboard/components/IngestionHub";
import { useJob } from "@/lib/queries/job";

export function JobIngestionClient({ jobId }: { jobId: string }) {
  const { data: job, isLoading } = useJob(jobId);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success("Pipeline URL copied to clipboard");
  };

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-xl font-semibold">Job not found</h2>
        <p className="text-muted-foreground">
          The job you are looking for does not exist or has been removed.
        </p>
        <Button asChild variant="outline">
          <Link href={"/dashboard/jobs"}>Back to Jobs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6  slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Link
            href={"/dashboard/jobs"}
            className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group mb-1 w-fit"
          >
            <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Campaigns
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              Ingestion Phase
            </Badge>
          </div>
          <p className="text-muted-foreground line-clamp-1">
            {job.department} • {job.seniority} • {job.applicantCount} Total Applicants
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share Pipeline
          </Button>
          <Button size="sm" className="h-9" asChild>
            <Link href={`/dashboard/jobs/${jobId}/shortlist` as Route}>View Results</Link>
          </Button>
        </div>
      </div>

      <div className="border border-border bg-card">
        <IngestionHub jobId={jobId} />
      </div>
    </div>
  );
}
```

## File: apps/web/src/features/dashboard/components/JobOverviewClient.tsx
```typescript
"use client";

import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { ChevronRight, FileText, LayoutDashboard, Settings, Users } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import type { api, ExtractData } from "@/lib/api";

type JobData = NonNullable<ExtractData<ReturnType<typeof api.jobs>["get"]>>;

export function JobOverviewClient({ initialData }: { initialData: JobData }) {
  const job = initialData;

  if (!job) {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-xl font-semibold">Job not found</h2>
        <Button asChild variant="outline">
          <Link href={"/dashboard/jobs"}>Back to Jobs</Link>
        </Button>
      </div>
    );
  }

  const sections = [
    {
      title: "Ingestion Hub",
      description: "Upload and process new candidate resumes.",
      icon: FileText,
      href: `/dashboard/jobs/${job.id}/ingestion`,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Shortlist & Matching",
      description: "View AI-ranked candidates and match scores.",
      icon: Users,
      href: `/dashboard/jobs/${job.id}/shortlist`,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Settings",
      description: "Update job description and AI weights.",
      icon: Settings,
      href: `/dashboard/jobs/${job.id}/settings`,
      color: "text-slate-500",
      bg: "bg-slate-500/10",
    },
  ];

  return (
    <div className="flex flex-col gap-8  slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
        <p className="text-muted-foreground">
          {job.department} • {job.seniority}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link key={section.title} href={section.href as Route} className="group transition-all">
            <Card className="h-full bg-card border-border hover:border-primary/30 transition-all hover:shadow-md">
              <CardHeader>
                <div
                  className={`w-10 h-10 ${section.bg} ${section.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                >
                  <section.icon className="h-5 w-5" />
                </div>
                <CardTitle className="flex items-center justify-between">
                  {section.title}
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Quick Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Applicants Processed</span>
              <span className="font-semibold">
                {job.screenedCount} / {job.applicantCount}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">AI Match Confidence</span>
              <span className="font-semibold text-emerald-500">High (82%)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

## File: packages/api/src/routers/applicant.ts
```typescript
import { existsSync, mkdirSync } from "node:fs";
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import type { IApplicant } from "@repo/db/schema";
import { Elysia, t } from "elysia";
import { aiService } from "../lib/ai";
import { documentService } from "../lib/document";
import { ApplicantSchema, ScreeningResultSchema, StructuredDataSchema } from "./types";

export const applicantRouter = new Elysia({ prefix: "/applicants" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get(
    "/job/:jobId",
    async ({ params: { jobId } }) => {
      const applicants = await schema.Applicant.find({ jobId }).sort({ createdAt: -1 });
      return applicants.map((a) => ({
        id: a._id.toString(),
        jobId: a.jobId.toString(),
        name: a.name,
        email: a.email,
        source: a.source,
        status: a.status,
        resumeUrl: a.resumeUrl,
        rawText: a.rawText,
        structuredData: a.structuredData,
        createdAt: a.createdAt,
        updatedAt: a.updatedAt,
      }));
    },
    {
      params: t.Object({ jobId: t.String() }),
      response: t.Array(ApplicantSchema),
    },
  )
  .get(
    "/job/:jobId/shortlist",
    async ({ params: { jobId } }) => {
      const results = await schema.ScreeningResult.find({ jobId }).sort({ overallScore: -1 });
      const populated = await Promise.all(
        results.map(async (r) => {
          const applicant = await schema.Applicant.findById(r.applicantId);
          return {
            id: r._id.toString(),
            applicantId: r.applicantId.toString(),
            jobId: r.jobId.toString(),
            overallScore: r.overallScore,
            skillScore: r.skillScore,
            experienceScore: r.experienceScore,
            educationScore: r.educationScore,
            relevanceScore: r.relevanceScore,
            strengths: r.strengths,
            gaps: r.gaps,
            aiRecommendation: r.aiRecommendation,
            aiReasoning: r.aiReasoning,
            processedAt: r.processedAt,
            createdAt: r.createdAt,
            updatedAt: r.updatedAt,
            applicant: {
              name: applicant?.name || "Unknown",
              role: applicant?.structuredData?.experience?.[0]?.role || "N/A",
            },
          };
        }),
      );
      return populated;
    },
    {
      params: t.Object({ jobId: t.String() }),
      response: t.Array(
        t.Composite([
          ScreeningResultSchema,
          t.Object({
            applicant: t.Object({
              name: t.String(),
              role: t.String(),
            }),
          }),
        ]),
      ),
    },
  )
  .get(
    "/:id",
    async ({ params: { id } }) => {
      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });
      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: ApplicantSchema,
    },
  )
  .get(
    "/:id/deep-dive",
    async ({ params: { id } }) => {
      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });
      const screening = await schema.ScreeningResult.findOne({ applicantId: id });
      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
        screening: screening
          ? {
              id: screening._id.toString(),
              applicantId: screening.applicantId.toString(),
              jobId: screening.jobId.toString(),
              overallScore: screening.overallScore,
              skillScore: screening.skillScore,
              experienceScore: screening.experienceScore,
              educationScore: screening.educationScore,
              relevanceScore: screening.relevanceScore,
              strengths: screening.strengths,
              gaps: screening.gaps,
              aiRecommendation: screening.aiRecommendation,
              aiReasoning: screening.aiReasoning,
              processedAt: screening.processedAt,
              createdAt: screening.createdAt,
              updatedAt: screening.updatedAt,
            }
          : null,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: t.Composite([
        ApplicantSchema,
        t.Object({
          screening: t.Nullable(ScreeningResultSchema),
        }),
      ]),
    },
  )
  .patch(
    "/:id/status",
    async ({ params: { id }, body: { status } }) => {
      const applicant = await schema.Applicant.findByIdAndUpdate(
        id,
        { $set: { status } },
        { new: true },
      );
      if (!applicant) throw new Response("Applicant not found", { status: 404 });
      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({ status: t.String() }),
      response: ApplicantSchema,
    },
  )
  .post(
    "/upload",
    async ({ body: { jobId, file } }) => {
      const fileName = `${Date.now()}-${file.name}`;
      const uploadDir = "./uploads";
      if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true });
      }
      const path = `${uploadDir}/${fileName}`;
      await Bun.write(path, file);

      let rawText = "";
      try {
        rawText = await documentService.extractText(path);
      } catch (error) {
        console.error("Failed to extract text from document:", error);
      }

      let structuredData: IApplicant["structuredData"];
      if (rawText) {
        try {
          structuredData = await aiService.parseResume(rawText);
        } catch (error) {
          console.error("Failed to parse resume with AI:", error);
        }
      }

      const applicant = new schema.Applicant({
        jobId,
        name: file.name.replace(/\.[^/.]+$/, ""), // Use filename as name for now
        source: "External Upload",
        resumeUrl: path,
        rawText: rawText || undefined,
        structuredData: structuredData || undefined,
        status: "Applied",
      });
      await applicant.save();

      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
      };
    },
    {
      body: t.Object({
        jobId: t.String(),
        file: t.File(),
      }),
      response: ApplicantSchema,
    },
  )
  .post(
    "/upload-metadata",
    async ({ body }) => {
      const applicant = new schema.Applicant(body);
      await applicant.save();
      return {
        id: applicant._id.toString(),
        jobId: applicant.jobId.toString(),
        name: applicant.name,
        email: applicant.email,
        source: applicant.source,
        status: applicant.status,
        resumeUrl: applicant.resumeUrl,
        rawText: applicant.rawText,
        structuredData: applicant.structuredData,
        createdAt: applicant.createdAt,
        updatedAt: applicant.updatedAt,
      };
    },
    {
      body: t.Object({
        jobId: t.String(),
        name: t.String(),
        email: t.Optional(t.String()),
        source: t.String(),
        resumeUrl: t.Optional(t.String()),
        rawText: t.Optional(t.String()),
        structuredData: t.Optional(StructuredDataSchema),
      }),
      response: ApplicantSchema,
    },
  )
  .post(
    "/:id/screen",
    async ({ params: { id } }) => {
      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });

      const job = await schema.Job.findById(applicant.jobId);
      if (!job) throw new Response("Job not found", { status: 404 });

      // Use AI service to screen the applicant
      const result = await aiService.screenApplicant(
        {
          title: job.title,
          description: job.description,
          requiredSkills: job.requiredSkills,
          weightSkills: job.weightSkills,
          weightExperience: job.weightExperience,
          weightEducation: job.weightEducation,
        },
        {
          name: applicant.name,
          rawText: applicant.rawText,
          structuredData: applicant.structuredData,
        },
      );

      // Create screening result in database
      const screeningResult = new schema.ScreeningResult({
        applicantId: applicant._id,
        jobId: applicant.jobId,
        overallScore: result.overallScore,
        skillScore: result.skillScore,
        experienceScore: result.experienceScore,
        educationScore: result.educationScore,
        relevanceScore: result.relevanceScore,
        strengths: result.strengths,
        gaps: result.gaps,
        aiRecommendation: result.aiRecommendation,
        aiReasoning: result.aiReasoning,
      });
      await screeningResult.save();

      // Update applicant status
      applicant.status = result.overallScore >= 70 ? "Shortlisted" : "Screened";
      await applicant.save();

      return {
        success: true,
        result: {
          id: screeningResult._id.toString(),
          applicantId: screeningResult.applicantId.toString(),
          jobId: screeningResult.jobId.toString(),
          overallScore: screeningResult.overallScore,
          skillScore: screeningResult.skillScore,
          experienceScore: screeningResult.experienceScore,
          educationScore: screeningResult.educationScore,
          relevanceScore: screeningResult.relevanceScore,
          strengths: screeningResult.strengths,
          gaps: screeningResult.gaps,
          aiRecommendation: screeningResult.aiRecommendation,
          aiReasoning: screeningResult.aiReasoning,
          processedAt: screeningResult.processedAt,
          createdAt: screeningResult.createdAt,
          updatedAt: screeningResult.updatedAt,
        },
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: t.Object({
        success: t.Boolean(),
        result: ScreeningResultSchema,
      }),
    },
  )
  .get(
    "/:id/screening-result",
    async ({ params: { id } }) => {
      const result = await schema.ScreeningResult.findOne({ applicantId: id });
      if (!result) throw new Response("Screening result not found", { status: 404 });
      return {
        id: result._id.toString(),
        applicantId: result.applicantId.toString(),
        jobId: result.jobId.toString(),
        overallScore: result.overallScore,
        skillScore: result.skillScore,
        experienceScore: result.experienceScore,
        educationScore: result.educationScore,
        relevanceScore: result.relevanceScore,
        strengths: result.strengths,
        gaps: result.gaps,
        aiRecommendation: result.aiRecommendation,
        aiReasoning: result.aiReasoning,
        processedAt: result.processedAt,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
      };
    },
    {
      params: t.Object({ id: t.String() }),
      response: ScreeningResultSchema,
    },
  );
```

## File: packages/api/src/routers/types.ts
```typescript
import { t } from "elysia";

export const UserSchema = t.Object({
  id: t.String(),
  name: t.String(),
  email: t.String(),
  emailVerified: t.Boolean(),
  image: t.Nullable(t.String()),
  createdAt: t.Date(),
  updatedAt: t.Date(),
  role: t.Nullable(t.String()),
  banned: t.Nullable(t.Boolean()),
  banReason: t.Nullable(t.String()),
  banExpires: t.Nullable(t.Date()),
});

export const PaginationMetadataSchema = t.Object({
  totalCount: t.Number(),
  page: t.Number(),
  totalPages: t.Number(),
});

export const PaginatedUserResponseSchema = t.Object({
  data: t.Array(UserSchema),
  metadata: PaginationMetadataSchema,
});

export const JobSchema = t.Object({
  id: t.String(),
  userId: t.String(),
  title: t.String(),
  department: t.String(),
  seniority: t.String(),
  description: t.String(),
  requiredSkills: t.Array(t.String()),
  weightSkills: t.Number(),
  weightExperience: t.Number(),
  weightEducation: t.Number(),
  status: t.String(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
  applicantCount: t.Optional(t.Number()),
  screenedCount: t.Optional(t.Number()),
  avgScore: t.Optional(t.Number()),
});

export const ExperienceSchema = t.Object({
  company: t.Optional(t.String()),
  role: t.Optional(t.String()),
  duration: t.Optional(t.String()),
  description: t.Optional(t.String()),
});

export const EducationSchema = t.Object({
  institution: t.Optional(t.String()),
  degree: t.Optional(t.String()),
  field: t.Optional(t.String()),
  year: t.Optional(t.Number()),
});

export const StructuredDataSchema = t.Object({
  education: t.Optional(t.Array(EducationSchema)),
  experience: t.Optional(t.Array(ExperienceSchema)),
  skills: t.Optional(t.Array(t.String())),
  location: t.Optional(t.String()),
});

export const ApplicantSchema = t.Object({
  id: t.String(),
  jobId: t.String(),
  name: t.String(),
  email: t.Optional(t.String()),
  source: t.String(),
  resumeUrl: t.Optional(t.String()),
  rawText: t.Optional(t.String()),
  structuredData: t.Optional(StructuredDataSchema),
  status: t.String(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});

export const ScreeningResultSchema = t.Object({
  id: t.String(),
  applicantId: t.String(),
  jobId: t.String(),
  overallScore: t.Number(),
  skillScore: t.Number(),
  experienceScore: t.Number(),
  educationScore: t.Number(),
  relevanceScore: t.Number(),
  strengths: t.Array(t.String()),
  gaps: t.Array(t.String()),
  aiRecommendation: t.String(),
  aiReasoning: t.Optional(t.String()),
  processedAt: t.Date(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});

export const ActivitySchema = t.Object({
  id: t.String(),
  title: t.String(),
  subtitle: t.String(),
  timestamp: t.String(),
  type: t.String(),
});

export const ProfileSchema = t.Object({
  userId: t.String(),
  companyName: t.Optional(t.String()),
  role: t.Optional(t.String()),
  defaultWeightSkills: t.Number(),
  defaultWeightExperience: t.Number(),
  defaultWeightEducation: t.Number(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});
```

## File: packages/auth/src/index.ts
```typescript
import { dbInstance } from "@repo/db";
import { getLocalIPs } from "@repo/utils/get-ip";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin } from "better-auth/plugins";

const isGoogleConfigured = !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);

if (!isGoogleConfigured) {
  console.warn(
    "[AUTH] Google OAuth is not fully configured. Some authentication features may be unavailable.",
  );
}

export const auth = betterAuth({
  database: mongodbAdapter(dbInstance as NonNullable<typeof dbInstance>),
  baseURL:
    process.env.BETTER_AUTH_URL ??
    process.env.NEXT_PUBLIC_APP_URL ??
    `http://localhost:${process.env.PORT || "3000"}`,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    ...(isGoogleConfigured
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          },
        }
      : {}),
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, token }) => {
      const baseURL =
        process.env.BETTER_AUTH_URL ??
        process.env.NEXT_PUBLIC_APP_URL ??
        `http://localhost:${process.env.PORT || "3000"}`;
      const url = `${baseURL}/verify-email?token=${token}&email=${encodeURIComponent(user.email)}`;

      console.log("--------------------------------------------");
      console.log(`[EMAIL] To: ${user.email}`);
      console.log("[EMAIL] Subject: Verify your email address");
      console.log(`[EMAIL] Content: \nClick ${url} to verify your email address.`);
      console.log("--------------------------------------------");
    },
  },
  trustedOrigins: [
    process.env.NEXT_PUBLIC_APP_URL ?? `http://localhost:${process.env.PORT || "3000"}`,
    process.env.EXPO_PUBLIC_APP_URL ?? "",
    "exp://",
    ...getLocalIPs().flatMap((ip) => [
      `http://${ip}:${process.env.PORT || "3000"}`,
      `http://${ip}:8081`,
    ]),
  ],
  advanced: {
    crossSubDomainCookies: {
      enabled: false,
    },
    defaultCookieAttributes: {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    },
  },
  plugins: [admin()],
});

export type Auth = typeof auth;
```

## File: packages/db/src/schema/auth.ts
```typescript
import { type Model, model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  role: string | null;
  banned: boolean | null;
  banReason: string | null;
  banExpires: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISession {
  expiresAt: Date;
  token: string;
  ipAddress?: string;
  userAgent?: string;
  userId: string;
  impersonatedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAccount {
  accountId: string;
  providerId: string;
  userId: string;
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
  accessTokenExpiresAt?: Date;
  refreshTokenExpiresAt?: Date;
  scope?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IVerification {
  identifier: string;
  value: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, default: false },
    image: { type: String },
    role: { type: String },
    banned: { type: Boolean, default: false },
    banReason: { type: String },
    banExpires: { type: Date },
  },
  { timestamps: true },
);

export const SessionSchema = new Schema<ISession>(
  {
    expiresAt: { type: Date, required: true },
    token: { type: String, required: true, unique: true },
    ipAddress: { type: String },
    userAgent: { type: String },
    userId: { type: String, required: true },
    impersonatedBy: { type: String },
  },
  { timestamps: true },
);

export const AccountSchema = new Schema<IAccount>(
  {
    accountId: { type: String, required: true },
    providerId: { type: String, required: true },
    userId: { type: String, required: true },
    accessToken: { type: String },
    refreshToken: { type: String },
    idToken: { type: String },
    accessTokenExpiresAt: { type: Date },
    refreshTokenExpiresAt: { type: Date },
    scope: { type: String },
    password: { type: String },
  },
  { timestamps: true },
);

export const VerificationSchema = new Schema<IVerification>(
  {
    identifier: { type: String, required: true },
    value: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const User: Model<IUser> = models.User || model<IUser>("User", UserSchema);
export const Session: Model<ISession> = models.Session || model<ISession>("Session", SessionSchema);
export const Account: Model<IAccount> = models.Account || model<IAccount>("Account", AccountSchema);
export const Verification: Model<IVerification> =
  models.Verification || model<IVerification>("Verification", VerificationSchema);

export const user = User;
export const session = Session;
export const account = Account;
export const verification = Verification;
```

## File: packages/validators/src/index.ts
```typescript
export * from "@repo/validators/applicant";
export * from "@repo/validators/auth";
export * from "@repo/validators/job";
export * from "@repo/validators/profile";
export * from "@repo/validators/settings";
```

## File: apps/web/src/app/(protected)/dashboard/page.tsx
```typescript
import { auth } from "@repo/auth";
import { headers } from "next/headers";
import { CommandCenter } from "@/features/dashboard";
import { api } from "@/lib/api";

/**
 * DashboardPage is a Server Component.
 * It now fetches real data from the Elysia backend via Eden Treaty.
 */
export default async function DashboardPage() {
  const h = await headers();
  const session = await auth.api.getSession({ headers: h });

  // Fetch real data from the API with session headers
  const { data: metrics } = await api.dashboard.metrics.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const { data: jobs } = await api.jobs.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const { data: activity } = await api.dashboard.activity.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const data = {
    metrics: metrics ?? {
      activeJobs: { value: 0, trend: 0, label: "Active Jobs" },
      pendingReviews: { value: 0, trend: 0, label: "Pending Reviews" },
      avgMatchScore: { value: 0, trend: 0, label: "Avg Match Score" },
      timeSaved: { value: "0h", trend: 0, label: "AI Time Saved Today" },
    },
    jobs: jobs ?? [],
    activity: activity ?? [],
    user: session?.user ?? { name: "Guest" },
  };

  return <CommandCenter data={data} />;
}
```

## File: apps/web/src/features/dashboard/components/IngestionHub.tsx
```typescript
"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/web/components/ui/card";
import { Checkbox } from "@repo/ui/web/components/ui/checkbox";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/web/components/ui/dialog";
import Dropzone from "@repo/ui/web/components/ui/dropzone";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/web/components/ui/tabs";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import {
  CheckCircle2,
  Clock,
  FileUp,
  Globe,
  Loader2,
  Search as SearchIcon,
  Trash2,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";
import { toast } from "sonner";
import { EmptyState } from "@/components/shared/EmptyState";
import type { api, ExtractData } from "@/lib/api";
import {
  useApplicants,
  useScreeningMutation,
  useUploadApplicantMutation,
} from "@/lib/queries/applicant";
import { useJob } from "@/lib/queries/job";

type ApplicantData =
  ExtractData<ReturnType<typeof api.applicants.job>["get"]> extends Array<infer T> ? T : never;

export const IngestionHub = ({ jobId }: { jobId: string }) => {
  const router = useRouter();
  const { data: job, isLoading: jobLoading } = useJob(jobId);
  const { data: applicants, isLoading: applicantsLoading } = useApplicants(jobId);
  const screeningMutation = useScreeningMutation();
  const uploadMutation = useUploadApplicantMutation();

  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ shallow: true }),
  );
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const toggleCandidate = (id: string) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const columns: ColumnDef<ApplicantData>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            const allIds = table.getRowModel().rows.map((r) => r.original.id);
            if (value) {
              setSelectedCandidates((prev) => Array.from(new Set([...prev, ...allIds])));
            } else {
              setSelectedCandidates((prev) => prev.filter((id) => !allIds.includes(id)));
            }
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={selectedCandidates.includes(row.original.id)}
          onCheckedChange={() => toggleCandidate(row.original.id)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Candidate",
      cell: ({ row }) => {
        const applicant = row.original;
        return (
          <div className="flex flex-col">
            <span className="font-medium text-sm">{applicant.name}</span>
            <span className="text-xs text-muted-foreground">
              {applicant.structuredData?.experience?.[0]?.duration || "N/A"}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "skills",
      header: "Role and skills",
      cell: ({ row }) => {
        const applicant = row.original;
        const skills = applicant.structuredData?.skills || [];
        return (
          <div className="flex flex-wrap gap-1">
            {skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-[10px] font-medium px-1.5 py-0">
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <span className="text-[10px] text-muted-foreground ml-1">
                +{skills.length - 3} more
              </span>
            )}
            {skills.length === 0 && (
              <span className="text-[10px] text-muted-foreground">No skills listed</span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge variant="secondary" className="capitalize">
          {row.original.status.replace("_", " ")}
        </Badge>
      ),
    },
    {
      accessorKey: "source",
      header: "Source",
      cell: ({ row }) => (
        <span className="text-muted-foreground text-sm">{row.original.source}</span>
      ),
    },
  ];

  const handleFileDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      toast.info("Uploading resumes", {
        description: `Uploading ${acceptedFiles.length} resume(s).`,
      });

      try {
        for (const file of acceptedFiles) {
          await uploadMutation.mutateAsync({
            jobId,
            file,
          });
        }
        toast.success("Resumes uploaded successfully");
      } catch (_error) {
        toast.error("Failed to upload resumes");
      }
    }
  };

  const handleRunPipeline = async () => {
    try {
      for (const id of selectedCandidates) {
        await screeningMutation.mutateAsync(id);
      }
      toast.success("Screening complete for all selected candidates");
      router.push(`/dashboard/jobs/${jobId}/shortlist`);
    } catch (_error) {
      toast.error("Screening failed");
    } finally {
      setShowConfirmModal(false);
    }
  };

  if (jobLoading || applicantsLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Ingestion hub</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              Job: <span className="text-foreground font-medium">{job?.title}</span>
            </span>
            <Badge variant="secondary" className="h-5 px-1.5 py-0 text-[10px] font-medium">
              {job?.department}
            </Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="network" className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <TabsList>
            <TabsTrigger value="network" className="gap-2 px-6">
              <Globe className="size-4" />
              Network Candidates
            </TabsTrigger>
            <TabsTrigger value="external" className="gap-2 px-6">
              <FileUp className="size-4" />
              External uploads
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="network" className="mt-0">
          {!applicants || applicants.length === 0 ? (
            <EmptyState
              icon={SearchIcon}
              title="No applicants yet"
              description="Upload resumes or wait for candidates to apply to see them here."
            />
          ) : (
            <DataTable
              columns={columns}
              data={applicants}
              pageCount={1}
              pagination={pagination}
              onPaginationChange={setPagination}
              searchKey="name"
              searchValue={search || ""}
              onSearchChange={setSearch}
            />
          )}
        </TabsContent>

        <TabsContent value="external" className="mt-0">
          <div className="flex flex-col gap-6">
            <Dropzone
              accept={{ "application/pdf": [".pdf"] }}
              multiple
              onDrop={handleFileDrop}
              dropZoneClassName="border-border bg-muted/20 hover:bg-muted/30 p-12 h-auto gap-4 flex-col transition-colors"
            >
              {(dropzone) => (
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center bg-primary/5 text-primary">
                    {dropzone.isDragAccept ? (
                      <Loader2 className="size-8 animate-spin" />
                    ) : (
                      <FileUp className="size-8" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">
                      {dropzone.isDragAccept ? "Release to upload" : "Upload candidate resumes"}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      Drag and drop PDF files from your system. Data is extracted and analyzed
                      automatically.
                    </p>
                  </div>
                  <Button type="button" variant="outline" disabled={uploadMutation.isPending}>
                    {uploadMutation.isPending ? "Uploading..." : "Browse files"}
                  </Button>
                </div>
              )}
            </Dropzone>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    Automatic extraction
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Resumes are parsed instantly using localized extraction protocols.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Zap className="size-4 text-primary" />
                    Batch processing
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Evaluate multiple applications simultaneously for efficient screening.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Trash2 className="size-4 text-muted-foreground" />
                    Data privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Process is secured via private endpoints. No data is stored or shared.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {selectedCandidates.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50">
          <div className="bg-primary border border-primary/20 p-3 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-primary-foreground pl-2">
              <div className="flex flex-col">
                <p className="text-sm font-semibold">
                  {selectedCandidates.length} candidates selected
                </p>
                <p className="text-[10px] opacity-80 uppercase tracking-wider">
                  Ready for screening
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-white/10"
                onClick={() => setSelectedCandidates([])}
                disabled={screeningMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => setShowConfirmModal(true)}
                disabled={screeningMutation.isPending}
              >
                Run screening
                <Zap className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Zap className="size-5 text-primary" />
              Candidate assessment
            </DialogTitle>
            <DialogDescription className="pt-2">
              Evaluate {selectedCandidates.length} candidates against defined job criteria.
              <br />
              <br />
              Screening will compare each profile against requirements for skills, experience, and
              education.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-muted p-4 border border-border flex gap-4 items-center">
            <Clock className="size-5 text-muted-foreground" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold">
                Processing time: ~{selectedCandidates.length * 3}s
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Evaluation powered by concurrent analysis.
              </p>
            </div>
          </div>
          <DialogFooter className="flex sm:justify-between py-2 items-center">
            <Button
              variant="ghost"
              onClick={() => setShowConfirmModal(false)}
              disabled={screeningMutation.isPending}
            >
              Back
            </Button>
            <Button onClick={handleRunPipeline} disabled={screeningMutation.isPending}>
              {screeningMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Start screening"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
```

## File: apps/web/src/features/dashboard/components/NewJobForm.tsx
```typescript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/web/components/ui/form";
import { Input } from "@repo/ui/web/components/ui/input";
import { Slider } from "@repo/ui/web/components/ui/slider";
import { Textarea } from "@repo/ui/web/components/ui/textarea";
import { type CreateJobInput, CreateJobSchema } from "@repo/validators/job";
import { Brain, Loader2, Plus, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import type { api, ExtractData } from "@/lib/api";
import { useCreateJobMutation, useUpdateJobMutation } from "@/lib/queries/job";

type JobData = ExtractData<ReturnType<typeof api.jobs>["get"]>;

interface NewJobFormProps {
  initialData?: JobData;
}

export const NewJobForm = ({ initialData }: NewJobFormProps) => {
  const [skillInput, setSkillInput] = useState("");
  const router = useRouter();
  const isEditMode = initialData !== undefined;

  const createMutation = useCreateJobMutation();
  const updateMutation = useUpdateJobMutation(initialData?.id ?? "");

  const isPending = createMutation.isPending || updateMutation.isPending;

  const form = useForm<CreateJobInput>({
    resolver: zodResolver(CreateJobSchema),
    defaultValues: {
      title: initialData?.title ?? "",
      department: initialData?.department ?? "",
      seniority: initialData?.seniority ?? "",
      description: initialData?.description ?? "",
      requiredSkills: initialData?.requiredSkills ?? [],
      weightSkills: initialData?.weightSkills ?? 50,
      weightExperience: initialData?.weightExperience ?? 30,
      weightEducation: initialData?.weightEducation ?? 20,
    },
  });

  const skills = form.watch("requiredSkills");
  const weightSkills = form.watch("weightSkills");
  const weightExperience = form.watch("weightExperience");
  const weightEducation = form.watch("weightEducation");

  const handleAddSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      form.setValue("requiredSkills", [...skills, trimmed], { shouldValidate: true });
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    form.setValue(
      "requiredSkills",
      skills.filter((s) => s !== skill),
      { shouldValidate: true },
    );
  };

  const handleWeightChange = (
    key: "weightSkills" | "weightExperience" | "weightEducation",
    value: number,
  ) => {
    const newValue = value;
    const weights = {
      weightSkills,
      weightExperience,
      weightEducation,
    };

    const otherKeys = (Object.keys(weights) as Array<keyof typeof weights>).filter(
      (k) => k !== key,
    );

    const remaining = 100 - newValue;
    const currentSumOther = otherKeys.reduce((acc, k) => acc + weights[k], 0);

    const newWeights = { ...weights };
    newWeights[key] = newValue;

    if (currentSumOther === 0) {
      const share = remaining / otherKeys.length;
      for (const k of otherKeys) newWeights[k] = share;
    } else {
      for (const k of otherKeys) {
        newWeights[k] = Math.round((weights[k] / currentSumOther) * remaining);
      }
    }

    const finalSum = Object.values(newWeights).reduce((a, b) => a + b, 0);
    if (finalSum !== 100 && otherKeys[0]) {
      newWeights[otherKeys[0]] += 100 - finalSum;
    }

    form.setValue("weightSkills", newWeights.weightSkills, { shouldValidate: true });
    form.setValue("weightExperience", newWeights.weightExperience, { shouldValidate: true });
    form.setValue("weightEducation", newWeights.weightEducation, { shouldValidate: true });
  };

  const onSubmit = async (data: CreateJobInput) => {
    if (isEditMode) {
      updateMutation.mutate(data, {
        onSuccess: () => {
          toast.success("Job updated successfully");
          router.push("/dashboard/jobs");
        },
        onError: () => {
          toast.error("Failed to update job. Please try again.");
        },
      });
    } else {
      createMutation.mutate(data, {
        onSuccess: () => {
          toast.success("Job created successfully");
          router.push("/dashboard/jobs");
        },
        onError: () => {
          toast.error("Failed to create job. Please try again.");
        },
      });
    }
  };

  return (
    <div className=" duration-500">
      <DashboardHeader
        title={isEditMode ? "Edit job" : "Create job"}
        subtitle={
          isEditMode
            ? "Update the requirements and screening parameters for this role."
            : "Define the requirements and screening parameters for your hiring pipeline."
        }
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Plus className="size-4" /> Role details
              </CardTitle>
              <CardDescription>Basic information about the position.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Job title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Frontend Engineer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Department</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Product" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seniority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Seniority</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Senior" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">Job description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide an overview of the role and responsibilities..."
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Sparkles className="size-4" /> Candidate requirements
              </CardTitle>
              <CardDescription>Specific skills and qualifications required.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="requiredSkills"
                render={() => (
                  <FormItem>
                    <FormLabel className="font-medium">Required skills</FormLabel>
                    <FormControl>
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                          <Input
                            className="flex-1"
                            placeholder="Add a skill (e.g. React, Python)"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                handleAddSkill(skillInput);
                              }
                            }}
                          />
                          <Button type="button" onClick={() => handleAddSkill(skillInput)}>
                            Add
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 min-h-[44px] p-4 border border-input bg-muted/20">
                          {skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="pl-3 pr-1 h-8 flex items-center gap-1"
                            >
                              <span className="font-medium">{skill}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                type="button"
                                onClick={() => removeSkill(skill)}
                                className="h-4 w-4 p-0"
                              >
                                <X className="size-3" />
                              </Button>
                            </Badge>
                          ))}
                          {skills.length === 0 && (
                            <p className="text-sm text-muted-foreground">No skills added yet.</p>
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Brain className="size-4" /> Assessment weights
              </CardTitle>
              <CardDescription>
                Define how the screening process should prioritize candidate traits.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-4">
              <div className="space-y-8">
                <FormField
                  control={form.control}
                  name="weightSkills"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-medium">Technical skills</FormLabel>
                        <span className="text-sm font-semibold text-primary">{field.value}%</span>
                      </div>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          onValueChange={([v]) => handleWeightChange("weightSkills", v ?? 0)}
                          max={100}
                          step={1}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weightExperience"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-medium">Work experience</FormLabel>
                        <span className="text-sm font-semibold text-primary">{field.value}%</span>
                      </div>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          onValueChange={([v]) => handleWeightChange("weightExperience", v ?? 0)}
                          max={100}
                          step={1}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weightEducation"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-medium">Education context</FormLabel>
                        <span className="text-sm font-semibold text-primary">{field.value}%</span>
                      </div>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          onValueChange={([v]) => handleWeightChange("weightEducation", v ?? 0)}
                          max={100}
                          step={1}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-end gap-3 pt-4 pb-20 border-t border-border">
            <Button variant="ghost" type="button" asChild disabled={isPending}>
              <Link href="/dashboard/jobs">Cancel</Link>
            </Button>
            <Button type="submit" className="min-w-[120px]" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  {isEditMode ? "Saving..." : "Creating..."}
                </>
              ) : isEditMode ? (
                "Save changes"
              ) : (
                "Create job"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
```

## File: packages/api/src/routers/index.ts
```typescript
import { activityRouter } from "@repo/api/routers/activity";
import { adminRouter } from "@repo/api/routers/admin";
import { applicantRouter } from "@repo/api/routers/applicant";
import { dashboardRouter } from "@repo/api/routers/dashboard";
import { jobRouter } from "@repo/api/routers/job";
import { profileRouter } from "@repo/api/routers/profile";
import { Elysia } from "elysia";

export const appRouter = new Elysia()
  .use(jobRouter)
  .use(applicantRouter)
  .use(activityRouter)
  .use(adminRouter)
  .use(profileRouter)
  .use(dashboardRouter);
```

## File: packages/db/src/schema/index.ts
```typescript
export * from "./activity";
export * from "./applicant";
export * from "./auth";
export * from "./job";
export * from "./profile";
export * from "./screening-result";
```

## File: apps/web/src/features/dashboard/components/AIShortlist.tsx
```typescript
"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { DataTable } from "@repo/ui/web/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  LayoutGrid,
  Loader2,
  Settings2,
  Zap,
} from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { toast } from "sonner";
import { EmptyState } from "@/components/shared/EmptyState";
import { api, type ExtractData } from "@/lib/api";
import { useJob } from "@/lib/queries/job";

type ShortlistData = ExtractData<ReturnType<typeof api.applicants.job>["shortlist"]["get"]>;
type CandidateData = ShortlistData extends Array<infer T> ? T : never;

const ScoreIndicator = ({ score }: { score: number }) => {
  const color =
    score >= 80 ? "text-emerald-600" : score >= 60 ? "text-amber-600" : "text-destructive";

  return (
    <div className={`flex items-center justify-center font-semibold text-sm ${color}`}>
      {score}%
    </div>
  );
};

const ExplainabilityRow = ({ candidate, jobId }: { candidate: CandidateData; jobId: string }) => {
  const radarData = [
    { subject: "Skills", A: candidate.skillScore, fullMark: 100 },
    { subject: "Experience", A: candidate.experienceScore, fullMark: 100 },
    { subject: "Education", A: candidate.educationScore, fullMark: 100 },
  ];

  return (
    <div className="bg-muted/10 border-t border-border p-6 grid md:grid-cols-2 gap-8 items-start  duration-300">
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-semibold flex items-center gap-2">
          <LayoutGrid className="size-4 text-muted-foreground" />
          Score breakdown
        </h4>
        <div className="h-64 w-full bg-background border border-border p-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
              />
              <Radar
                name={candidate.applicant.name}
                dataKey="A"
                stroke="var(--primary)"
                fill="var(--primary)"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 min-w-0">
        <div className="space-y-4 min-w-0">
          <div className="flex items-center gap-2 px-1">
            <CheckCircle2 className="size-3 text-emerald-600" />
            <h4 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Strengths
            </h4>
          </div>
          <div className="space-y-2">
            {candidate.strengths.map((s: string, i: number) => (
              <div
                key={`${candidate.id}-strength-${i}`}
                className="text-xs p-3 bg-emerald-500/5 border border-emerald-500/10 text-muted-foreground leading-relaxed"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 min-w-0">
          <div className="flex items-center gap-2 px-1">
            <AlertCircle className="size-3 text-amber-600" />
            <h4 className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Gaps</h4>
          </div>
          <div className="space-y-2">
            {candidate.gaps.map((g: string, i: number) => (
              <div
                key={`${candidate.id}-gap-${i}`}
                className="text-xs p-3 bg-amber-500/5 border border-amber-500/10 text-muted-foreground leading-relaxed"
              >
                {g}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 pt-4">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/dashboard/jobs/${jobId}/candidates/${candidate.applicantId}` as Route}>
              View candidate profile
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const AIShortlist = ({ jobId }: { jobId: string }) => {
  const { data: job, isLoading: jobLoading } = useJob(jobId);
  const { data: shortlist, isLoading: shortlistLoading } = useQuery({
    queryKey: ["shortlist", jobId],
    queryFn: async () => {
      const { data, error } = await api.applicants.job({ jobId }).shortlist.get();
      if (error) throw error;
      return data;
    },
  });

  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ shallow: true }),
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns: ColumnDef<CandidateData>[] = [
    {
      id: "rank",
      header: "Rank",
      cell: ({ row }) => (
        <div className="flex justify-center">
          <span
            className={`inline-flex h-7 w-7 items-center justify-center font-semibold text-xs 
              ${row.index < 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border"}`}
          >
            {row.index + 1}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "applicant.name",
      header: "Candidate",
      cell: ({ row }) => {
        const candidate = row.original;
        return (
          <div className="flex flex-col">
            <span className="font-medium text-sm">{candidate.applicant.name}</span>
            <span className="text-xs text-muted-foreground">{candidate.applicant.role}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "overallScore",
      header: () => <div className="text-center w-full">Match score</div>,
      cell: ({ row }) => (
        <div className="flex justify-center">
          <ScoreIndicator score={row.original.overallScore} />
        </div>
      ),
    },
    {
      accessorKey: "aiRecommendation",
      header: "Recommendation",
      cell: ({ row }) => {
        const candidate = row.original;
        const variants: Record<string, string> = {
          "Strong Yes": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
          Maybe: "bg-amber-500/10 text-amber-600 border-amber-500/20",
          No: "bg-destructive/10 text-destructive border-destructive/20",
        };
        return (
          <Badge
            className={variants[candidate.aiRecommendation] || "bg-muted text-muted-foreground"}
            variant="outline"
          >
            {candidate.aiRecommendation}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      header: () => <div className="text-right">Action</div>,
      cell: ({ row }) => (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className={expandedId === row.original.id ? "rotate-180" : ""}
            onClick={(e) => {
              e.stopPropagation();
              setExpandedId((prev) => (prev === row.original.id ? null : row.original.id));
            }}
          >
            <ChevronDown className="size-4" />
          </Button>
        </div>
      ),
    },
  ];

  const handleExport = () => {
    if (!shortlist) return;

    const headers = ["Rank", "Candidate", "Role", "Match Score", "Recommendation"];
    const rows = shortlist.map((c, i) => [
      i + 1,
      c.applicant.name,
      c.applicant.role,
      `${c.overallScore}%`,
      c.aiRecommendation,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      headers.join(",") +
      "\n" +
      rows.map((r) => r.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `shortlist_${jobId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Job export initiated", {
      description: "Shortlist data exported to CSV.",
    });
  };

  if (jobLoading || shortlistLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">AI shortlist</h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Candidates for {job?.title}</span>
            <Badge
              variant="outline"
              className="bg-emerald-500/5 text-emerald-600 border-emerald-500/20 py-0 h-5"
            >
              Screening complete
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/dashboard/jobs/${jobId}/edit` as Route}>
              <Settings2 className="mr-2 size-4" />
              Update criteria
            </Link>
          </Button>
          <Button size="sm" onClick={handleExport}>
            <Zap className="mr-2 size-4" />
            Export to HRIS
          </Button>
        </div>
      </div>

      {!shortlist || shortlist.length === 0 ? (
        <EmptyState
          icon={Zap}
          title="No candidates shortlisted yet"
          description="Candidates will appear here once they have been screened and processed through the pipeline."
          action={{
            label: "Go to Ingestion",
            href: `/dashboard/jobs/${jobId}/ingestion` as Route,
          }}
        />
      ) : (
        <div className="border border-border overflow-hidden bg-card">
          <DataTable
            columns={columns}
            data={shortlist || []}
            pageCount={1}
            pagination={pagination}
            onPaginationChange={setPagination}
            searchKey="name"
            searchValue={search || ""}
            onSearchChange={setSearch}
          />
          {expandedId &&
            (() => {
              const candidate = shortlist?.find((c) => c.id === expandedId);
              return candidate ? (
                <div className="border-t border-border">
                  <ExplainabilityRow candidate={candidate} jobId={jobId} />
                </div>
              ) : null;
            })()}
        </div>
      )}

      <p className="text-center text-[10px] text-muted-foreground py-4 uppercase tracking-widest">
        Showing top {shortlist?.length || 0} results from {job?.applicantCount || 0} analyzed
        candidates
      </p>
    </div>
  );
};
```

## File: apps/web/src/features/dashboard/components/CommandCenter.tsx
```typescript
"use client";

import { Button } from "@repo/ui/web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/web/components/ui/card";
import { Briefcase, Clock, Plus, Users, Zap } from "lucide-react";
import Link from "next/link";
import type { api, ExtractData } from "@/lib/api";
import DashboardHeader from "./DashboardHeader";
import { JobsTable } from "./jobs-table";

type StatsData = ExtractData<typeof api.dashboard.metrics.get>;
type ActivityData = ExtractData<typeof api.dashboard.activity.get>;

export const CommandCenter = ({
  data,
}: {
  data: {
    metrics: StatsData;
    activity: ActivityData;
    user: { name: string };
  };
}) => {
  const { metrics, activity, user } = data;

  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader
        title={`Welcome, ${user.name}`}
        subtitle="Overview of your current hiring pipelines and pending actions."
      >
        <Button asChild>
          <Link href="/dashboard/jobs/new">
            <Plus className="mr-2 size-4" />
            Create job
          </Link>
        </Button>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics &&
          Object.entries(
            metrics as Record<string, { label: string; value: string | number; trend: number }>,
          ).map(([key, metric]) => (
            <Card key={key} className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">
                  {metric.label}
                </CardTitle>
                {key === "activeJobs" && <Briefcase className="size-4 text-muted-foreground" />}
                {key === "pendingReviews" && <Users className="size-4 text-muted-foreground" />}
                {key === "avgMatchScore" && <Zap className="size-4 text-muted-foreground" />}
                {key === "timeSaved" && <Clock className="size-4 text-muted-foreground" />}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">{metric.value}</div>
                <div className="mt-1 flex items-center text-xs">
                  <span className={metric.trend >= 0 ? "text-emerald-600" : "text-destructive"}>
                    {metric.trend > 0 ? "+" : ""}
                    {metric.trend}%
                  </span>
                  <span className="ml-1 text-muted-foreground">since yesterday</span>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Active pipelines</h2>
            <p className="text-sm text-muted-foreground">
              Manage your jobs and review screening results.
            </p>
          </div>
          <JobsTable />
        </div>

        <Card className="border-border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-base font-semibold">Recent activity</CardTitle>
            <CardDescription className="text-xs">
              Latest screening and pipeline updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activity.length === 0 ? (
              <div className="py-8 text-center text-xs text-muted-foreground">
                No recent activity
              </div>
            ) : (
              <div className="relative space-y-6 pl-4">
                {/* Vertical line through all activities */}
                <div className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-border" />

                {activity.map((item) => (
                  <div key={item.id} className="relative flex gap-4">
                    {/* Timeline dot container for perfect centering */}
                    <div className="relative flex items-center justify-center w-3 h-5 shrink-0 z-10">
                      <div
                        className={`h-3 w-3 rounded-full ring-4 ring-background ${
                          item.type === "ai"
                            ? "bg-blue-500"
                            : item.type === "candidate"
                              ? "bg-emerald-500"
                              : item.type === "user"
                                ? "bg-amber-500"
                                : "bg-muted"
                        }`}
                      />
                    </div>

                    <div className="flex flex-col gap-1 pr-2">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-semibold text-sm text-foreground leading-none">
                          {item.title}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                        {item.subtitle}
                      </p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-0.5">
                        {item.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="w-full mt-6 text-xs text-muted-foreground hover:bg-muted/50 font-medium"
            >
              <Link href="/dashboard/history">View full history</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
```

## File: apps/web/src/features/dashboard/components/DashboardSidebar.tsx
```typescript
"use client";

import { authClient } from "@repo/auth/client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@repo/ui/web/components/ui/sidebar";
import { Briefcase, LayoutDashboard, PlusCircle, Settings, User, Zap } from "lucide-react";
import { NavMain, NavUser } from "@/components/shared/SidebarComponents";
import SiteLogo from "@/components/shared/SiteLogo";

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    url: "/dashboard/jobs",
    icon: Briefcase,
  },
  {
    title: "New Job",
    url: "/dashboard/jobs/new",
    icon: PlusCircle,
  },
  {
    title: "History",
    url: "/dashboard/history",
    icon: Zap,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export const DashboardSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { data: session, isPending } = authClient.useSession();
  const { state } = useSidebar();

  const user = session?.user
    ? {
        name: session.user.name,
        email: session.user.email,
        avatar: session.user.image ?? "",
      }
    : null;

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-6 py-6 transition-all duration-200 group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:justify-center h-20">
          <SiteLogo
            className={`w-auto object-contain shrink-0 transition-all duration-200 ${isCollapsed ? "h-10" : "h-12"}`}
          />
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-semibold text-lg tracking-tight leading-none text-white">
              Lensly
            </span>
            <span className="text-xs text-white/70 mt-0.5">AI Hiring Platform</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        {isPending ? (
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="h-8 w-8 animate-pulse bg-sidebar-accent" />
            <div className="flex-1 space-y-1">
              <div className="h-3 w-20 animate-pulse rounded bg-sidebar-accent" />
              <div className="h-2 w-24 animate-pulse rounded bg-sidebar-accent" />
            </div>
          </div>
        ) : (
          user && <NavUser user={user} showReturnToTasks />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
```

## File: apps/web/src/features/dashboard/components/CandidateDeepDive.tsx
```typescript
"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card } from "@repo/ui/web/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  FileText,
  Loader2,
  Mail,
  MapPin,
  TrendingUp,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { api, type ExtractData } from "@/lib/api";
import { useApplicants, useUpdateApplicantStatusMutation } from "@/lib/queries/applicant";

type DeepDiveData = NonNullable<ExtractData<ReturnType<typeof api.applicants>["deep-dive"]["get"]>>;

export const CandidateDeepDive = ({
  jobId,
  candidateId,
}: {
  jobId: string;
  candidateId: string;
}) => {
  const router = useRouter();
  const { data, isLoading } = useQuery<DeepDiveData>({
    queryKey: ["candidate-deep-dive", candidateId],
    queryFn: async () => {
      const { data, error } = await api.applicants({ id: candidateId })["deep-dive"].get();
      if (error) throw error;
      return data;
    },
  });

  const statusMutation = useUpdateApplicantStatusMutation(candidateId);
  const { data: applicants } = useApplicants(jobId);

  const handleDecision = async (decision: "approve" | "reject") => {
    const status = decision === "approve" ? "Interviewing" : "Rejected";

    try {
      await statusMutation.mutateAsync({ status });
      toast.success(`Candidate ${decision === "approve" ? "shortlisted" : "rejected"}`);

      const currentIndex = applicants?.findIndex((a) => a.id === candidateId) ?? -1;
      const nextCandidate = applicants && currentIndex !== -1 ? applicants[currentIndex + 1] : null;

      if (nextCandidate) {
        router.push(`/dashboard/jobs/${jobId}/candidates/${nextCandidate.id}`);
      } else {
        router.push(`/dashboard/jobs/${jobId}/shortlist`);
      }
    } catch (_error) {
      toast.error("Update failed");
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!data) return <div>Candidate not found</div>;

  const screening = data.screening;
  const structured = data.structuredData;

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-[64px] flex flex-col bg-background overflow-hidden"
      data-candidate-id={candidateId}
      data-job-id={jobId}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0 bg-card">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
            <Link href={`/dashboard/jobs/${jobId}/shortlist`}>
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-none">{data.name}</h2>
            <p className="text-xs text-muted-foreground mt-1">
              {structured?.experience?.[0]?.role || "N/A"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane: Assessment rationale */}
        <div className="flex-1 flex flex-col border-r border-border overflow-y-auto bg-muted/5">
          <div className="p-10 space-y-8 max-w-2xl mx-auto w-full">
            {screening ? (
              <>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="font-semibold">
                      <Brain className="size-3 mr-2" />
                      Screening match
                    </Badge>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-primary">
                        {screening.overallScore}%
                      </span>
                      <span className="text-xs text-muted-foreground font-medium uppercase">
                        Match rate
                      </span>
                    </div>
                  </div>

                  <div
                    className={`p-4 border flex items-center justify-between ${
                      screening.aiRecommendation === "Strong Yes"
                        ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-600"
                        : "bg-amber-500/5 border-amber-500/20 text-amber-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="size-5" />
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider opacity-80">
                          Recommendation
                        </p>
                        <p className="text-lg font-bold">{screening.aiRecommendation}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <FileText className="size-4 text-muted-foreground" />
                    Assessment rationale
                  </h3>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                    {screening.aiReasoning?.split("\n\n").map((paragraph, i) => (
                      <p key={`${paragraph.slice(0, 10)}-${i}`} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="p-12 text-center border-2 border-dashed rounded-lg">
                <Brain className="size-12 mx-auto text-muted-foreground opacity-20 mb-4" />
                <p className="text-muted-foreground">
                  Screening not yet performed for this candidate.
                </p>
              </div>
            )}
          </div>

          <div className="mt-auto p-6 border-t border-border bg-card">
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 h-10 border-destructive/20 text-destructive hover:bg-destructive/10"
                onClick={() => handleDecision("reject")}
                loading={statusMutation.isPending}
              >
                <XCircle className="size-4 mr-2" />
                Reject candidate
              </Button>
              <Button
                className="flex-2 h-10 bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => handleDecision("approve")}
                loading={statusMutation.isPending}
              >
                <CheckCircle2 className="size-4 mr-2" />
                Move to Interview
              </Button>
            </div>
          </div>
        </div>

        {/* Right Pane: Source document */}
        <div className="flex-1 bg-muted/20 overflow-y-auto flex flex-col relative">
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-card/80 backdrop-blur-sm border-b border-border">
            <div className="flex items-center gap-2">
              <FileText className="size-4 text-muted-foreground" />
              <span className="text-xs font-medium">Original profile: {data.name}</span>
            </div>
          </div>

          <div className="p-12 max-w-3xl mx-auto w-full">
            <Card className="border border-border bg-card p-12 space-y-10">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h1 className="text-3xl font-bold text-foreground">{data.name}</h1>
                  <p className="text-base font-medium text-emerald-600">
                    {structured?.skills?.slice(0, 3).join(" • ") || "N/A"}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
                    <MapPin className="size-3" /> {structured?.location || "Remote"}
                  </div>
                  <div className="flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
                    <Mail className="size-3" /> {data.email}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Technical skillset
                </h3>
                <div className="flex flex-wrap gap-2">
                  {structured?.skills?.map((skill: string) => (
                    <Badge key={`skill-${skill}`} variant="outline" className="font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Work experience
                </h3>
                <div className="space-y-8">
                  {structured?.experience?.map((exp, i) => (
                    <div key={`${exp.company}-${exp.role}-${i}`} className="relative pl-6">
                      <div className="absolute left-0 top-1.5 size-2 bg-border" />
                      <div className="absolute left-[3.5px] top-4 h-[calc(100%-8px)] w-px bg-border/50" />

                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-semibold text-foreground">
                          {exp.role} @ {exp.company || "N/A"}
                        </h4>
                        <span className="text-[10px] font-medium text-muted-foreground">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
```
