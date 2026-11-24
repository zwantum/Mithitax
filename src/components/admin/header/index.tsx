"use client";

import React from "react";
import { Bell, Search, User } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="h-16 bg-white border-b border-brand-border px-6 flex items-center justify-between">
      <div className="flex items-center gap-3 w-72">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search enquiries, services, articles..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-brand-border text-xs text-brand-text bg-brand-alt focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-purple"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative p-2 rounded-lg text-brand-muted hover:text-brand-text hover:bg-brand-alt"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-purple" />
        </button>

        <div className="flex items-center gap-2.5 pl-3 border-l border-brand-border">
          <div className="w-8 h-8 rounded-full bg-brand-purple-subtle border border-brand-purple/20 flex items-center justify-center text-brand-purple font-semibold text-xs">
            SA
          </div>
          <div className="hidden sm:block text-left text-xs">
            <div className="font-semibold text-brand-text leading-tight">
              Super Admin
            </div>
            <div className="text-[10px] text-brand-muted">
              admin@mithitax.com
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
