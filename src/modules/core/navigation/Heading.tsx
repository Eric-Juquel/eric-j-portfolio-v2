import { NavLink } from "react-router-dom";
import Tooltip from "../../shared/components/Tooltip";
import Logo from "../../../assets/logos/Logo1.svg?react";

export default function Heading() {
  return (
    <div className="w-[90%] h-90 flex flex-col items-center justify-between">
      <NavLink to="/">
        <div className="flex flex-col h-80 p-4 justify-between rounded-md hover:bg-gray-700/60">
          <Logo className="h-40 w-40" />
          <div>
            <h2 className="mb-1">Eric</h2>
            <h3>Développeur web</h3>
          </div>
        </div>
      </NavLink>
      <div className="flex p-2 items-center justify-around w-full">
        <Tooltip text="Telecharger le CV">
          <button
            aria-describedby="tooltip-id"
            type="button"
            className=" cursor-pointer text-sm text-black bg-secondary hover:bg-secondary-hover px-4 py-2 min-w-16 rounded-sm uppercase transition-colors ease-in-out"
          >
            CV
          </button>
        </Tooltip>
        <Tooltip text="Télécharger la recommandation">
          <button
            aria-describedby="tooltip-id"
            type="button"
            className="cursor-pointer text-sm text-black bg-secondary hover:bg-secondary-hover px-4 py-2 min-w-16 rounded-sm uppercase transition-colors ease-in-out"
          >
            LR
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
