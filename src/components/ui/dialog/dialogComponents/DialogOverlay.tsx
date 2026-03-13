"use client";
// FRAMEWORKS COMPONENTS & HOOKS //
import { twMerge } from "tailwind-merge";

// UI //
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

function DialogOverlay({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={twMerge(
        `data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50 ${className}`,
      )}
      {...props}
    />
  );
}

export default DialogOverlay;
