"use client";

import { twMerge } from "tailwind-merge";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={twMerge(
        `text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3 ${className}`,
      )}
      {...props}
    />
  );
}

export default DialogDescription;
