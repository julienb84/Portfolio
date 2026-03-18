// FRAMEWORKS COMPONENTS & HOOKS //
import { Children, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  className?: string;
}

const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  // Tailwind variant classes
  const variantClasses = {
    default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
    secondary:
      "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
    outline:
      "border-border text-app-content [a]:hover:bg-muted [a]:hover:text-muted-foreground",
    ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
    link: "text-primary underline-offset-4 hover:underline",
  };

  return (
    <div
      className={twMerge(
        `h-8 gap-1 rounded-4xl border border-transparent px-2 py-0.5 font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none ${variantClasses[variant]} ${className}`,
      )}
    >
      <span>{children}</span>
    </div>
  );
};

interface BadgeStateProps {
  status: "completed" | "canceled" | "pending";
  className?: string;
}

const BadgeState = ({ status, className }: BadgeStateProps) => {
  // Tailwind variant classes depending of badge status
  const statusClasses = {
    completed: {
      container:
        "bg-success/10 [a]:hover:bg-success/20 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 text-success dark:bg-success/20",
    },
    canceled: {
      container:
        "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
    },
    pending: {
      container: "bg-pending-300/70 border border-pending-400 text-pending-600",
    },
  };

  return (
    <div
      className={twMerge(
        `w-32 h-8 border ${statusClasses[status].container} font-semibold rounded-2xl flex justify-center items-center ${className}`,
      )}
    >
      <span>{status}</span>
    </div>
  );
};

export { Badge, BadgeState };
