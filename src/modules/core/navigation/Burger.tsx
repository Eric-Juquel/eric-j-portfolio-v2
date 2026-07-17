import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Heading from "./Heading";
import Navigation from "./Navigation";
import SocialNetworks from "./SocialNetworks";

export default function Burger() {
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  function checkHandler() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <button
        type="button"
        aria-expanded={isChecked}
        aria-controls="mobile-drawer"
        aria-label={t("menu")}
        className="fixed top-4 left-4 z-200 text-center cursor-pointer h-16 w-16 rounded-full bg-transparent"
        onClick={checkHandler}
      >
        <span className={clsx("icon", isChecked && "is-open")}>&nbsp;</span>
      </button>
      <div
        className={clsx(
          "fixed rounded-full top-12 left-12 z-100",
          "h-[0.1rem] w-[0.1rem]",
          "bg-[radial-gradient(rgb(13,24,36),rgb(28,36,48))]",
          "transition-transform duration-800 ease-[cubic-bezier(0.83,0,0.17,1)]",
          isChecked && "scale-[3000]",
        )}
      ></div>
      <div
        id="mobile-drawer"
        aria-hidden={!isChecked}
        inert={!isChecked ? true : undefined}
        className={clsx(
          "fixed z-150 top-0 left-0 p-6",
          "transition-all duration-800 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]",
          isChecked ? "ml-0 w-full" : "-ml-120 w-0",
        )}
      >
        <div className="flex flex-col justify-around items-center h-screen gap-2">
          <div className="w-full max-w-100">
            <Heading closeBurger={checkHandler} />
          </div>
          <div className="w-full max-w-100">
            <Navigation closeBurger={checkHandler} />
          </div>
          <div className="w-full max-w-105">
            <SocialNetworks />
          </div>
        </div>
      </div>
    </div>
  );
}
