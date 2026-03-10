"use client";
import * as React from "react";
import type { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

const DrawerHeader: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <div
      data-slot="drawer-header"
      className={twMerge(
        `gap-0.5 pt-4 pb-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left flex flex-col ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default DrawerHeader;
