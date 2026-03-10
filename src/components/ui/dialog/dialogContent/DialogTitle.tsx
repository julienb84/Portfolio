"use client";

import { twMerge } from "tailwind-merge";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={twMerge(`text-base leading-none font-medium ${className}`)}
      {...props}
    />
  );
}

export default DialogTitle;
