"use client";

import type { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface FooterProps {
  children?: ReactNode;
  className?: string;
}

const DrawerFooter: React.FC<FooterProps> = ({ children, className }) => {
  return (
    <div
      data-slot="drawer-footer"
      className={twMerge(
        `gap-2 p-4 mt-auto flex flex-col items-center ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default DrawerFooter;
