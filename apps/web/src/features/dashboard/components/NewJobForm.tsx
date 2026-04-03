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
import { AnimatePresence, motion } from "framer-motion";
import { Brain, ChevronRight, Info, Lightbulb, Plus, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createJobAction } from "@/app/actions/job";

export const NewJobForm = () => {
  const [skillInput, setSkillInput] = useState("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<CreateJobInput>({
    resolver: zodResolver(CreateJobSchema),
    defaultValues: {
      title: "",
      department: "",
      description: "",
      requiredSkills: [],
      weightSkills: 50,
      weightExperience: 30,
      weightEducation: 20,
    },
  });

  const title = form.watch("title");
  const skills = form.watch("requiredSkills");
  const weightSkills = form.watch("weightSkills");
  const weightExperience = form.watch("weightExperience");
  const weightEducation = form.watch("weightEducation");

  const suggestions = title?.toLowerCase().includes("front")
    ? ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
    : title?.toLowerCase().includes("back")
      ? ["Node.js", "Go", "PostgreSQL", "Docker", "Redis"]
      : ["Communication", "Problem Solving", "Agile", "Teamwork"];

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

    // Update all weight fields in the form
    form.setValue("weightSkills", newWeights.weightSkills, { shouldValidate: true });
    form.setValue("weightExperience", newWeights.weightExperience, { shouldValidate: true });
    form.setValue("weightEducation", newWeights.weightEducation, { shouldValidate: true });
  };

  const onSubmit = async (data: CreateJobInput) => {
    startTransition(async () => {
      try {
        await createJobAction(data);
        toast.success("Job Created!");
      } catch (_error) {
        toast.error("Job Creation Failed.");
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8 animate-in fly-in-from-bottom duration-700">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Create New Job</h1>
        <p className="text-muted-foreground">
          Define your requirements and AI screening parameters.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Details */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Basic Details
              </CardTitle>
              <CardDescription>Essential information about the role.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Senior React Developer"
                          className="bg-background/50"
                          {...field}
                        />
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
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Engineering"
                          className="bg-background/50"
                          {...field}
                        />
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
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Talk about the role, team, and expectations..."
                        className="min-h-[120px] bg-background/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                Requirements
              </CardTitle>
              <CardDescription>Technical skills and mandatory experience.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="requiredSkills"
                render={() => (
                  <FormItem>
                    <FormLabel>Required Skills</FormLabel>
                    <FormControl>
                      <div className="flex flex-wrap gap-2 min-h-[44px] p-2 rounded-md border border-input bg-background/50 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                        <AnimatePresence mode="popLayout">
                          {skills.map((skill) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                            >
                              <Badge
                                variant="secondary"
                                className="pl-2 pr-1 h-7 flex items-center gap-1 bg-primary/10 border-primary/20 text-primary"
                              >
                                {skill}
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  type="button"
                                  onClick={() => removeSkill(skill)}
                                  className="h-4 w-4 hover:bg-primary/20 rounded-full p-0"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </Badge>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                        <Input
                          className="flex-1 bg-transparent border-none outline-none text-sm min-w-[120px] h-7 focus-visible:ring-0 shadow-none"
                          placeholder={skills.length === 0 ? "Type a skill and press Enter..." : ""}
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleAddSkill(skillInput);
                            }
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />

                    {/* Suggestions */}
                    <div className="flex flex-col gap-2 mt-4">
                      <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        Suggested based on title:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {suggestions
                          .filter((s) => !skills.includes(s))
                          .map((s) => (
                            <Button
                              key={s}
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleAddSkill(s)}
                              className="h-7 text-xs px-2 py-1 rounded bg-muted/50 hover:bg-primary/5 hover:text-primary transition-colors border border-border/50"
                            >
                              + {s}
                            </Button>
                          ))}
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* AI Calibration */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-all duration-1000" />
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  AI Calibration
                </CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Define how Gemini should weigh different traits when generating match
                        scores. The total always equals 100%.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CardDescription>Configure candidate evaluation weightings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-4">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="weightSkills"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-semibold">Skills Relevance</FormLabel>
                        <span className="text-sm font-mono font-bold text-primary">
                          {field.value}%
                        </span>
                      </div>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          onValueChange={([v]) => handleWeightChange("weightSkills", v ?? 0)}
                          max={100}
                          step={1}
                          className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weightExperience"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-semibold">Work Experience</FormLabel>
                        <span className="text-sm font-mono font-bold text-primary">
                          {field.value}%
                        </span>
                      </div>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          onValueChange={([v]) => handleWeightChange("weightExperience", v ?? 0)}
                          max={100}
                          step={1}
                          className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weightEducation"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-sm font-semibold">Education Context</FormLabel>
                        <span className="text-sm font-mono font-bold text-primary">
                          {field.value}%
                        </span>
                      </div>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          onValueChange={([v]) => handleWeightChange("weightEducation", v ?? 0)}
                          max={100}
                          step={1}
                          className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="p-3 bg-muted/50 rounded-lg border border-border/50 flex gap-3 items-center mt-4">
                <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
                <p className="text-xs text-muted-foreground italic">
                  Currently weighing <strong className="text-foreground">Skills</strong> heaviest.
                  Gemini will focus on raw technical proficiency.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-end gap-4 pt-4 pb-20">
            <Button variant="ghost" type="button" asChild disabled={isPending}>
              <Link href="/dashboard">Cancel</Link>
            </Button>
            <Button
              type="submit"
              size="lg"
              className="px-8 shadow-xl shadow-primary/20 group"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="mr-2 h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Creating...
                </>
              ) : (
                <>
                  Save & Continue to Ingestion
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
