import type { ReactNode } from "react";

export interface TooltipProps {
  children: ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
  return (
    <div className="relative group">
      {children}
      <div
        role="tooltip"
        id="tooltip-id"
        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white text-gray-800 text-xs rounded py-1 px-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-center "
      >
        {text}
      </div>
    </div>
  );
}
