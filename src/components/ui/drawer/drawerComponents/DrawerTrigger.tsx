"use client";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

import { Drawer as DrawerPrimitive } from "vaul";

interface TriggerProps {
  children: ReactNode;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | "link";
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg";
}

const DrawerTrigger: React.FC<TriggerProps> = ({
  children,
  className,
  variant = "outline",
  size = "lg",
}) => {
  // Variant Classes
  const variantClasses = {
    default: "bg-app-background text-app-content hover:bg-hovercolor",
    outline:
      "border-border text-secondary-foreground/70 bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/70 aria-expanded:bg-muted aria-expanded:text-foreground",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/70 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
    ghost:
      "hover:bg-muted text-secondary-foreground/70 hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
    destructive:
      "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
    link: "text-primary underline-offset-4 hover:underline",
  };
  // Size Classes
  const sizeClasses = {
    default:
      "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
    xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
    sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
    lg: "h-9 gap-2 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
    icon: "size-8",
    "icon-xs":
      "size-6 rounded-[min(var(--radius-sm),10px)] [&_svg:not([class*='size-'])]:size-3",
    "icon-sm": "size-7 rounded-[min(var(--radius-sm),12px)] ",
    "icon-lg": "size-9",
  };

  return (
    <DrawerPrimitive.Trigger
      data-slot="drawer-trigger"
      className={twMerge(
        `inline-flex justify-center items-center border border-transparent rounded-sm bg-clip-padding text-sm font-medium whitespace-nowrap ${variantClasses[variant]} ${sizeClasses[size]} ${className}`,
      )}
    >
      {children}
    </DrawerPrimitive.Trigger>
  );
};

export default DrawerTrigger;
