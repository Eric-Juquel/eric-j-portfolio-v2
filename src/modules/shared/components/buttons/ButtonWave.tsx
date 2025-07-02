import { NavLink } from "react-router-dom";

export interface ButtonWaveProps {
  text: string;
}

export default function ButtonWave({ text }: ButtonWaveProps) {
  return (
    <div className="flex justify-center items-center w-50 h-10">
      <div className="absolute w-45 h-15">
        <NavLink
          to="/contact"
          className="group flex w-full text-center bg-transparent text-secondary text-xl capitalize"
        >
          <svg className="absolute left-0 top-0 w-full h-15 ">
            <rect
              x="0"
              y="0"
              fill="none"
              width="100%"
              height="99%"
              className="fill-none stroke-secondary stroke-2 transition-all duration-500 ease-linear [stroke-dasharray:600,0]  group-hover:[stroke-dasharray:100,300]  group-hover:[stroke-dashoffset:120]  group-hover:[transition:all_1.35s_cubic-bezier(0.19,1,0.22,1)]"
            />
          </svg>
          <span className="mt-4 mx-auto translate-y-0 transition-transform duration-300 group-active:translate-y-[3px]">
            {text}
          </span>
        </NavLink>
      </div>
    </div>
  );
}
