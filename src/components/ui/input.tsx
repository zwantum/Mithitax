import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, required, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs sm:text-sm font-medium text-brand-text flex items-center justify-between"
          >
            <span>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </span>
          </label>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            "w-full px-3.5 py-2.5 bg-white rounded-xl border border-brand-border text-sm text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition disabled:opacity-50 disabled:bg-brand-alt",
            error && "border-red-400 focus:ring-red-400",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-600 mt-0.5 font-medium">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
