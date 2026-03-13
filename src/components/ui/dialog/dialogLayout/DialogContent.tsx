"use client";

// FRAMEWORKS COMPONENTS & HOOKS //
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// UI //
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

// COMPONENTS //
import Button from "../../Button";
import DialogPortal from "../dialogComponents/DialogPortal";
import DialogOverlay from "../dialogComponents/DialogOverlay";

interface ContentProps {
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

const DialogContent: React.FC<ContentProps> = ({
  children,
  className,
  showCloseButton = true,
}) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={twMerge(
          `bg-background data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-sm ring-1 duration-100 sm:max-w-sm lg:max-w-md 2xl:max-w-150 fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none ${className}`,
        )}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-2 right-2"
                size="icon-sm"
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </Button>
            }
          />
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
};

export default DialogContent;
