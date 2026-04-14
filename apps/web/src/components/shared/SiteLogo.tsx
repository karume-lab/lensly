import Logo from "@repo/assets/logo.png";
import { cn } from "@repo/ui/web/lib/utils";
import Image from "next/image";

const SiteLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      alt="Lensly Logo"
      src={Logo}
      className={cn(
        "hover:animate-spin transition-transform duration-300 hover:scale-105",
        className,
      )}
      priority={true}
    />
  );
};

export default SiteLogo;
