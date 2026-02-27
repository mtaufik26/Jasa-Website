import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

const TooltipWrapper = ({ children, content, side = "top", sideOffset = 8 }) => {
  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Content
          side={side}
          className="bg-gray-900 text-white text-xs px-3 py-2 rounded-sm border border-gray-800 max-w-xs z-50"
          sideOffset={sideOffset}
        >
          {content}
          <Tooltip.Arrow className="fill-gray-900" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipWrapper;