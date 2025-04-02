"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: any;
}

export default function NavLink({ href, children, className, style }: NavLinkProps) {
  const pathname = usePathname();
  // For Arabic, remove the "/ar" prefix for comparison since Arabic is the default.
  const normalizedHref = href.startsWith("/ar") ? href.replace("/ar", "") : href;
  const isActive = normalizedHref === pathname;

  console.log("HREF :", href);
  console.log("Normalized HREF :", normalizedHref);
  console.log("PathName", pathname);

  return (
    <Link
      href={href}
      className={cn(
        "relative",
        isActive && (href === "/" || href === "/en")
          ? "font-semibold text-[#f8992f] bukra-semi-bold"
          : isActive
          ? "text-[#f8992f]"
          : "text-white",
        className
      )}
      style={style}
    >
      {children}

    </Link>
  );
}
