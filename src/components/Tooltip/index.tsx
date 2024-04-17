import React from "react";
import { TooltipContent } from "./styles";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipContent>
      {children}

      <div>
        <b>{content}</b>
      </div>
    </TooltipContent>
  );
}
