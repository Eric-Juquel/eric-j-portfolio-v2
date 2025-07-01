import type { ReactNode } from "react";

export interface TooltipProps {
  children: ReactNode;
  text: string;
  place: "top" | "bottom";
}

export default function Tooltip({ children, text, place }: TooltipProps) {
  const tooltipPlace = place === "top" ? "bottom-full mb-2" : "top-full mt-2";

  return (
    <div className="relative group">
      {children}
      <div
        role="tooltip"
        id="tooltip-id"
        className={`${tooltipPlace} absolute left-1/2 transform -translate-x-1/2  hidden group-hover:block bg-white text-gray-800 text-xs rounded py-1 px-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-center `}
      >
        {text}
      </div>
    </div>
  );
}
