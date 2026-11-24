"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Layers,
  FileText,
  BookOpen,
  MessageSquare,
  Users,
  HelpCircle,
  Calculator,
  Search,
  Settings,
  Image as ImageIcon,
  Quote,
  Shield,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { name: "Services", href: "/admin/services", icon: Briefcase },
  { name: "Service Categories", href: "/admin/service-categories", icon: Layers },
  { name: "Pages", href: "/admin/pages", icon: FileText },
  { name: "Blog / Insights", href: "/admin/blog", icon: BookOpen },
  { name: "Testimonials", href: "/admin/testimonials", icon: Quote },
  { name: "Clients", href: "/admin/clients", icon: Shield },
  { name: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { name: "Media Library", href: "/admin/media", icon: ImageIcon },
  { name: "Calculators", href: "/admin/calculators", icon: Calculator },
  { name: "SEO Meta", href: "/admin/seo", icon: Search },
  { name: "Users & Roles", href: "/admin/users", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-brand-text text-white flex flex-col justify-between min-h-screen border-r border-gray-800">
      <div>
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              Mithi<span className="text-brand-purple">Tax</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-purple text-white font-semibold">
              Admin
            </span>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-140px)]">
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition",
                  isActive
                    ? "bg-brand-purple text-white shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/60"
                )}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
        <Link href="/" target="_blank" className="hover:text-brand-lime transition">
          View Website →
        </Link>
        <Link href="/login" className="hover:text-red-400 transition flex items-center gap-1">
          <LogOut className="w-3.5 h-3.5" />
          <span>Exit</span>
        </Link>
      </div>
    </aside>
  );
}
