"use client";

import { authClient } from "@repo/auth/client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@repo/ui/web/components/ui/sidebar";
import { Briefcase, LayoutDashboard, PlusCircle, Settings, User, Zap } from "lucide-react";
import { NavMain, NavUser } from "@/components/shared/SidebarComponents";
import SiteLogo from "@/components/shared/SiteLogo";

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    url: "/dashboard/jobs",
    icon: Briefcase,
  },
  {
    title: "New Job",
    url: "/dashboard/jobs/new",
    icon: PlusCircle,
  },
  {
    title: "History",
    url: "/dashboard/history",
    icon: Zap,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export const DashboardSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { data: session, isPending } = authClient.useSession();
  const { state } = useSidebar();

  const user = session?.user
    ? {
        name: session.user.name,
        email: session.user.email,
        avatar: session.user.image ?? "",
      }
    : null;

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b border-border/50">
        <div className="flex items-center gap-3 px-6 py-6 transition-all duration-200 group-data-[collapsible=icon]:px-2 group-data-[collapsible=icon]:justify-center h-20">
          <SiteLogo
            className={`w-auto object-contain shrink-0 transition-all duration-200 ${isCollapsed ? "h-10" : "h-12"}`}
          />
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-semibold text-lg tracking-tight leading-none">Lensly</span>
            <span className="text-xs text-muted-foreground mt-0.5">AI Hiring Platform</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        {isPending ? (
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="h-8 w-8 animate-pulse bg-sidebar-accent" />
            <div className="flex-1 space-y-1">
              <div className="h-3 w-20 animate-pulse rounded bg-sidebar-accent" />
              <div className="h-2 w-24 animate-pulse rounded bg-sidebar-accent" />
            </div>
          </div>
        ) : (
          user && <NavUser user={user} showReturnToTasks />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
