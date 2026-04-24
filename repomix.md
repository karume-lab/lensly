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
- Only files matching these patterns are included: apps/web/**/*, packages/api/**/*, packages/db/**/*, packages/validators/**/*, packages/auth/**/*, packages/ui/src/web/**/*, packages/types/**/*, packages/utils/**/*, packages/ui/components.json, docker-compose.yml
- Files matching these patterns are excluded: apps/mobile/**/*, packages/ui/src/mobile/**/*, packages/assets/**/*, tmp/**/*, **/*.png, **/*.svg, **/*.ico
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
        actions/
          job.ts
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
      components/
        providers/
          QueryProvider.tsx
          ThemeProvider.tsx
        shared/
          DynamicBreadcrumbs.tsx
          EmptyState.tsx
          NotFoundClient.tsx
          SEOConfig.tsx
          SidebarComponents.tsx
          SiteLogo.tsx
          ThemeSwitch.tsx
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
        hooks/
          use-admin-users.ts
        queries/
          admin.ts
          applicant.ts
          job.ts
        api.ts
        og.tsx
      proxy.ts
    .env.example
    .gitignore
    next.config.ts
    package.json
    postcss.config.mjs
    tsconfig.json
packages/
  api/
    src/
      routers/
        activity.ts
        admin.ts
        applicant.ts
        index.ts
        job.ts
        types.ts
      client.ts
      server.ts
    package.json
    tsconfig.json
  auth/
    src/
      client.ts
      index.ts
    .env.example
    package.json
    tsconfig.json
  db/
    src/
      mock-data/
        users.json
      schema/
        activity.ts
        applicant.ts
        auth.ts
        index.ts
        job.ts
        profile.ts
        screening-result.ts
      client.ts
      index.ts
      seed.ts
      types.ts
    drizzle.config.ts
    package.json
    tsconfig.json
  types/
    src/
      auth.ts
      db.ts
      history.ts
      index.ts
    package.json
    tsconfig.json
  ui/
    src/
      web/
        components/
          ui/
            accordion.tsx
            alert-dialog.tsx
            alert.tsx
            avatar.tsx
            badge.tsx
            breadcrumb.tsx
            button.tsx
            calendar.tsx
            card.tsx
            carousel.tsx
            checkbox.tsx
            collapsible.tsx
            data-table.tsx
            dialog.tsx
            dropdown-menu.tsx
            dropzone.tsx
            field.tsx
            form.tsx
            input-otp.tsx
            input.tsx
            kbd.tsx
            label.tsx
            menubar.tsx
            navigation-menu.tsx
            pagination.tsx
            password-input.tsx
            popover.tsx
            progress.tsx
            scroll-area.tsx
            select.tsx
            separator.tsx
            sheet.tsx
            sidebar.tsx
            skeleton.tsx
            slider.tsx
            sonner.tsx
            spinner.tsx
            switch.tsx
            table.tsx
            tabs.tsx
            textarea.tsx
            tooltip.tsx
        hooks/
          use-mobile.tsx
        lib/
          utils.ts
        components.json
        globals.css
        index.ts
        package.json
        tsconfig.json
  utils/
    src/
      get-ip.ts
      index.ts
      query-keys.ts
    package.json
    tsconfig.json
  validators/
    src/
      applicant.ts
      auth.ts
      index.ts
      job.ts
      profile.ts
      settings.ts
    package.json
    tsconfig.json
docker-compose.yml
```

# Files

## File: apps/web/src/components/shared/EmptyState.tsx
```typescript
import { Button } from "@repo/ui/web/components/ui/button";
import type { LucideIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center animate-in fade-in zoom-in duration-300">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <Icon className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mb-4 mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action &&
        (action.href ? (
          <Button asChild>
            <Link href={action.href as Route}>{action.label}</Link>
          </Button>
        ) : (
          <Button onClick={action.onClick}>{action.label}</Button>
        ))}
    </div>
  );
}
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
    mutationFn: async (body: any) => {
      const { data, error } = await api.applicants["upload-metadata"].post(body);
      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["applicants", variables.jobId] });
    },
  });
};
```

## File: apps/web/src/lib/queries/job.ts
```typescript
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
```

## File: packages/api/src/routers/activity.ts
```typescript
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";

export const activityRouter = new Elysia({ prefix: "/activities" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get("/", async ({ user }) => {
    const activities = await schema.Activity.find({ userId: user.id })
      .sort({ createdAt: -1 })
      .limit(10);
    return activities.map((a) => ({
      id: a._id.toString(),
      title: a.action,
      subtitle: `${a.entityType}: ${a.entityId}`,
      timestamp: a.createdAt.toLocaleString(),
      type: "user",
    }));
  })
  .post(
    "/",
    async ({ body, user }) => {
      const activity = new schema.Activity({ ...body, userId: user.id });
      await activity.save();
      return activity;
    },
    {
      body: t.Object({
        action: t.String(),
        entityId: t.String(),
        entityType: t.String(),
        metadata: t.Optional(t.Any()),
      }),
    },
  );
```

## File: packages/api/src/routers/applicant.ts
```typescript
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";

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
      return await schema.Applicant.find({ jobId }).sort({ createdAt: -1 });
    },
    {
      params: t.Object({ jobId: t.String() }),
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
            ...r.toObject(),
            id: r._id.toString(),
            applicant: {
              name: applicant?.name || "Unknown",
              role: (applicant?.structuredData as any)?.experience?.[0]?.role || "N/A",
            },
          };
        }),
      );
      return populated;
    },
    {
      params: t.Object({ jobId: t.String() }),
    },
  )
  .get(
    "/:id",
    async ({ params: { id } }) => {
      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });
      return applicant;
    },
    {
      params: t.Object({ id: t.String() }),
    },
  )
  .get(
    "/:id/deep-dive",
    async ({ params: { id } }) => {
      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });
      const screening = await schema.ScreeningResult.findOne({ applicantId: id });
      return {
        ...applicant.toObject(),
        id: applicant._id.toString(),
        screening: screening
          ? {
              ...screening.toObject(),
              id: screening._id.toString(),
            }
          : null,
      };
    },
    {
      params: t.Object({ id: t.String() }),
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
      return applicant;
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({ status: t.String() }),
    },
  )
  .post(
    "/upload-metadata",
    async ({ body }) => {
      const applicant = new schema.Applicant(body);
      await applicant.save();
      return applicant;
    },
    {
      body: t.Object({
        jobId: t.String(),
        name: t.String(),
        email: t.Optional(t.String()),
        source: t.String(),
        resumeUrl: t.Optional(t.String()),
        rawText: t.Optional(t.String()),
        structuredData: t.Optional(t.Any()),
      }),
    },
  )
  .post(
    "/:id/screen",
    async ({ params: { id } }) => {
      // Stubbed screening endpoint: wait 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const applicant = await schema.Applicant.findById(id);
      if (!applicant) throw new Response("Applicant not found", { status: 404 });

      // Create a fake screening result
      const screeningResult = new schema.ScreeningResult({
        applicantId: applicant._id,
        jobId: applicant.jobId,
        overallScore: 85,
        skillScore: 90,
        experienceScore: 80,
        educationScore: 75,
        relevanceScore: 95,
        strengths: ["Strong technical background", "Relevant experience"],
        gaps: ["Needs more leadership experience"],
        aiRecommendation: "Strong Yes",
      });
      await screeningResult.save();

      // Update applicant status
      applicant.status = "Shortlisted";
      await applicant.save();

      return { success: true, result: screeningResult };
    },
    {
      params: t.Object({ id: t.String() }),
    },
  )
  .get(
    "/:id/screening-result",
    async ({ params: { id } }) => {
      const result = await schema.ScreeningResult.findOne({ applicantId: id });
      if (!result) throw new Response("Screening result not found", { status: 404 });
      return result;
    },
    {
      params: t.Object({ id: t.String() }),
    },
  );
```

## File: packages/api/src/routers/job.ts
```typescript
import { auth } from "@repo/auth";
import { schema } from "@repo/db";
import { Elysia, t } from "elysia";

export const jobRouter = new Elysia({ prefix: "/jobs" })
  .derive(async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session?.user) {
      throw new Response("Unauthorized", { status: 401 });
    }
    return { user: session.user };
  })
  .get("/", async ({ user }) => {
    const jobs = await schema.Job.find({ userId: user.id }).sort({ createdAt: -1 });
    const jobsWithCounts = await Promise.all(
      jobs.map(async (job) => {
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
      }),
    );
    return jobsWithCounts;
  })
  .get("/history", async ({ user }) => {
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
          date: job.updatedAt.toISOString().split("T")[0],
          candidates,
          shortlisted,
          avgScore,
          timeSaved: `${(candidates * 0.5).toFixed(1)}h`,
        };
      }),
    );
    return history;
  })
  .get("/stats", async ({ user }) => {
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
  })
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
    },
  )
  .post(
    "/",
    async ({ body, user }) => {
      const job = new schema.Job({ ...body, userId: user.id });
      await job.save();
      return {
        ...job.toObject(),
        id: job._id.toString(),
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
        ...job.toObject(),
        id: job._id.toString(),
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
    },
  );
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

## File: apps/web/src/app/(protected)/dashboard/history/page.tsx
```typescript
import { HistoryClient } from "@/features/history";

export const metadata = {
  title: "Screening History | Lensly",
  description: "Review and export data from your past autonomous hiring cycles.",
};

export default function HistoryPage() {
  return <HistoryClient />;
}
```

## File: apps/web/src/app/(protected)/dashboard/jobs/[jobId]/applicants/ingestion/page.tsx
```typescript
import { JobIngestionClient } from "@/features/dashboard/components/JobIngestionClient";

export default async function JobIngestionPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  return <JobIngestionClient jobId={jobId} />;
}
```

## File: apps/web/src/app/(protected)/dashboard/jobs/[jobId]/applicants/page.tsx
```typescript
import { IngestionHub } from "@/features/dashboard";

const IngestionHubPage = ({ params }: { params: { jobId: string } }) => {
  return <IngestionHub jobId={params.jobId} />;
};

export default IngestionHubPage;
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

## File: apps/web/src/app/(protected)/dashboard/jobs/[jobId]/shortlist/page.tsx
```typescript
import { AIShortlist } from "@/features/dashboard";

export default async function ShortlistPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  return <AIShortlist jobId={jobId} />;
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

  return <JobOverviewClient initialData={job as any} />;
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

## File: apps/web/src/app/(protected)/dashboard/jobs/page.tsx
```typescript
import { JobsListClient } from "@/features/dashboard/components/JobsListClient";

const JobsPage = () => {
  return <JobsListClient />;
};

export default JobsPage;
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

## File: apps/web/src/app/(public)/docs/api/reference/route.ts
```typescript
import { ApiReference } from "@scalar/nextjs-api-reference";

const config = {
  url: "/api/openapi.json/json",
};

export const GET = ApiReference(config);
```

## File: apps/web/src/app/actions/job.ts
```typescript
"use server";

import type { CreateJobInput } from "@repo/validators/job";
import { redirect } from "next/navigation";

/**
 * Server Action to handle job creation.
 * In a real app, this would use Drizzle:
 *
 * await db.insert(jobs).values({ ...data, userId: session.user.id });
 */
