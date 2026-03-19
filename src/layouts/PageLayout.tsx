// FRAMEWORKS COMPONENTS & HOOKS //
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `min-h-[calc(100vh-130px)] w-screen flex flex-col pt-18 pb-18 ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default PageLayout;
