import { Separator } from "@repo/ui/web/components/ui/separator";
import { cn } from "@repo/ui/web/lib/utils";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const DashboardHeader = ({ title, subtitle, className }: DashboardHeaderProps) => {
  return (
    <div className={cn("space-y-4 mb-8", className)}>
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
        {subtitle && <p className="text-muted-foreground text-base">{subtitle}</p>}
      </div>
      <Separator />
    </div>
  );
};

export default DashboardHeader;
