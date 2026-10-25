"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "category" | "active" | "outline" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-200";

    const variants = {
      default: "bg-cream-200 text-dark-700",
      category: "bg-white/80 text-dark-700 border border-dark-200 backdrop-blur-sm hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 cursor-pointer",
      active: "bg-orange-500 text-white",
      outline: "border-2 border-dark-200 text-dark-700 bg-transparent hover:bg-dark-50",
      success: "bg-green-50 text-green-700 border border-green-200",
      warning: "bg-orange-50 text-orange-700 border border-orange-200",
      error: "bg-red-50 text-red-700 border border-red-200",
    };

    const sizes = {
      sm: "px-2.5 py-1 text-xs",
      md: "px-3 py-1 text-sm",
      lg: "px-4 py-1.5 text-base",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";