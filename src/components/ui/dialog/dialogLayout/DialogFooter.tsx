"use client";
import * as React from "react";
import { twMerge } from "tailwind-merge";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import Button from "../../Button";

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={twMerge(
        `bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end ${className}`,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          render={
            <Button variant="outline" size="lg">
              Close
            </Button>
          }
        />
      )}
    </div>
  );
}

export default DialogFooter;
