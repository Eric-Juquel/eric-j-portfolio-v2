import { type ButtonHTMLAttributes, useState } from "react";

interface ButtonFillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "button" | "submit" | "reset";
}

/**
 * Animated fill button with SVG stroke border effect.
 * On hover: the button fills with the secondary color and the SVG border draws in.
 */
export default function ButtonFill({
  text,
  type = "button",
  className,
  ...props
}: ButtonFillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center w-50 h-40">
      <div className="relative w-45 h-15">
        <button
          type={type}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-45 h-15 cursor-pointer bg-transparent border border-secondary outline-none text-xl font-thin capitalize ${className ?? ""}`}
          style={{
            color: isHovered ? "black" : "var(--color-secondary)",
            boxShadow: isHovered
              ? "inset 0 0 0 2em var(--color-secondary)"
              : "none",
            transition:
              "box-shadow 1s cubic-bezier(0.97, 0.18, 0.9, 0.57) 0.3s, color 1s cubic-bezier(0.97, 0.18, 0.9, 0.57) 0.3s",
          }}
          {...props}
        >
          <svg
            width="180"
            height="60"
            viewBox="0 0 180 60"
            aria-hidden="true"
            className="absolute left-0 top-0 fill-none stroke-white"
            style={{
              strokeDasharray: "150 480",
              strokeDashoffset: isHovered ? -480 : 150,
              transition: "stroke-dashoffset 1s ease-in-out",
            }}
          >
            <polyline points="179,1 179,59 1,59 1,1 179,1" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" />
          </svg>
          <span
            className="transition-transform duration-300"
            style={{ transform: "translateY(0)" }}
          >
            {text}
          </span>
        </button>
      </div>
    </div>
  );
}
