// FRAMEWORKS COMPONENTS & HOOKS //
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div
      className={twMerge(`mt-22 md:mt-28 lg:mt-28 lg:wrapper1 ${className}`)}
    >
      {children}
    </div>
  );
}
