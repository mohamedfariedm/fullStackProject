'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, Box, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "#", label: "Dashboard", icon: Home },
  { href: "#", label: "Products", icon: Box },
  { href: "#", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] bg-gray-800  text-gray-200 flex flex-col">
      <div className="p-6 text-xl font-semibold border-b border-gray-700">
        My Dashboard
      </div>
      <nav className="flex flex-col p-4 gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "p-3 rounded-md flex items-center gap-3 transition",
              pathname === link.href ? "bg-gray-700" : "hover:bg-gray-700"
            )}
          >
            <link.icon className="w-5 h-5" />
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
