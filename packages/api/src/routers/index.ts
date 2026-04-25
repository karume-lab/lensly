import { activityRouter } from "@repo/api/routers/activity";
import { adminRouter } from "@repo/api/routers/admin";
import { applicantRouter } from "@repo/api/routers/applicant";
import { dashboardRouter } from "@repo/api/routers/dashboard";
import { jobRouter } from "@repo/api/routers/job";
import { notificationRouter } from "@repo/api/routers/notification";
import { profileRouter } from "@repo/api/routers/profile";
import { Elysia } from "elysia";

export const appRouter = new Elysia()
  .use(jobRouter)
  .use(applicantRouter)
  .use(activityRouter)
  .use(adminRouter)
  .use(profileRouter)
  .use(dashboardRouter)
  .use(notificationRouter);
