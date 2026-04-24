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
      seniority: "",
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
