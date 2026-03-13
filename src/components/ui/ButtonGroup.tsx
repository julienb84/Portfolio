import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { twMerge } from "tailwind-merge";

import Separator from "./Separator";

function ButtonGroup({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & { orientation: "horizontal" | "vertical" }) {
  // Orientation Classes //
  const orientationClasses = {
    horizontal:
      "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! *:data-slot:rounded-r-none [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0",
    vertical:
      "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! flex-col *:data-slot:rounded-b-none [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0",
  };

  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={twMerge(
        `has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 ${orientationClasses[orientation]} ${className}`,
      )}
      {...props}
    />
  );
}

function ButtonGroupText({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: twMerge(
          `bg-muted gap-2 rounded-lg border px-2.5 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none ${className}`,
        ),
      },
      props,
    ),
    render,
    state: {
      slot: "button-group-text",
    },
  });
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={twMerge(
        `bg-input relative self-stretch data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto ${className}`,
      )}
      {...props}
    />
  );
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
