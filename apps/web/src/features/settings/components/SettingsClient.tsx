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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/web/components/ui/form";
import { Input } from "@repo/ui/web/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/web/components/ui/select";
import { Separator } from "@repo/ui/web/components/ui/separator";
import { Switch } from "@repo/ui/web/components/ui/switch";
import { UserSettingsSchema, type UserSettingsValues } from "@repo/validators";
import { Bell, Cpu, Loader2, Save, ShieldCheck, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SettingsClient() {
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<UserSettingsValues>({
    resolver: zodResolver(UserSettingsSchema),
    defaultValues: {
      name: "Alex Johnson",
      email: "alex@lensly.ai",
      role: "Head of Talent Acquisition",
      companyName: "Lensly AI",
      notifications: {
        emailAlerts: true,
        browserAlerts: true,
        aiInsights: true,
      },
      preferences: {
        theme: "system",
        defaultAiModel: "claude-3-5-sonnet",
        autoShortlist: false,
      },
    },
  });

  const onSubmit = async (values: UserSettingsValues) => {
    setIsSaving(true);
    try {
      console.log("Saving settings:", values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Settings saved", {
        description: "Your profile and preferences have been updated.",
      });
    } catch {
      toast.error("Failed to save", {
        description: "An error occurred while updating your settings.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-10">
            <Card className="border-border">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <User className="size-4 text-muted-foreground" /> Account profile
                </CardTitle>
                <CardDescription>Update your contact information and role details.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Email address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Job title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Senior Recruiter" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Cpu className="size-4 text-muted-foreground" /> Platform configuration
                </CardTitle>
                <CardDescription>Manage automation settings and model preferences.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <FormField
                  control={form.control}
                  name="preferences.defaultAiModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Default screening model</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a model" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="claude-3-5-sonnet">Claude 3.5 Sonnet</SelectItem>
                          <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                          <SelectItem value="gemini-1.5-pro">Gemini 1.5 Pro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        The primary model used for initial candidate assessment.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferences.autoShortlist"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between border p-6">
                      <div className="space-y-1">
                        <FormLabel className="text-base font-semibold">
                          Automated shortlisting
                        </FormLabel>
                        <FormDescription>
                          Automatically move candidates with high matching scores to the review
                          stage.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Bell className="size-4 text-muted-foreground" /> Notifications
                </CardTitle>
                <CardDescription>
                  Choose how you want to be notified about screening progress.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <FormField
                  control={form.control}
                  name="notifications.aiInsights"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm font-medium">Analysis updates</FormLabel>
                        <FormDescription className="text-xs">
                          Receive notifications when candidate analysis is complete.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="notifications.emailAlerts"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-sm font-medium">Email summaries</FormLabel>
                        <FormDescription className="text-xs">
                          Receive daily email reports of top-performing candidates.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" disabled={isSaving} className="min-w-[160px]">
                {isSaving ? (
                  <>
                    <Loader2 className="size-4 animate-spin mr-2" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="size-4 mr-2" /> Save settings
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <Card className="border-border">
          <CardHeader className="border-b border-border">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Usage limits
            </h4>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="size-5 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Professional plan</div>
                <div className="text-[10px] text-muted-foreground uppercase">
                  Active subscription
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your account currently includes unlimited automated scanning.
            </p>
            <Separator />
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span>Monthly scan volume</span>
                <span>Unlimited</span>
              </div>
              <div className="h-1.5 w-full bg-muted">
                <div className="h-full w-[15%] bg-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 space-y-4 border border-dashed">
          <h4 className="font-semibold text-base">Support</h4>
          <p className="text-sm text-muted-foreground">
            For assistance with enterprise integration or high-volume hiring, please contact our
            support team.
          </p>
          <a href="mailto:support@lensly.ai" className="inline-block">
            <Button variant="link" className="p-0 h-auto text-sm font-semibold">
              Contact support
            </Button>
          </a>
        </Card>
      </div>
    </div>
  );
}
