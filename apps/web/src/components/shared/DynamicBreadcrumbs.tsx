"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/web/components/ui/breadcrumb";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import React from "react";

export function DynamicBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

          const isNonLinkable = segment === "candidates" || segment === "(protected)";

          return (
            <React.Fragment key={href}>
              <BreadcrumbItem>
                {isLast || isNonLinkable ? (
                  <BreadcrumbPage
                    className={`font-bold text-foreground capitalize ${isNonLinkable ? "font-normal text-muted-foreground" : ""}`}
                  >
                    {title}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={href as Route}
                    className="capitalize transition-colors hover:text-foreground"
                  >
                    {title}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
