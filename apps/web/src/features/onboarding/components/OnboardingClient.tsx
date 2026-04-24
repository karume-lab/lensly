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
