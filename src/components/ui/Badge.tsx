// FRAMEWORKS COMPONENTS & HOOKS //
import { twMerge } from "tailwind-merge";

const Badge = () => {
  return <></>;
};

type BadgeStateProps = {
  status: "completed" | "canceled" | "pending";
  className?: string;
};

const BadgeState = ({ status, className }: BadgeStateProps) => {
  // Classes Tailwind pour chaque état "variant" du badge
  const statusClasses = {
    completed: {
      container: "bg-completed-500/50 border-completed-600 text-completed-600",
    },
    canceled: {
      container: "bg-canceled-500/50 border-canceled-600 text-canceled-600",
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
