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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/web/components/ui/tooltip";
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
    const candidates = skill
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "");

    const newSkills = candidates.filter((s) => !skills.includes(s));

    if (newSkills.length > 0) {
      const uniqueNew = Array.from(new Set(newSkills));
      form.setValue("requiredSkills", [...skills, ...uniqueNew], {
        shouldValidate: true,
      });
    }
    setSkillInput("");
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
    const currentWeights = form.getValues();
    const weights = {
      weightSkills: currentWeights.weightSkills,
      weightExperience: currentWeights.weightExperience,
      weightEducation: currentWeights.weightEducation,
    };

    const otherKeys = (Object.keys(weights) as Array<keyof typeof weights>).filter(
      (k) => k !== key,
    );

    const remaining = 100 - value;
    const currentSumOther = otherKeys.reduce((acc, k) => acc + weights[k], 0);

    const newWeights = { ...weights };
    newWeights[key] = value;

    if (currentSumOther === 0) {
      const share = Math.floor(remaining / otherKeys.length);
      for (const k of otherKeys) newWeights[k] = share;
      // Fix rounding
      const currentSum = Object.values(newWeights).reduce((a, b) => a + b, 0);
      if (currentSum !== 100 && otherKeys[0]) newWeights[otherKeys[0]] += 100 - currentSum;
    } else {
      for (const k of otherKeys) {
        newWeights[k] = Math.round((weights[k] / currentSumOther) * remaining);
      }
    }

    const finalSum = Object.values(newWeights).reduce((a, b) => a + b, 0);
    if (finalSum !== 100 && otherKeys[0]) {
      newWeights[otherKeys[0]] += 100 - finalSum;
    }

    form.setValue("weightSkills", newWeights.weightSkills);
    form.setValue("weightExperience", newWeights.weightExperience);
    form.setValue("weightEducation", newWeights.weightEducation, { shouldValidate: true });
  };

  const PRESETS = [
    {
      label: "Balanced",
      values: { s: 40, x: 30, e: 30 },
      description: "Equal focus on skills, experience, and education.",
    },
    {
      label: "Tech-Heavy",
      values: { s: 70, x: 20, e: 10 },
      description: "Prioritizes deep technical expertise above all else.",
    },
    {
      label: "Experience-led",
      values: { s: 20, x: 70, e: 10 },
      description: "Focuses on candidates with a proven track record in the field.",
    },
    {
      label: "Entry/Academic",
      values: { s: 30, x: 10, e: 60 },
      description: "Emphasizes educational background and potential for entry-level roles.",
    },
  ];

  const applyPreset = (values: { s: number; x: number; e: number }) => {
    form.setValue("weightSkills", values.s);
    form.setValue("weightExperience", values.x);
    form.setValue("weightEducation", values.e, { shouldValidate: true });
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
        onSuccess: (data) => {
          toast.success("Job created successfully");
          router.push(`/dashboard/jobs/${data.id}/applicants/ingestion`);
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
                            placeholder="Enter skills (e.g. React, Python)"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onBlur={() => handleAddSkill(skillInput)}
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
                        <p className="text-[11px] text-muted-foreground -mt-2">
                          Separate multiple skills with commas. Press Enter or click away to add.
                        </p>
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
              <CardDescription className="flex justify-between items-center">
                <span>Define how the screening process should prioritize candidate traits.</span>
                <Badge
                  variant="outline"
                  className="bg-primary/5 text-primary border-primary/20 font-mono"
                >
                  Total: {weightSkills + weightExperience + weightEducation}%
                </Badge>
              </CardDescription>
              <p className="text-[10px] text-muted-foreground mt-2 italic">
                * Weights will automatically adjust to maintain a 100% total.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <TooltipProvider>
                  {PRESETS.map((preset) => (
                    <Tooltip key={preset.label}>
                      <TooltipTrigger asChild>
                        <Badge
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80 transition-colors py-1"
                          onClick={() => applyPreset(preset.values)}
                        >
                          {preset.label}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">{preset.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
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
                      <FormMessage />
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
                      <FormMessage />
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
