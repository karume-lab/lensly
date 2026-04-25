import { Separator } from "@repo/ui/web/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@repo/ui/web/components/ui/sidebar";
import { TooltipProvider } from "@repo/ui/web/components/ui/tooltip";
import { DynamicBreadcrumbs } from "@/components/shared/DynamicBreadcrumbs";
import { ThemeSwitch } from "@/components/shared/ThemeSwitch";
import { EmailVerificationBanner } from "@/features/auth/components/EmailVerificationBanner";
import { DashboardSidebar } from "@/features/dashboard/components/DashboardSidebar";
import { NotificationBell } from "@/features/dashboard/components/NotificationBell";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b border-border/40 backdrop-blur-sm sticky top-0 z-20 px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
              <DynamicBreadcrumbs />
            </div>
            <div className="flex items-center gap-2">
              <ThemeSwitch />
              <NotificationBell />
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-8 p-4 md:p-8 pt-6">
            <div className="w-full max-w-7xl mx-auto">
              <EmailVerificationBanner />
              {children}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default DashboardLayout;
