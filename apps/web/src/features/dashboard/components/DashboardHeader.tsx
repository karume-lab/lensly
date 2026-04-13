import { Separator } from "@repo/ui/web/components/ui/separator";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const DashboardHeader = ({ title, subtitle, children }: DashboardHeaderProps) => {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
          {subtitle && <p className="text-muted-foreground text-base">{subtitle}</p>}
        </div>
        {children && <div className="flex items-center gap-3">{children}</div>}
      </div>
      <Separator />
    </div>
  );
};

export default DashboardHeader;
