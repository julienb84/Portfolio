"use client";

import type { ReactNode } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { twMerge } from "tailwind-merge";

interface TitleProps {
  children?: ReactNode;
  className?: string;
}

const DrawerTitle: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={twMerge(`text-foreground text-base font-medium ${className}`)}
    >
      {children}
    </DrawerPrimitive.Title>
  );
};

export default DrawerTitle;
