import {
  cloneElement,
  isValidElement,
  useId,
  type ReactNode,
} from "react";

export interface TooltipProps {
  children: ReactNode;
  text: string;
  place: "top" | "bottom";
}

export default function Tooltip({ children, text, place }: TooltipProps) {
  const tooltipId = useId();
  const tooltipPlace = place === "top" ? "bottom-full mb-2" : "top-full mt-2";

  const trigger = isValidElement<{ "aria-describedby"?: string }>(children)
    ? cloneElement(children, { "aria-describedby": tooltipId })
    : children;

  return (
    <span className="relative  group">
      {trigger}
      <span
        role="tooltip"
        id={tooltipId}
        className={`${tooltipPlace} absolute left-1/2 transform -translate-x-1/2  hidden group-hover:block group-focus-within:block bg-white text-gray-800 text-xs rounded py-1 px-2 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 text-center font-roboto`}
      >
        {text}
      </span>
    </span>
  );
}
