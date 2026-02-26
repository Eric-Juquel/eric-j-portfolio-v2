import { useEffect, useState } from "react";

export interface SkillBarProps {
  label: string;
  value: number;
  color: string;
}

function SkillBar({ label, value, color }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 200);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="space-y-3 w-full">
      <div className="flex justify-between items-center">
        <span className="text-2xl  text-light tracking-tight">{label}</span>
        <span className="text-sm text-disabled">{value}%</span>
      </div>

      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: `${width}%`,
            background: color,
            boxShadow: `0 0 6px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
