"use client";

// FRAMEWORKS COMPONENTS & HOOKS //
import * as React from "react";
import { twMerge } from "tailwind-merge";

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={twMerge(`gap-2 flex flex-col ${className}`)}
      {...props}
    />
  );
}

export default DialogHeader;
