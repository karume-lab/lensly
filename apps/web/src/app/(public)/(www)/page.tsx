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
                  className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                >
                  <CardHeader>
                    <div className="mb-4 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
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