export async function createJobAction(data: CreateJobInput) {
  console.log("Creating Job in Database:", data);

  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Redirect to the applicants ingestion hub as per specification
  // In a real app, we'd use the returned job.id
  redirect("/dashboard/jobs/job_01/applicants");
}
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

## File: apps/web/src/components/providers/QueryProvider.tsx
```typescript
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 60 * 1000 } },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
```

## File: apps/web/src/components/providers/ThemeProvider.tsx
```typescript
"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
```

## File: apps/web/src/components/shared/DynamicBreadcrumbs.tsx
```typescript
"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/web/components/ui/breadcrumb";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import React from "react";

export function DynamicBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

          if (segment === "(protected)") return null;

          return (
            <React.Fragment key={href}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="font-bold text-foreground capitalize">
                    {title}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={href as Route}
                    className="capitalize transition-colors hover:text-foreground"
                  >
                    {title}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

## File: apps/web/src/components/shared/NotFoundClient.tsx
```typescript
"use client";

import NotFoundIllustration from "@repo/assets/not-found.svg";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card, CardContent } from "@repo/ui/web/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const NotFoundClient = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-xl border-border">
        <CardContent className="flex flex-col items-center gap-6 pt-6 sm:p-8 sm:pt-10">
          <Image
            alt="Not found illustration"
            src={NotFoundIllustration}
            width={240}
            height={240}
            className="object-contain sm:w-[300px] sm:h-[300px]"
            priority
          />
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              404 - Page Not Found
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base px-2">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <Button onClick={() => router.back()} variant="outline" className="mt-2 w-full sm:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
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

  const filteredJobs = jobs.filter((job: any) => {
    const matchesSearch =
      job.title.toLowerCase().includes(queryState.search.toLowerCase()) ||
      job.department.toLowerCase().includes(queryState.search.toLowerCase());
    const matchesStatus = queryState.status === "all" || job.status === queryState.status;
    const matchesDept = queryState.department === "all" || job.department === queryState.department;
    return matchesSearch && matchesStatus && matchesDept;
  });

  const departments = Array.from(new Set(jobs.map((j: any) => j.department)));
  const statuses = Array.from(new Set(jobs.map((j: any) => j.status)));

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
          options: statuses.map((s: any) => ({ label: s, value: s })),
        },
        {
          name: "Department",
          value: queryState.department,
          onValueChange: (department) => setQueryState({ department, page: 1 }),
          options: departments.map((d: any) => ({ label: d, value: d })),
        },
      ]}
    />
  );
};

export default JobsTable;
```

## File: apps/web/src/features/dashboard/index.ts
```typescript
export { AIShortlist } from "@/features/dashboard/components/AIShortlist";
export { CandidateDeepDive } from "@/features/dashboard/components/CandidateDeepDive";
export { CommandCenter } from "@/features/dashboard/components/CommandCenter";
export { IngestionHub } from "@/features/dashboard/components/IngestionHub";
export { NewJobForm } from "@/features/dashboard/components/NewJobForm";
```

## File: apps/web/src/features/history/components/history-table/columns.tsx
```typescript
"use client";

import type { HistoryItem } from "@repo/types";
import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { Calendar, Download } from "lucide-react";

