// FRAMEWORKS COMPONENTS & HOOKS //
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ContentWrapper({
  children,
  className,
}: ContentWrapperProps) {
  return (
    <div
      className={twMerge(`mt-21 md:mt-28 lg:mt-28 lg:wrapper1 ${className}`)}
    >
      {children}
    </div>
  );
}
