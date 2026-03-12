// FRAMEWORK COMPONENTS & HOOKS //
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `w-30 h-16 bg-card flex justify-center items-center rounded-sm text-app-content border border-app-content/20 ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