export const columns: ColumnDef<HistoryItem>[] = [
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

  const filteredHistory = history.filter((item: any) => {
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

## File: apps/web/src/lib/hooks/use-admin-users.ts
```typescript
import { QUERY_KEYS } from "@repo/utils/query-keys";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  adminUserQuery,
  adminUsersQuery,
  createUserMutation,
  deleteUserMutation,
  updateUserRoleMutation,
} from "@/lib/queries/admin";

export const useAdminUsers = (page: number, limit: number, search?: string) => {
  return useQuery(adminUsersQuery(page, limit, search));
};

export const useAdminUser = (id: string) => {
  return useQuery(adminUserQuery(id));
};

export const useCreateUser = () => {
  const qc = useQueryClient();
  return useMutation({
    ...createUserMutation(),
    onSuccess: () => {
      toast.success("User successfully created and registered");
      qc.invalidateQueries({ queryKey: QUERY_KEYS.admin.users.all() });
    },
    onError: (err: unknown) => {
      const error = err as Error;
      toast.error(error.message || "Failed to create user record");
    },
  });
};

export const useUpdateUserRole = () => {
  const qc = useQueryClient();
  return useMutation({
    ...updateUserRoleMutation(),
    onSuccess: (_, vars) => {
      toast.success("User role updated successfully");
      qc.invalidateQueries({ queryKey: QUERY_KEYS.admin.users.detail(vars.id) });
      qc.invalidateQueries({ queryKey: QUERY_KEYS.admin.users.all() });
    },
    onError: (err: unknown) => {
      const error = err as Error;
      toast.error(error.message || "Failed to edit user");
    },
  });
};

export const useDeleteUser = () => {
  const qc = useQueryClient();
  return useMutation({
    ...deleteUserMutation(),
    onSuccess: () => {
      toast.success("User deleted successfully");
      qc.invalidateQueries({ queryKey: QUERY_KEYS.admin.users.all() });
    },
    onError: (err: unknown) => {
      const error = err as Error;
      toast.error(error.message || "An error occurred");
    },
  });
};
```

## File: apps/web/src/lib/api.ts
```typescript
import { createClient } from "@repo/api/client";
import { getBaseUrl } from "@repo/utils";

const client = createClient(getBaseUrl());

export const api = client.api;
```

## File: apps/web/src/proxy.ts
```typescript
import { auth } from "@repo/auth";
import { type NextRequest, NextResponse } from "next/server";

const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const isDashboard = pathname.startsWith("/dashboard");
  const isAuthPage = pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");
  const isRoot = pathname === "/";
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (!session && isDashboard) {
    const callbackUrl = encodeURIComponent(request.nextUrl.pathname + request.nextUrl.search);
    return NextResponse.redirect(new URL(`/sign-in?callbackUrl=${callbackUrl}`, request.url));
  }

  if (session && (isAuthPage || isRoot || isDashboard)) {
    if (session.user.role === "admin" && !isAdmin) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    if (!isDashboard) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
};

export default proxy;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

## File: apps/web/.gitignore
```
*.txt
```

## File: apps/web/postcss.config.mjs
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## File: packages/api/src/client.ts
```typescript
import { treaty } from "@elysiajs/eden";
import type { App } from "@repo/api/server";

export type { App };
export const createClient = (baseUrl: string) => treaty<App>(baseUrl);
```

## File: packages/api/package.json
```json
{
  "name": "@repo/api",
  "private": true,
  "main": "src/index.ts",
  "module": "src/index.ts",
  "exports": {
    ".": "./src/server.ts",
    "./client": "./src/client.ts"
  },
  "scripts": {
    "lint": "biome check .",
    "clean": "biome check --write --no-errors-on-unmatched .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@elysiajs/cors": "^1.4.1",
    "@elysiajs/swagger": "^1.3.1",
    "@repo/auth": "workspace:*",
    "@repo/db": "workspace:*",
    "@repo/types": "workspace:*",
    "@repo/validators": "workspace:*",
    "drizzle-orm": "0.45.1",
    "elysia": "1.4.27"
  }
}
```

## File: packages/api/tsconfig.json
```json
{
  "extends": ["../../tsconfig.json", "../../tsconfig.paths.json"],
  "compilerOptions": {
    "baseUrl": "../.."
  },
  "include": ["src"]
}
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

## File: packages/auth/tsconfig.json
```json
{
  "extends": ["../../tsconfig.json", "../../tsconfig.paths.json"],
  "compilerOptions": {
    "baseUrl": "../.."
  },
  "include": ["src"]
}
```

## File: packages/db/src/mock-data/users.json
```json
[
  {
    "id": "76953f93-1811-4999-9e8c-572242133e38",
    "name": "Admin User",
    "email": "admin@mail.com",
    "emailVerified": true,
    "image": "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
    "role": "admin",
    "banned": false,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "password": "#Default123"
  },
  {
    "id": "96fd54e2-a0b4-47fd-864c-f72439c2789f",
    "name": "Jane Doe",
    "email": "jane@mail.com",
    "emailVerified": true,
    "image": "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    "role": "user",
    "banned": false,
    "createdAt": "2024-02-01T00:00:00.000Z",
    "updatedAt": "2024-02-01T00:00:00.000Z",
    "password": "#Default123"
  },
  {
    "id": "c1f7b8a9-4567-4a12-8901-23456789abcd",
    "name": "John Smith",
    "email": "john@smith.com",
    "emailVerified": false,
    "image": "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    "role": "user",
    "banned": true,
    "createdAt": "2024-02-15T00:00:00.000Z",
    "updatedAt": "2024-02-20T00:00:00.000Z",
    "password": "#Default123"
  }
]
```

## File: packages/db/src/schema/activity.ts
```typescript
import mongoose, { Schema } from "mongoose";

export const ActivitySchema = new Schema(
  {
    userId: { type: String, required: true },
    action: { type: String, required: true },
    entityId: { type: String, required: true },
    entityType: { type: String, required: true },
    metadata: { type: Schema.Types.Mixed },
  },
  { timestamps: true },
);

export const Activity = mongoose.models.Activity || mongoose.model("Activity", ActivitySchema);
export const activity = Activity;
```

## File: packages/db/src/schema/applicant.ts
```typescript
import mongoose, { Schema } from "mongoose";

export const ApplicantSchema = new Schema(
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
    },
    status: { type: String, required: true, default: "Pending_Screening" },
  },
  { timestamps: true },
);

export const Applicant = mongoose.models.Applicant || mongoose.model("Applicant", ApplicantSchema);
export const applicant = Applicant;
```

## File: packages/db/src/schema/job.ts
```typescript
import mongoose, { Schema } from "mongoose";

export const JobSchema = new Schema(
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

export const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);
export const job = Job;
```

## File: packages/db/src/schema/profile.ts
```typescript
import mongoose, { Schema } from "mongoose";

export const ProfileSchema = new Schema(
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

export const Profile = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
export const profile = Profile;
```

## File: packages/db/src/schema/screening-result.ts
```typescript
import mongoose, { Schema } from "mongoose";

export const ScreeningResultSchema = new Schema(
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
    processedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const ScreeningResult =
  mongoose.models.ScreeningResult || mongoose.model("ScreeningResult", ScreeningResultSchema);
export const screeningResult = ScreeningResult;
```

## File: packages/db/src/client.ts
```typescript

```

## File: packages/db/drizzle.config.ts
```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL || "file:../../local.db",
  },
});
```

## File: packages/types/src/db.ts
```typescript
import type { ActivitySchema } from "@repo/db/schema/activity";
import type { ApplicantSchema } from "@repo/db/schema/applicant";
import type {
  AccountSchema,
  SessionSchema,
  UserSchema,
  VerificationSchema,
} from "@repo/db/schema/auth";
import type { JobSchema } from "@repo/db/schema/job";
import type { ProfileSchema } from "@repo/db/schema/profile";
import type { ScreeningResultSchema } from "@repo/db/schema/screening-result";
import type { InferSchemaType } from "mongoose";

export type User = InferSchemaType<typeof UserSchema> & { id: string };
export type Session = InferSchemaType<typeof SessionSchema> & { id: string };
export type Account = InferSchemaType<typeof AccountSchema> & { id: string };
export type Verification = InferSchemaType<typeof VerificationSchema> & { id: string };

export type Job = InferSchemaType<typeof JobSchema> & {
  id: string;
  applicantCount?: number;
  screenedCount?: number;
};

export type Applicant = InferSchemaType<typeof ApplicantSchema> & { id: string };

export type ScreeningResult = InferSchemaType<typeof ScreeningResultSchema> & { id: string };

export type Profile = InferSchemaType<typeof ProfileSchema> & { id: string };

export type Activity = InferSchemaType<typeof ActivitySchema> & { id: string };

export type ScreeningResultWithApplicant = ScreeningResult & {
  applicant: {
    name: string;
    role: string;
  };
};
```

## File: packages/types/src/history.ts
```typescript
export interface HistoryItem {
  id: string;
  jobTitle: string;
  date: string;
  candidates: number;
  shortlisted: number;
  avgScore: number;
  timeSaved: string;
  status: string;
}
```

## File: packages/types/package.json
```json
{
  "name": "@repo/types",
  "private": true,
  "main": "src/index.ts",
  "module": "src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  },
  "scripts": {
    "lint": "biome check .",
    "clean": "biome check --write --no-errors-on-unmatched .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "mongoose": "^9.5.0"
  }
}
```

## File: packages/types/tsconfig.json
```json
{
  "extends": ["../../tsconfig.json", "../../tsconfig.paths.json"],
  "compilerOptions": {
    "baseUrl": "../.."
  },
  "include": ["src"]
}
```

## File: packages/ui/src/web/components/ui/accordion.tsx
```typescript
"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
        <ChevronUpIcon data-slot="accordion-trigger-icon" className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

## File: packages/ui/src/web/components/ui/alert-dialog.tsx
```typescript
"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { Button } from "@repo/ui/web/components/ui/button"

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
  size?: "default" | "sm"
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 ring-1 ring-foreground/10 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        "text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Action
        data-slot="alert-dialog-action"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Cancel
        data-slot="alert-dialog-cancel"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
```

## File: packages/ui/src/web/components/ui/alert.tsx
```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@repo/ui/web/lib/utils"

const alertVariants = cva(
  "group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-2 right-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
```

## File: packages/ui/src/web/components/ui/avatar.tsx
```typescript
"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
```

## File: packages/ui/src/web/components/ui/badge.tsx
```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Badge = ({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
```

## File: packages/ui/src/web/components/ui/breadcrumb.tsx
```typescript
import * as React from "react"
import { Slot } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

function Breadcrumb({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn(className)}
      {...props}
    />
  )
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? (
        <ChevronRightIcon />
      )}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex size-5 items-center justify-center [&>svg]:size-4",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon
      />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
```

## File: packages/ui/src/web/components/ui/calendar.tsx
```typescript
"use client"

import * as React from "react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { cn } from "@repo/ui/web/lib/utils"
import { Button, buttonVariants } from "@repo/ui/web/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label"
            ? "text-sm"
            : "flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)"
            : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted",
          defaultClassNames.range_end
        ),
        today: cn(
          "rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("size-4", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
```

## File: packages/ui/src/web/components/ui/card.tsx
```typescript
import * as React from "react"

import { cn } from "@repo/ui/web/lib/utils"

const Card = ({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) => {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  )
}

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

const CardDescription = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

const CardAction = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}

const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
```

## File: packages/ui/src/web/components/ui/carousel.tsx
```typescript
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

import { cn } from "@repo/ui/web/lib/utils"
import { Button } from "@repo/ui/web/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
}
```

## File: packages/ui/src/web/components/ui/checkbox.tsx
```typescript
"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { CheckIcon } from "lucide-react"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
```

## File: packages/ui/src/web/components/ui/collapsible.tsx
```typescript
"use client"

import { Collapsible as CollapsiblePrimitive } from "radix-ui"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
```

## File: packages/ui/src/web/components/ui/dialog.tsx
```typescript
"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { Button } from "@repo/ui/web/components/ui/button"
import { XIcon } from "lucide-react"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 text-sm ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-2 right-2"
              size="icon-sm"
            >
              <XIcon
              />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-base leading-none font-medium", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
```

## File: packages/ui/src/web/components/ui/dropdown-menu.tsx
```typescript
"use client"

import * as React from "react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={cn("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
```

## File: packages/ui/src/web/components/ui/dropzone.tsx
```typescript
"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import type { DropzoneProps as _DropzoneProps, DropzoneState as _DropzoneState } from "react-dropzone";
import { FileText, Image, Trash2, Upload } from "lucide-react";
import { cn } from "@repo/ui/web/lib/utils";

export interface DropzoneState extends _DropzoneState {}

export interface DropzoneProps extends Omit<_DropzoneProps, "children"> {
  containerClassName?: string;
  dropZoneClassName?: string;
  children?: (dropzone: DropzoneState) => React.ReactNode;
  showFilesList?: boolean;
  showErrorMessage?: boolean;
}

const truncateName = (name: string, max = 30) =>
  name.length > max ? `${name.slice(0, max)}…` : name;

const Dropzone = ({
  containerClassName,
  dropZoneClassName,
  children,
  showFilesList = true,
  showErrorMessage = true,
  ...props
}: DropzoneProps) => {
  const [filesUploaded, setFilesUploaded] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>();

  const dropzone = useDropzone({
    ...props,
    onDrop(acceptedFiles, fileRejections, event) {
      if (props.onDrop) {
        props.onDrop(acceptedFiles, fileRejections, event);
      } else {
        setFilesUploaded((_filesUploaded) => [..._filesUploaded, ...acceptedFiles]);
        if (fileRejections.length > 0) {
          let _errorMessage = `Could not upload ${fileRejections[0]?.file.name ?? "file"}`;
          if (fileRejections.length > 1)
            _errorMessage = `${_errorMessage}, and ${fileRejections.length - 1} other files.`;
          setErrorMessage(_errorMessage);
        } else {
          setErrorMessage("");
        }
      }
    },
  });

  const deleteUploadedFile = (index: number) => {
    setFilesUploaded((_uploadedFiles) => [
      ..._uploadedFiles.slice(0, index),
      ..._uploadedFiles.slice(index + 1),
    ]);
  };

  return (
    <div className={cn("flex flex-col gap-2", containerClassName)}>
      <div
        {...dropzone.getRootProps()}
        className={cn(
          "flex justify-center items-center w-full h-32 border-dashed border-2 border-gray-200 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all select-none cursor-pointer",
          dropZoneClassName,
        )}
      >
        <input {...dropzone.getInputProps()} />
        {children ? (
          children(dropzone)
        ) : dropzone.isDragAccept ? (
          <div className="text-sm font-medium">Drop your files here!</div>
        ) : (
          <div className="flex items-center flex-col gap-1.5">
            <div className="flex items-center flex-row gap-0.5 text-sm font-medium">
              <Upload className="mr-2 h-4 w-4" /> Upload files
            </div>
            {props.maxSize && (
              <div className="text-xs text-gray-400 font-medium">
                Max. file size: {(props.maxSize / (1024 * 1024)).toFixed(2)} MB
              </div>
            )}
          </div>
        )}
      </div>

      {showErrorMessage && errorMessage && (
        <span className="text-xs text-red-600 mt-3">{errorMessage}</span>
      )}

      {showFilesList && filesUploaded.length > 0 && (
        <div
          className={cn(
            "flex flex-col gap-2 w-full mt-2",
            filesUploaded.length > 2 ? "h-48" : "h-fit",
            filesUploaded.length > 0 ? "pb-2" : "",
          )}
        >
          <div className="w-full">
            {filesUploaded.map((fileUploaded, index) => (
              <div
                key={index}
                className="flex justify-between items-center flex-row w-full h-16 mt-2 px-4 border-solid border-2 border-gray-200 rounded-lg shadow-sm"
              >
                <div className="flex items-center flex-row gap-4 h-full">
                  {fileUploaded.type === "application/pdf" ? (
                    <FileText className="text-rose-700 w-6 h-6" />
                  ) : (
                    <Image className="text-rose-700 w-6 h-6" />
                  )}
                  <div className="flex flex-col gap-0">
                    <div className="text-[0.85rem] font-medium leading-snug">
                      {truncateName(fileUploaded.name.split(".").slice(0, -1).join("."), 30)}
                    </div>
                    <div className="text-[0.7rem] text-gray-500 leading-tight">
                      .{fileUploaded.name.split(".").pop()} •{" "}
                      {(fileUploaded.size / (1024 * 1024)).toFixed(2)} MB
                    </div>
                  </div>
                </div>
                <div
                  className="p-2 rounded-full border-solid border-2 border-gray-100 shadow-sm hover:bg-accent transition-all select-none cursor-pointer"
                  onClick={() => deleteUploadedFile(index)}
                  onKeyDown={(e) => e.key === "Enter" && deleteUploadedFile(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
```

## File: packages/ui/src/web/components/ui/field.tsx
```typescript
"use client"

import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@repo/ui/web/lib/utils"
import { Label } from "@repo/ui/web/components/ui/label"
import { Separator } from "@repo/ui/web/components/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-2 font-medium data-[variant=label]:text-xs/relaxed data-[variant=legend]:text-sm",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-4 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "data-[invalid=true]:text-destructive gap-2 group/field flex w-full",
  {
    variants: {
      orientation: {
        vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
        horizontal:
          "flex-row items-center *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive:
          "flex-col *:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:*:data-[slot=field-label]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-0.5 leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "has-data-checked:bg-primary/5 dark:has-data-checked:bg-primary/10 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-2",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-xs/relaxed leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-left text-xs/relaxed leading-normal font-normal group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5",
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-xs/relaxed group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="text-muted-foreground bg-background relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive text-xs/relaxed font-normal", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
```

## File: packages/ui/src/web/components/ui/form.tsx
```typescript
"use client"

import * as React from "react"
import { Label as LabelPrimitive, Slot } from "radix-ui"
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@repo/ui/web/lib/utils"
import { Label } from "@repo/ui/web/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>")
  }

  const fieldState = getFieldState(fieldContext.name, formState)

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot.Root>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot.Root
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FormMessage({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm font-medium", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
```

## File: packages/ui/src/web/components/ui/input-otp.tsx
```typescript
"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"

import { cn } from "@repo/ui/web/lib/utils"
import { MinusIcon } from "lucide-react"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "cn-input-otp flex items-center has-disabled:opacity-50",
        containerClassName
      )}
      spellCheck={false}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "flex items-center rounded-lg has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex size-8 items-center justify-center border-y border-r border-input text-sm transition-all outline-none first:rounded-l-lg first:border-l last:rounded-r-lg aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-3 data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="flex items-center [&_svg:not([class*='size-'])]:size-4"
      role="separator"
      {...props}
    >
      <MinusIcon
      />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
```

## File: packages/ui/src/web/components/ui/input.tsx
```typescript
import * as React from "react"

import { cn } from "@repo/ui/web/lib/utils"

const Input = ({ className, type, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
```

## File: packages/ui/src/web/components/ui/kbd.tsx
```typescript
import { cn } from "@repo/ui/web/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-xs px-1 font-sans text-[0.625rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
```

## File: packages/ui/src/web/components/ui/label.tsx
```typescript
"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
```

## File: packages/ui/src/web/components/ui/menubar.tsx
```typescript
"use client"

import * as React from "react"
import { Menubar as MenubarPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "flex h-8 items-center gap-0.5 rounded-lg border p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "flex items-center rounded-sm px-1.5 py-[2px] text-sm font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn("z-50 min-w-36 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95", className )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/menubar-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon
          />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon
          />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-1.5 py-1 text-sm font-medium data-inset:pl-7",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn("z-50 min-w-32 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
```

## File: packages/ui/src/web/components/ui/navigation-menu.tsx
```typescript
import * as React from "react"
import { cva } from "class-variance-authority"
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { ChevronDownIcon } from "lucide-react"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-0",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg bg-background px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon className="relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180" aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "top-0 left-0 w-full p-1 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10 group-data-[viewport=false]/navigation-menu:duration-300 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 duration-100 md:w-(--radix-navigation-menu-viewport-width) data-open:animate-in data-open:zoom-in-90 data-closed:animate-out data-closed:zoom-out-90",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
```

## File: packages/ui/src/web/components/ui/pagination.tsx
```typescript
import * as React from "react"

import { cn } from "@repo/ui/web/lib/utils"
import { Button } from "@repo/ui/web/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-0.5", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      asChild
      variant={isActive ? "outline" : "ghost"}
      size={size}
      className={cn(className)}
    >
      <a
        aria-current={isActive ? "page" : undefined}
        data-slot="pagination-link"
        data-active={isActive}
        {...props}
      />
    </Button>
  )
}

function PaginationPrevious({
  className,
  text = "Previous",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("pl-1.5!", className)}
      {...props}
    >
      <ChevronLeftIcon data-icon="inline-start" />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  text = "Next",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("pr-1.5!", className)}
      {...props}
    >
      <span className="hidden sm:block">{text}</span>
      <ChevronRightIcon data-icon="inline-end" />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon
      />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
```

## File: packages/ui/src/web/components/ui/password-input.tsx
```typescript
"use client"

import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { Input } from "@repo/ui/web/components/ui/input"
import { Button } from "@repo/ui/web/components/ui/button"
import { cn } from "@repo/ui/web/lib/utils"

function PasswordInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-9", className)}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:bg-transparent absolute top-0 right-0 h-full w-9 px-0"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={props.disabled}
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Eye className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
      </Button>
    </div>
  )
}

export { PasswordInput }
```

## File: packages/ui/src/web/components/ui/popover.tsx
```typescript
"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 flex w-72 origin-(--radix-popover-content-transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-0.5 text-sm", className)}
      {...props}
    />
  )
}

function PopoverTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <div
      data-slot="popover-title"
      className={cn("font-medium", className)}
      {...props}
    />
  )
}

function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
}
```

## File: packages/ui/src/web/components/ui/progress.tsx
```typescript
"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="size-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
```

## File: packages/ui/src/web/components/ui/scroll-area.tsx
```typescript
"use client"

import * as React from "react"
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full bg-border"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
```

## File: packages/ui/src/web/components/ui/select.tsx
```typescript
"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props}
    />
  )
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        data-align-trigger={position === "item-aligned"}
        className={cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", position ==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-position={position}
          className={cn(
            "data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)",
            position === "popper" && ""
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-1.5 py-1 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="pointer-events-none" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronUpIcon
      />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronDownIcon
      />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
```

## File: packages/ui/src/web/components/ui/separator.tsx
```typescript
"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
```

## File: packages/ui/src/web/components/ui/sheet.tsx
```typescript
"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { Button } from "@repo/ui/web/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-background bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close data-slot="sheet-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-3 right-3"
              size="icon-sm"
            >
              <XIcon
              />
              <span className="sr-only">Close</span>
            </Button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-base font-medium text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

## File: packages/ui/src/web/components/ui/skeleton.tsx
```typescript
import { cn } from "@repo/ui/web/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
```

## File: packages/ui/src/web/components/ui/slider.tsx
```typescript
"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
```

## File: packages/ui/src/web/components/ui/sonner.tsx
```typescript
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
```

## File: packages/ui/src/web/components/ui/spinner.tsx
```typescript
import { cn } from "@repo/ui/web/lib/utils"
import { Loader2Icon } from "lucide-react"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />
  )
}

export { Spinner }
```

## File: packages/ui/src/web/components/ui/switch.tsx
```typescript
"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
```

## File: packages/ui/src/web/components/ui/table.tsx
```typescript
"use client"

import * as React from "react"

import { cn } from "@repo/ui/web/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
```

## File: packages/ui/src/web/components/ui/tabs.tsx
```typescript
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
```

## File: packages/ui/src/web/components/ui/textarea.tsx
```typescript
import * as React from "react"

import { cn } from "@repo/ui/web/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
```

## File: packages/ui/src/web/hooks/use-mobile.tsx
```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
};
```

## File: packages/ui/src/web/lib/utils.ts
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
```

## File: packages/ui/src/web/components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "radix-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@repo/ui/web/components",
    "utils": "@repo/ui/web/lib/utils",
    "ui": "@repo/ui/web/components/ui",
    "lib": "@repo/ui/web/lib",
    "hooks": "@repo/ui/web/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {}
}
```

## File: packages/ui/src/web/index.ts
```typescript
export * from "@repo/ui/web/components/ui/button";
export * from "@repo/ui/web/components/ui/card";
export * from "@repo/ui/web/components/ui/form";
export * from "@repo/ui/web/components/ui/input";
export * from "@repo/ui/web/components/ui/label";
export * from "@repo/ui/web/components/ui/password-input";
export * from "@repo/ui/web/components/ui/sonner";
export * from "@repo/ui/web/lib/utils";
```

## File: packages/ui/src/web/tsconfig.json
```json
{
  "extends": ["../../../../tsconfig.json", "../../../../tsconfig.paths.json"],
  "compilerOptions": {
    "baseUrl": "../../../.."
  },
  "include": ["."]
}
```

## File: packages/utils/src/get-ip.ts
```typescript
import { networkInterfaces } from "node:os";

export const getLocalIPs = (): string[] => {
  const interfaces = networkInterfaces();
  const ips: string[] = [];

  for (const name of Object.keys(interfaces)) {
    const networkInterface = interfaces[name];
    if (!networkInterface) continue;

    for (const info of networkInterface) {
      if (info.family === "IPv4" && !info.internal) {
        ips.push(info.address);
      }
    }
  }

  return ips;
};

export const getLocalIP = (): string | null => {
  const ips = getLocalIPs();
  return ips.length > 0 ? (ips[0] ?? null) : null;
};
```

## File: packages/utils/src/index.ts
```typescript
/**
 * Returns the base URL for the application.
 * Checks environment variables for Expo and Next.js, then falls back to
 * the browser's window.location.origin, and finally defaults to localhost:3000.
 */
export const getBaseUrl = () => {
  if (process.env.EXPO_PUBLIC_APP_URL) return process.env.EXPO_PUBLIC_APP_URL;
  if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
  if (typeof window !== "undefined" && window.location?.origin) return window.location.origin;
  return `http://localhost:${process.env.PORT || "3000"}`;
};
```

## File: packages/utils/package.json
```json
{
  "name": "@repo/utils",
  "private": true,
  "main": "src/index.ts",
  "module": "src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./get-ip": "./src/get-ip.ts",
    "./query-keys": "./src/query-keys.ts"
  },
  "scripts": {
    "lint": "biome check .",
    "clean": "biome check --write --no-errors-on-unmatched .",
    "typecheck": "tsc --noEmit"
  }
}
```

## File: packages/utils/tsconfig.json
```json
{
  "extends": ["../../tsconfig.json", "../../tsconfig.paths.json"],
  "compilerOptions": {
    "baseUrl": "../.."
  },
  "include": ["src"]
}
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

## File: packages/validators/package.json
```json
{
  "name": "@repo/validators",
  "private": true,
  "main": "src/index.ts",
  "module": "src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  },
  "dependencies": {
    "zod": "^4.3.6"
  },
  "scripts": {
    "lint": "biome check .",
    "clean": "biome check --write --no-errors-on-unmatched .",
    "typecheck": "tsc --noEmit"
  }
}
```

## File: packages/validators/tsconfig.json
```json
{
  "extends": ["../../tsconfig.json", "../../tsconfig.paths.json"],
  "compilerOptions": {
    "baseUrl": "../.."
  },
  "include": ["src"]
}
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

## File: apps/web/src/components/shared/SEOConfig.tsx
```typescript
import type { Metadata } from "next";

export const metadataConfig: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: "Lensly | Intelligent Talent Screening",
    template: "%s | Lensly",
  },
  description:
    "Lensly is an intelligent talent profile screening platform that enhances recruiter decision-making while preserving human-led final hiring choices.",
  keywords: [
    "Lensly",
    "Talent Screening",
    "HR Tech",
    "Applicant Tracking",
    "Recruitment",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Daniel Karume", url: "https://github.com/karume-lab" }],
  creator: "Daniel Karume",
  publisher: "Daniel Karume",

  openGraph: {
    title: "Lensly | Intelligent Talent Screening",
    description:
      "Accelerate your hiring process with Lensly. A collaborative talent screening tool that surfaces top candidates to augment recruiter decision-making.",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Lensly",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lensly | Intelligent Talent Screening",
    description: "Accelerate your hiring process with Lensly, the smart talent screening platform.",
    creator: "@karume-lab", // Update this to your project's Twitter handle if applicable
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL,
  },

  category: "business",
};

const SEOConfig = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lensly",
    alternateName: "Lensly Talent Screening Platform",
    url: process.env.NEXT_PUBLIC_APP_URL,
    description: "Intelligent talent profile screening platform",
    author: {
      "@type": "Person",
      name: "Daniel Karume",
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
};

export default SEOConfig;
```

## File: apps/web/src/components/shared/ThemeSwitch.tsx
```typescript
"use client";

import { Button } from "@repo/ui/web/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border-border"
    >
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
```

## File: apps/web/src/features/admin/components/AdminUsersClient.tsx
```typescript
"use client";

import type { User as SystemUser } from "@repo/db/types";
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
import { useAdminUsers, useDeleteUser, useUpdateUserRole } from "@/lib/hooks/use-admin-users";

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

  const columns: ColumnDef<SystemUser>[] = useMemo(
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
        data={(response?.data as SystemUser[]) || []}
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

## File: apps/web/src/features/dashboard/components/jobs-table/columns.tsx
```typescript
"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

export const columns: ColumnDef<any>[] = [
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
        <Badge variant="outline" className={getStatusColor(job.status)}>
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
    cell: ({ row }) => {
      const job = row.original;
      const isReview = job.status === "Review Shortlist" || job.status === "Active";

      if (isReview) {
        return (
          <div className="text-right">
            <Button size="sm" asChild className="h-8">
              <Link href={`/dashboard/jobs/${job.id}/shortlist`}>
                <span className="flex items-center gap-1">
                  Review results
                  <ArrowUpRight className="size-3" />
                </span>
              </Link>
            </Button>
          </div>
        );
      }

      return (
        <div className="text-right">
          <Button variant="ghost" size="sm" asChild className="h-8">
            <Link href={`/dashboard/jobs/${job.id}/ingestion`}>View applicants</Link>
          </Button>
        </div>
      );
    },
  },
];
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

## File: apps/web/src/lib/og.tsx
```typescript
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const generateOGImage = async (options: {
  width: number;
  height: number;
}): Promise<ImageResponse> => {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    <div tw="flex flex-col items-center justify-center w-full h-full bg-black text-white p-12">
      <div tw="flex flex-col items-center">
        {/* biome-ignore lint/performance/noImgElement: required for next/og */}
        <img
          src={logoBase64}
          alt="Lensly Logo"
          width="200"
          height="200"
          style={{ marginBottom: "40px" }}
        />
        <h1 tw="text-8xl font-bold mb-4">Lensly</h1>
        <p tw="text-3xl text-gray-400">The Ultimate Monorepo Stack</p>
      </div>
    </div>,
    {
      width: options.width,
      height: options.height,
    },
  );
};
```

## File: apps/web/.env.example
```
DATABASE_URL=file:../../local.db
BETTER_AUTH_SECRET=   # Run: bunx @better-auth/cli secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
# This is optional. More info on its use here https://stackoverflow.com/questions/55476855/export-react-editor-for-vscode
REACT_EDITOR=antigravity
NEXT_PUBLIC_ALLOWED_DEV_ORIGINS=localhost:3000, 192.168.100.16:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## File: apps/web/tsconfig.json
```json
{
  "extends": ["../../tsconfig.json"],
  "compilerOptions": {
    "baseUrl": "../..",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./apps/web/src/*"],
      "~/*": ["./apps/web/*"],
      "@repo/api": ["./packages/api/src/index.ts"],
      "@repo/api/*": ["./packages/api/src/*"],
      "@repo/auth": ["./packages/auth/src/index.ts"],
      "@repo/auth/*": ["./packages/auth/src/*"],
      "@repo/db": ["./packages/db/src/index.ts"],
      "@repo/db/*": ["./packages/db/src/*"],
      "@repo/types": ["./packages/types/src/index.ts"],
      "@repo/types/*": ["./packages/types/src/*"],
      "@repo/utils": ["./packages/utils/src/index.ts"],
      "@repo/utils/*": ["./packages/utils/src/*"],
      "@repo/validators": ["./packages/validators/src/index.ts"],
      "@repo/validators/*": ["./packages/validators/src/*"],
      "@repo/assets/*": ["./packages/assets/*"],
      "@repo/ui/web": ["./packages/ui/src/web/index.ts"],
      "@repo/ui/web/*": ["./packages/ui/src/web/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "**/*.mts"],
  "exclude": ["node_modules"]
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

      const filter: any = {};
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
        data: users.map((u: any) => ({
          ...u.toObject(),
          id: u._id.toString(),
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
        ...user.toObject(),
        id: user._id.toString(),
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
        ...user.toObject(),
        id: user._id.toString(),
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
        ...updated.toObject(),
        id: updated._id.toString(),
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
      const total = await schema.User.countDocuments();
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

## File: packages/api/src/routers/index.ts
```typescript
import { activityRouter } from "@repo/api/routers/activity";
import { adminRouter } from "@repo/api/routers/admin";
import { applicantRouter } from "@repo/api/routers/applicant";
import { jobRouter } from "@repo/api/routers/job";
import { Elysia } from "elysia";

export const appRouter = new Elysia({ prefix: "/api" })
  .use(jobRouter)
  .use(applicantRouter)
  .use(activityRouter)
  .use(adminRouter);
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
```

## File: packages/api/src/server.ts
```typescript
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { appRouter } from "./routers";
import { Elysia } from "elysia";

const routes = new Elysia()
  .use(cors())
  .use(
    swagger({
      provider: "swagger-ui",
      documentation: {
        info: {
          title: "Lensly API",
          version: "1.0.0",
        },
      },
      path: "/openapi.json",
    }),
  )
  .use(appRouter);

export const app = new Elysia().group("/api", (app) => app.use(routes));

export type App = typeof app;
```

## File: packages/auth/.env.example
```
BETTER_AUTH_SECRET=   # Run: bunx @better-auth/cli secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## File: packages/auth/package.json
```json
{
  "name": "@repo/auth",
  "private": true,
  "main": "src/index.ts",
  "module": "src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./client": "./src/client.ts"
  },
  "dependencies": {
    "better-auth": "^1.1.20",
    "zod": "^4.3.6"
  },
  "scripts": {
    "db:generate-auth": "bun better-auth generate --output ../db/src/schema/auth.ts --config ./src/index.ts --yes",
    "lint": "biome check .",
    "clean": "biome check --write --no-errors-on-unmatched .",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "@better-auth/cli": "^1.4.21"
  }
}
```

## File: packages/db/src/index.ts
```typescript
import mongoose from "mongoose";
import * as schema from "./schema/index";

export { schema };

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/lensly";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

// Ensure connection is established
connectDB();

export const client = mongoose.connection.getClient();
export const dbInstance = mongoose.connection.db;
export const db = mongoose.connection;
```

## File: packages/db/src/seed.ts
```typescript
import { schema } from "@repo/db";
import usersData from "@repo/db/mock-data/users.json";
import { hashPassword } from "better-auth/crypto";

const seed = async () => {
  console.log("Starting database seeding process...");

  console.log("Cleaning up existing data...");
  await schema.account.deleteMany({});
  await schema.session.deleteMany({});
  await schema.user.deleteMany({});

  console.log(`Inserting ${usersData.length} mock users...`);

  for (const userData of usersData) {
    const { password, ...user } = userData;

    await schema.user.create({
      ...user,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    });

    const hashedPassword = await hashPassword(password);
    await schema.account.create({
      userId: user.id,
      accountId: user.id,
      providerId: "credential",
      password: hashedPassword,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    });
  }

  console.log("Users and accounts successfully seeded.");
  console.log("Database seeding finalized completely.");
  process.exit(0);
};

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
```

## File: packages/types/src/auth.ts
```typescript
export type { Session, User } from "@repo/types/db";

export interface AuthError {
  message: string;
}
```

## File: packages/ui/src/web/components/ui/button.tsx
```typescript
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"
import { Spinner } from "@repo/ui/web/components/ui/spinner"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-sm border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs":
          "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


const Button = ({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  loading = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
  }) => {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <Spinner /> : (children || <span className="sr-only">Button</span>)}
    </Comp>
  )
}

export { Button, buttonVariants }
```

## File: packages/ui/src/web/components/ui/sidebar.tsx
```typescript
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { useIsMobile } from "@repo/ui/web/hooks/use-mobile"
import { cn } from "@repo/ui/web/lib/utils"
import { Button } from "@repo/ui/web/components/ui/button"
import { Input } from "@repo/ui/web/components/ui/input"
import { Separator } from "@repo/ui/web/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@repo/ui/web/components/ui/sheet"
import { Skeleton } from "@repo/ui/web/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@repo/ui/web/components/ui/tooltip"
import { PanelLeftIcon } from "lucide-react"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  dir,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          dir={dir}
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        data-side={side}
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:inset-s-1/2 after:w-0.5 hover:after:bg-sidebar-border sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("h-8 w-full bg-background shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-0", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-primary/20 data-active:font-semibold data-active:text-sidebar-primary [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot.Root : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const [width] = React.useState(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  })

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-primary/10 data-active:text-sidebar-primary data-active:font-semibold [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground data-active:[&>svg]:text-sidebar-primary border-l-2 border-transparent data-active:border-sidebar-primary rounded-l-none pl-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
```

## File: packages/ui/src/web/components/ui/tooltip.tsx
```typescript
"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@repo/ui/web/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
```

## File: packages/ui/src/web/package.json
```json
{
  "name": "@repo/ui-web",
  "private": true,
  "dependencies": {
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "next-themes": "^0.4.6",
    "radix-ui": "^1.4.3",
    "react-day-picker": "^9.14.0",
    "react-dropzone": "^15.0.0",
    "sonner": "^2.0.7",
    "truncate": "^3.0.0"
  }
}
```

## File: packages/utils/src/query-keys.ts
```typescript
const authBase = ["auth"] as const;
const adminBase = ["admin"] as const;

export const QUERY_KEYS = {
  auth: {
    all: () => authBase,
    session: () => [...authBase, "session"] as const,
    user: (id: string) => [...authBase, "user", id] as const,
  },
  admin: {
    all: () => adminBase,
    users: {
      all: () => [...adminBase, "users"] as const,
      lists: () => [...adminBase, "users", "list"] as const,
      list: (page: number, limit: number, search?: string) =>
        [...adminBase, "users", "list", { page, limit, search }] as const,
      details: () => [...adminBase, "users", "detail"] as const,
      detail: (id: string) => [...adminBase, "users", "detail", id] as const,
      stats: () => [...adminBase, "users", "stats"] as const,
    },
    stats: () => [...adminBase, "stats"] as const,
  },
} as const;
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

## File: packages/validators/src/job.ts
```typescript
import { z } from "zod";

export const JobBaseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  department: z.string().min(2, "Department must be at least 2 characters"),
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
```

## File: apps/web/src/app/(protected)/dashboard/profile/page.tsx
```typescript
import { AccountProfileClient } from "@/features/auth/components/AccountProfileClient";

const ProfilePage = () => {
  return <AccountProfileClient />;
};

export default ProfilePage;
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
  const { data: metrics } = await api.jobs.stats.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const { data: jobs } = await api.jobs.get({
    headers: {
      cookie: h.get("cookie") ?? "",
    },
  });

  const { data: activity } = await api.activities.get({
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

## File: apps/web/src/components/shared/SidebarComponents.tsx
```typescript
"use client";

import { authClient } from "@repo/auth/client";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/web/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/web/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/web/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@repo/ui/web/components/ui/sidebar";
import { cn } from "@repo/ui/web/lib/utils";
import { ChevronRight, ChevronsUpDown, LayoutDashboard, LogOut, User } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const NavProjects = ({
  projects,
}: {
  projects: {
    name: string;
    url: Route | string;
    icon: React.ElementType;
  }[];
}) => {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Resources</SidebarGroupLabel>
      <SidebarMenu className="gap-1">
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild className="h-9 px-3">
              <Link href={item.url as Route} target="_blank" rel="noreferrer">
                <item.icon className="size-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export const NavUser = ({
  user,
  showReturnToTasks = false,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  showReturnToTasks?: boolean;
}) => {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      router.push("/sign-in");
    } catch {
      router.push("/sign-in");
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-12"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                <span className="truncate font-medium text-white">{user.name}</span>
                <span className="truncate text-xs text-white/60">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 text-white/60" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-2 py-2 text-left text-sm">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/dashboard/profile" as Route} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            {showReturnToTasks && (
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="cursor-pointer">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Return to tasks
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleSignOut}
              className="text-destructive focus:text-destructive cursor-pointer"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export const NavMain = ({
  items,
}: {
  items: {
    title: string;
    url: Route | string;
    icon?: React.ElementType;
    isActive?: boolean;
    items?: {
      title: string;
      url: Route | string;
    }[];
  }[];
}) => {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarMenu className="gap-1">
        {items.map((item) => {
          const isAnyChildActive = item.items?.some((subItem) => pathname === subItem.url);
          const isActive = pathname === item.url || isAnyChildActive;

          if (!item.items) {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={cn(
                    "h-10 px-3 transition-colors",
                    pathname === item.url
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold shadow-sm"
                      : "text-white/80 hover:text-white hover:bg-white/10",
                  )}
                >
                  <Link href={item.url as Route} className="flex items-center gap-3">
                    {item.icon && (
                      <item.icon
                        className={cn(
                          "size-4",
                          pathname === item.url
                            ? "text-sidebar-accent-foreground"
                            : "text-white/80",
                        )}
                      />
                    )}
                    <span className="text-sm">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={cn(
                      "h-10 px-3",
                      isAnyChildActive &&
                        !isCollapsed &&
                        "text-sidebar-accent-foreground font-medium",
                    )}
                  >
                    {item.icon && <item.icon className="size-4" />}
                    <span className="text-sm">{item.title}</span>
                    <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="ml-4 border-l-0 pl-2">
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === subItem.url}
                          className="h-8"
                        >
                          <Link href={subItem.url as Route}>
                            <span className="text-sm">{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};
```

## File: apps/web/src/features/dashboard/components/AIShortlist.tsx
```typescript
"use client";

import type { Job, ScreeningResultWithApplicant } from "@repo/types";
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
import { api } from "@/lib/api";
import { useJob } from "@/lib/queries/job";

const ScoreIndicator = ({ score }: { score: number }) => {
  const color =
    score >= 80 ? "text-emerald-600" : score >= 60 ? "text-amber-600" : "text-destructive";

  return (
    <div className={`flex items-center justify-center font-semibold text-sm ${color}`}>
      {score}%
    </div>
  );
};

const ExplainabilityRow = ({
  candidate,
  jobId,
}: {
  candidate: ScreeningResultWithApplicant;
  jobId: string;
}) => {
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
            <Link href={`/dashboard/jobs/${jobId}/candidates/${candidate.applicantId}`}>
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
  const { data: job, isLoading: jobLoading } = useJob(jobId) as {
    data: Job | undefined;
    isLoading: boolean;
  };
  const { data: shortlist, isLoading: shortlistLoading } = useQuery<ScreeningResultWithApplicant[]>(
    {
      queryKey: ["shortlist", jobId],
      queryFn: async () => {
        const { data, error } = await api.applicants.job({ jobId }).shortlist.get();
        if (error) throw error;
        return data as ScreeningResultWithApplicant[];
      },
    },
  );

  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ shallow: true }),
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns: ColumnDef<ScreeningResultWithApplicant>[] = [
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
            <Link href={`/dashboard/jobs/${jobId}/settings` as Route}>
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

      <p className="text-center text-[10px] text-muted-foreground py-4 uppercase tracking-widest">
        Showing top {shortlist?.length || 0} results from {job?.applicantCount || 0} analyzed
        candidates
      </p>
    </div>
  );
};
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
import {
  useApplicants,
  useScreeningMutation,
  useUploadMetadataMutation,
} from "@/lib/queries/applicant";
import { useJob } from "@/lib/queries/job";

export const IngestionHub = ({ jobId }: { jobId: string }) => {
  const router = useRouter();
  const { data: job, isLoading: jobLoading } = useJob(jobId);
  const { data: applicants, isLoading: applicantsLoading } = useApplicants(jobId);
  const screeningMutation = useScreeningMutation();
  const uploadMutation = useUploadMetadataMutation();

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

  const columns: ColumnDef<any>[] = [
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
            {skills.slice(0, 3).map((skill: string) => (
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
      toast.info("Extracting data", {
        description: `Processing ${acceptedFiles.length} resume(s).`,
      });

      try {
        for (const file of acceptedFiles) {
          // Simulate extraction and upload
          await uploadMutation.mutateAsync({
            jobId,
            name: file.name.replace(".pdf", ""),
            source: "External Upload",
            status: "Pending_Screening",
            structuredData: {
              skills: ["Extracted Skill"],
              experience: [{ duration: "Pending Analysis" }],
            },
          });
        }
        toast.success("Candidates added successfully");
      } catch (_error) {
        toast.error("Failed to upload candidates");
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

export function JobOverviewClient({ initialData }: { initialData: any }) {
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
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createJobAction } from "@/app/actions/job";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";

export const NewJobForm = () => {
  const [skillInput, setSkillInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<CreateJobInput>({
    resolver: zodResolver(CreateJobSchema),
    defaultValues: {
      title: "",
      department: "",
      description: "",
      requiredSkills: [],
      weightSkills: 50,
      weightExperience: 30,
      weightEducation: 20,
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
    startTransition(async () => {
      try {
        await createJobAction(data);
        toast.success("Job created successfully");
        router.push("/dashboard/jobs");
      } catch {
        toast.error("Failed to create job. Please try again.");
      }
    });
  };

  return (
    <div className=" duration-500">
      <DashboardHeader
        title="Create job"
        subtitle="Define the requirements and screening parameters for your hiring pipeline."
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
              <Link href="/dashboard">Cancel</Link>
            </Button>
            <Button type="submit" className="min-w-[120px]" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>Create job</>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
```

## File: apps/web/next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env.NEXT_PUBLIC_ALLOWED_DEV_ORIGINS?.split(",") ?? [],
  typedRoutes: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  transpilePackages: [
    "@repo/api",
    "@repo/auth",
    "@repo/db",
    "@repo/ui",
    "@repo/validators",
    "@repo/types",
    "@repo/utils",
    "@repo/assets",
  ],
};

export default nextConfig;
```

## File: apps/web/package.json
```json
{
  "name": "web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "clean": "biome check --write --no-errors-on-unmatched .",
    "lint": "biome check .",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  },
  "ignoreScripts": [
    "sharp",
    "unrs-resolver"
  ],
  "trustedDependencies": [
    "sharp",
    "unrs-resolver"
  ],
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@icons-pack/react-simple-icons": "^13.11.2",
    "@repo/api": "workspace:*",
    "@repo/assets": "workspace:*",
    "@repo/auth": "workspace:*",
    "@repo/db": "workspace:*",
    "@repo/types": "workspace:*",
    "@repo/ui": "workspace:*",
    "@repo/validators": "workspace:*",
    "@scalar/nextjs-api-reference": "^0.9.24",
    "@tanstack/react-query": "^5.90.21",
    "@tanstack/react-query-devtools": "^5.91.3",
    "@tanstack/react-table": "^8.21.3",
    "better-auth": "^1.1.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "dayjs": "^1.11.19",
    "embla-carousel-autoplay": "^8.6.0",
    "framer-motion": "^12.38.0",
    "geist": "^1.7.0",
    "lucide-react": "^0.575.0",
    "next": "16.1.6",
    "next-themes": "^0.4.6",
    "nuqs": "^2.8.9",
    "radix-ui": "^1.4.3",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.71.2",
    "recharts": "^3.8.1",
    "shadcn": "^3.8.5",
    "sonner": "^2.0.7",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.4.0",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@tailwindcss/typography": "^0.5.19",
    "@types/mdx": "^2.0.13",
    "tailwindcss": "^4.1.17"
  }
}
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
  database: mongodbAdapter(dbInstance!),
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
import mongoose, { Schema } from "mongoose";

export const UserSchema = new Schema(
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

export const SessionSchema = new Schema(
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

export const AccountSchema = new Schema(
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

export const VerificationSchema = new Schema(
  {
    identifier: { type: String, required: true },
    value: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Session = mongoose.models.Session || mongoose.model("Session", SessionSchema);
export const Account = mongoose.models.Account || mongoose.model("Account", AccountSchema);
export const Verification =
  mongoose.models.Verification || mongoose.model("Verification", VerificationSchema);

export const user = User;
export const session = Session;
export const account = Account;
export const verification = Verification;
```

## File: packages/db/package.json
```json
{
  "name": "@repo/db",
  "main": "src/index.ts",
  "module": "src/index.ts",
  "dependencies": {
    "better-auth": "^1.4.19",
    "drizzle-orm": "^0.45.2",
    "mongoose": "^9.5.0",
    "zod": "^4.3.6"
  },
  "exports": {
    ".": "./src/index.ts",
    "./schema": "./src/schema/index.ts",
    "./schema/*": "./src/schema/*.ts"
  },
  "scripts": {
    "lint": "biome check .",
    "clean": "biome check --write --no-errors-on-unmatched .",
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio",
    "db:migrate": "drizzle-kit migrate",
    "db:seed": "bun src/seed.ts",
    "typecheck": "tsc --noEmit"
  },
  "type": "module"
}
```

## File: packages/ui/src/web/globals.css
```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@source "../../../apps/web/src";
@source "./components";
@source "./lib";


@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  
  --color-success-foreground: var(--success-foreground);
  --color-success: var(--success);
  --color-warning-foreground: var(--warning-foreground);
  --color-warning: var(--warning);
  --color-info-foreground: var(--info-foreground);
  --color-info: var(--info);

  --radius-sm: calc(var(--radius) - 4px);

  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

:root {
  /* UMURAVA Design System Tokens (Light Mode) */
  --u-primary-50: #EFF6FF;
  --u-primary-100: #DBEAFE;
  --u-primary-300: #93C5FD;
  --u-primary-600: #2563EB;
  --u-primary-700: #1D4ED8;
  --u-primary-900: #1E3A8A;

  --u-white: #FFFFFF;
  --u-surface: #F8FAFC;
  --u-surface-alt: #F1F5F9;
  --u-border: #E2E8F0;
  --u-border-strong: #CBD5E1;
  --u-text-tertiary: #94A3B8;
  --u-text-secondary: #475569;
  --u-text-primary: #0F172A;

  --u-success-light: #D1FAE5;
  --u-success: #10B981;
  --u-warning-light: #FEF3C7;
  --u-warning: #F59E0B;
  --u-error-light: #FEE2E2;
  --u-error: #EF4444;

  /* Functional Mapping - Light Mode */
  --background: var(--u-surface);
  --foreground: var(--u-text-primary);
  
  --card: var(--u-white);
  --card-foreground: var(--u-text-primary);
  
  --popover: var(--u-white);
  --popover-foreground: var(--u-text-primary);
  
  --primary: var(--u-primary-600);
  --primary-foreground: var(--u-white);
  
  --secondary: var(--u-surface-alt);
  --secondary-foreground: var(--u-text-secondary);
  
  --muted: var(--u-surface-alt);
  --muted-foreground: var(--u-text-tertiary);
  
  --accent: var(--u-surface-alt);
  --accent-foreground: var(--u-text-primary);
  
  --destructive: var(--u-error);
  --destructive-foreground: var(--u-white);
  
  --success: var(--u-success);
  --success-foreground: #065F46;
  --warning: var(--u-warning);
  --warning-foreground: #92400E;
  --info: var(--u-primary-600);
  --info-foreground: var(--u-primary-900);
  
  --border: var(--u-border);
  --input: var(--u-border);
  --ring: var(--u-primary-600);

  --sidebar: var(--u-primary-600);
  --sidebar-foreground: var(--u-white);
  --sidebar-primary: var(--u-white);
  --sidebar-primary-foreground: var(--u-primary-600);
  --sidebar-accent: rgba(255, 255, 255, 0.95);
  --sidebar-accent-foreground: var(--u-primary-600);
  --sidebar-border: transparent;
  --sidebar-ring: var(--u-white);

  --radius: 0.625rem;
}

.dark {
  /* Functional Mapping - Dark Mode tokens */
  --background: #0F172A;
  --foreground: #F8FAFC; /* Map text-primary dark token */
  
  --card: #1E293B; /* UMURAVA dark surface */
  --card-foreground: #F8FAFC;
  
  --popover: #1E293B;
  --popover-foreground: #F8FAFC;
  
  --primary: #3B82F6; /* UMURAVA primary-600 lightened */
  --primary-foreground: #0F172A;
  
  --secondary: #334155; /* UMURAVA dark surface-alt */
  --secondary-foreground: #CBD5E1; /* UMURAVA dark text-secondary */
  
  --muted: #334155;
  --muted-foreground: #64748B; /* UMURAVA dark text-tertiary */
  
  --accent: #334155;
  --accent-foreground: #F8FAFC;
  
  --destructive: #EF4444; /* Error remains same but foreground changes */
  --destructive-foreground: #F8FAFC;
  
  --success: #10B981;
  --success-foreground: #D1FAE5;
  --warning: #F59E0B;
  --warning-foreground: #FEF3C7;
  --info: #3B82F6;
  --info-foreground: #DBEAFE;
  
  --border: #334155;
  --input: #334155;
  --ring: #3B82F6;

  --sidebar: #1E293B; /* Deep navy for contrast */
  --sidebar-foreground: #F8FAFC;
  --sidebar-primary: #3B82F6;
  --sidebar-primary-foreground: #0F172A;
  --sidebar-accent: rgba(59, 130, 246, 0.15);
  --sidebar-accent-foreground: #3B82F6;
  --sidebar-border: #334155;
  --sidebar-ring: #3B82F6;
}


@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@media (min-width: 768px) {
  header [data-search],
  header [aria-label="Open Sidebar"] {
    display: none !important;
  }
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

## File: apps/web/src/components/shared/SiteLogo.tsx
```typescript
import Logo from "@repo/assets/logo.png";
import { cn } from "@repo/ui/web/lib/utils";
import Image from "next/image";

const SiteLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      alt="Lensly Logo"
      src={Logo}
      className={cn(
        "hover:animate-spin transition-transform duration-300 hover:scale-105",
        className,
      )}
      priority={true}
    />
  );
};

export default SiteLogo;
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

## File: apps/web/src/features/dashboard/components/CandidateDeepDive.tsx
```typescript
"use client";

import { Badge } from "@repo/ui/web/components/ui/badge";
import { Button } from "@repo/ui/web/components/ui/button";
import { Card } from "@repo/ui/web/components/ui/card";
import { useMutation, useQuery } from "@tanstack/react-query";
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
import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/api";

export const CandidateDeepDive = ({
  jobId,
  candidateId,
}: {
  jobId: string;
  candidateId: string;
}) => {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["candidate-deep-dive", candidateId],
    queryFn: async () => {
      const { data, error } = await api.applicants({ id: candidateId })["deep-dive"].get();
      if (error) throw error;
      return data;
    },
  });

  const statusMutation = useMutation({
    mutationFn: async (status: string) => {
      const { data, error } = await api.applicants({ id: candidateId }).status.patch({ status });
      if (error) throw error;
      return data;
    },
  });

  const handleDecision = async (decision: "approve" | "reject") => {
    setIsUpdating(true);
    const intent = decision === "approve" ? "Hired" : "Rejected";
    const status = decision === "approve" ? "Hired" : "Rejected";

    try {
      await statusMutation.mutateAsync(status);
      toast.success(`${intent}: Candidate status updated`);
      setTimeout(() => {
        router.push(`/dashboard/jobs/${jobId}/shortlist`);
      }, 1000);
    } catch (_error) {
      toast.error("Update failed");
      setIsUpdating(false);
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
  const structured = data.structuredData as any;

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
                    {screening.aiReasoning.split("\n\n").map((paragraph: string, i: number) => (
                      <p key={`reason-${i}`} className="mb-4">
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
                disabled={isUpdating}
              >
                <XCircle className="size-4 mr-2" />
                Reject candidate
              </Button>
              <Button
                className="flex-[2] h-10 bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => handleDecision("approve")}
                disabled={isUpdating}
              >
                <CheckCircle2 className="size-4 mr-2" />
                Approve for Hire
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
                  {structured?.experience?.map((exp: any, i: number) => (
                    <div key={`exp-${i}`} className="relative pl-6">
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
import DashboardHeader from "./DashboardHeader";
import { JobsTable } from "./jobs-table";

export const CommandCenter = ({
  data,
}: {
  data: {
    metrics: any;
    jobs: any[];
    activity: any[];
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
        {Object.entries(metrics).map(([key, metric]: [string, any]) => (
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

## File: packages/db/src/schema/index.ts
```typescript
export * from "./activity";
export * from "./applicant";
export * from "./auth";
export * from "./job";
export * from "./profile";
export * from "./screening-result";
```

## File: packages/db/src/types.ts
```typescript
export * from "@repo/types";
```

## File: packages/db/tsconfig.json
```json
{
  "extends": ["../../tsconfig.json", "../../tsconfig.paths.json"],
  "compilerOptions": {
    "baseUrl": "../.."
  },
  "include": ["src"]
}
```

## File: packages/ui/src/web/components/ui/data-table.tsx
```typescript
"use client"


import { useEffect, useState } from "react"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type PaginationState,
  type OnChangeFn,
} from "@tanstack/react-table"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, LayoutGrid, List, Search, X } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/web/components/ui/table"
import { Button } from "@repo/ui/web/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/web/components/ui/select"
import { Input } from "@repo/ui/web/components/ui/input"

interface FilterOption {
  label: string
  value: string
}

interface FilterConfig<V extends string = string> {
  name: string
  options: FilterOption[]
  value?: V
  onValueChange?: (value: V) => void
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pageCount: number
  pagination: PaginationState
  onPaginationChange: OnChangeFn<PaginationState>
  searchKey?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  filterConfigs?: FilterConfig[]
  renderFilters?: () => React.ReactNode
  onClearFilters?: () => void
  loading?: boolean
  totalCount?: number
  viewMode?: "table" | "grid"
  onViewModeChange?: (view: "table" | "grid") => void
  renderCard?: (item: TData) => React.ReactNode
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pageCount,
  pagination,
  onPaginationChange,
  searchKey,
  searchValue,
  onSearchChange,
  filterConfigs,
  renderFilters,
  onClearFilters,
  loading,
  totalCount,
  viewMode = "table",
  onViewModeChange,
  renderCard,
}: DataTableProps<TData, TValue>) {
  const [localSearchValue, setLocalSearchValue] = useState(searchValue || "")

  useEffect(() => {
    setLocalSearchValue(searchValue || "")
  }, [searchValue])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearchValue !== (searchValue || "")) {
        onSearchChange?.(localSearchValue)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [localSearchValue, onSearchChange, searchValue])

  const table = useReactTable({
    data,
    columns,
    pageCount,
    state: {
      pagination,
    },
    onPaginationChange,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  })

  return (
    <div className="space-y-6">
      {(renderFilters || filterConfigs || searchKey) && (
        <div className="p-6 rounded-lg border border-border bg-card space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Filters</h4>
              <p className="text-xs text-muted-foreground">Refine your search results</p>
            </div>
            {onClearFilters && (
              <Button variant="outline" size="sm" onClick={onClearFilters}>
                Clear All
              </Button>
            )}
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-1 flex-wrap items-end gap-4">
              {searchKey && (
                <div className="space-y-1.5 flex-1 min-w-[280px]">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Search</label>
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                    <Input
                      placeholder={`Search ${searchKey}...`}
                      value={localSearchValue}
                      onChange={(event) => setLocalSearchValue(event.target.value)}
                      className="pl-9 pr-8 h-10 py-0 bg-background"
                    />
                    {searchValue && (
                      <Button
                        variant="ghost"
                        onClick={() => onSearchChange?.("")}
                        className="absolute right-0 top-0 h-10 w-10 px-0 hover:bg-transparent"
                      >
                        <X className="h-4 w-4 text-zinc-500" />
                        <span className="sr-only">Clear search</span>
                      </Button>
                    )}
                  </div>
                </div>
              )}
              
              {filterConfigs?.map((config) => (
                <div key={config.name} className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{config.name}</label>
                  <Select
                    value={config.value || "all"}
                    onValueChange={(value) => config.onValueChange?.(value)}
                  >
                    <SelectTrigger className="h-10 py-0 min-w-[180px] capitalize bg-background">
                      <SelectValue placeholder={`Filter by ${config.name}`} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All {config.name}</SelectItem>
                      {config.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}

              {renderFilters?.()}
            </div>

            {onViewModeChange && (
              <div className="flex items-center gap-1 p-1 rounded-md border border-border bg-muted/20">
                <Button
                  variant={viewMode === "table" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => onViewModeChange("table")}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => onViewModeChange("grid")}
                  className="h-8 w-8 p-0"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {viewMode === "table" ? (
        <div className="rounded-md border border-border bg-card overflow-hidden">
          <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                    Loading records...
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-zinc-500">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className="contents">
                {renderCard ? renderCard(item) : (
                  <div className="p-4 border rounded-lg">
                    {/* Fallback card content */}
                    {Object.values(item as Record<string, unknown>).map((val: unknown, i) => (
                      <div key={i} className="truncate text-sm">{String(val)}</div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed rounded-lg text-zinc-500">
              No results found.
            </div>
          )}
        </div>
      )}
      
      <div className="flex items-center justify-between px-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {totalCount !== undefined 
            ? `Showing ${Math.min(pagination.pageIndex * pagination.pageSize + 1, totalCount)} to ${Math.min((pagination.pageIndex + 1) * pagination.pageSize, totalCount)} of ${totalCount} records`
            : `Showing ${table.getRowModel().rows.length} records.`
          }
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-8 w-17.5">
                <SelectValue placeholder={table.getState().pagination.pageSize} />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-25 items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount() || 1}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## File: packages/validators/src/index.ts
```typescript
export * from "@repo/validators/applicant";
export * from "@repo/validators/auth";
export * from "@repo/validators/job";
export * from "@repo/validators/profile";
export * from "@repo/validators/settings";
```

## File: packages/types/src/index.ts
```typescript
export * from "@repo/types/auth";
export * from "@repo/types/db";
export * from "@repo/types/history";
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
