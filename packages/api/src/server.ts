import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { appRouter } from "./routers";

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
