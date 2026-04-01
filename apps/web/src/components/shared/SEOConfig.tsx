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
