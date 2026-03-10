"use client";

import type { ReactNode } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { twMerge } from "tailwind-merge";

interface DescriptionProps {
  children?: ReactNode;
  className?: string;
}

const DrawerDescription: React.FC<DescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={twMerge(`text-muted-foreground text-sm ${className}`)}
    >
      {children}
    </DrawerPrimitive.Description>
  );
};

export default DrawerDescription;
