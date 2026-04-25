import { client, dbInstance } from "@repo/db";
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
  database: mongodbAdapter(dbInstance as NonNullable<typeof dbInstance>, {
    client: client,
  }),
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
  experimental: {
    joins: true,
  },
});

export type Auth = typeof auth;
