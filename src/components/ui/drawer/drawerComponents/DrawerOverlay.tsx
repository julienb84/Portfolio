"use client";
import * as React from "react";

import { Drawer as DrawerPrimitive } from "vaul";
import { twMerge } from "tailwind-merge";

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={twMerge(
        `data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50 ${className}`,
      )}
      {...props}
    />
  );
}

export default DrawerOverlay;
