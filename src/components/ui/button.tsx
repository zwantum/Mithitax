import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "lime" | "danger";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      withArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-full gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-full gap-2",
      lg: "text-base px-6 py-3.5 rounded-full gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-brand-purple text-white hover:bg-brand-purple-hover shadow-sm hover:shadow-md",
      secondary:
        "bg-white text-brand-text border border-brand-border hover:bg-brand-alt hover:border-gray-300 shadow-sm",
      outline:
        "bg-transparent text-brand-purple border border-brand-purple/40 hover:bg-brand-purple-light hover:border-brand-purple",
      ghost:
        "bg-transparent text-brand-text hover:bg-brand-alt hover:text-brand-purple",
      lime:
        "bg-brand-lime text-brand-text font-semibold hover:bg-[#a6d812] shadow-sm",
      danger:
        "bg-red-600 text-white hover:bg-red-700 shadow-sm",
    };

    const combinedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        <span>{children}</span>
        {withArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={cn(combinedClasses, "group")}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cn(combinedClasses, "group")} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
