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
