"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  danger?: boolean;
}

export interface DropdownProps {
  label: React.ReactNode;
  items: DropdownItem[];
  className?: string;
  align?: "left" | "right";
}

export function Dropdown({ label, items, className, align = "right" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className={cn("relative inline-block text-left", className)} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium bg-white border border-brand-border rounded-xl text-brand-text hover:bg-brand-alt focus:outline-none transition"
      >
        <span>{label}</span>
        <ChevronDown className="w-3.5 h-3.5 text-brand-muted" />
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute mt-2 w-48 rounded-xl bg-white shadow-dropdown border border-brand-border p-1.5 z-40 animate-in fade-in duration-150",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {items.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition",
                item.danger
                  ? "text-red-600 hover:bg-red-50"
                  : "text-brand-text hover:bg-brand-alt hover:text-brand-purple"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
