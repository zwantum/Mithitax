import React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, required, id, children, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="text-xs sm:text-sm font-medium text-brand-text flex items-center justify-between"
          >
            <span>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </span>
          </label>
        )}
        <select
          id={selectId}
          ref={ref}
          className={cn(
            "w-full px-3.5 py-2.5 bg-white rounded-xl border border-brand-border text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition disabled:opacity-50",
            error && "border-red-400 focus:ring-red-400",
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && (
          <span className="text-xs text-red-600 mt-0.5 font-medium">{error}</span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
