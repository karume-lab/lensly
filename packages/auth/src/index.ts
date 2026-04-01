import { db, schema } from "@repo/db";
import { getLocalIPs } from "@repo/utils/get-ip";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      ...schema,
    },
  }),
  baseURL:
    process.env.BETTER_AUTH_URL ??
    process.env.NEXT_PUBLIC_APP_URL ??
    `http://localhost:${process.env.PORT || "3000"}`,
  emailAndPassword: {
    enabled: true,
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
