import { useState } from "react";
import Heading from "./Heading";
import Navigation from "./Navigation";
import SocialNetworks from "./SocialNetworks";

export default function Burger() {
  const [isChecked, setIsChecked] = useState(false);

  function checkHandler() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <input
        id="navi"
        type="checkbox"
        className="peer hidden"
        checked={isChecked}
        readOnly
      />
      <label
        htmlFor="navi"
        className="fixed top-4 left-4 z-200 text-center cursor-pointer h-16 w-16 rounded-full bg-transparent"
        onClick={checkHandler}
      >
        <span className="icon peer-checked:bg-transparent">&nbsp;</span>
      </label>
      <div className="fixed rounded-full h-[0.1rem] w-[0.1rem] top-12 left-12 z-100 bg-[radial-gradient(rgb(13,24,36),rgb(28,36,48))] transition-transform duration-[800ms] ease-[cubic-bezier(0.83,0,0.17,1)] peer-checked:scale-[3000] "></div>
      <div className="fixed z-150 top-0 left-0 -ml-120 p-6 w-0 transition-all duration-[800ms] ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] peer-checked:ml-0 peer-checked:w-full">
        <div className="flex flex-col justify-around items-center h-[100vh] gap-2">
          <div className="w-100">
            <Heading closeBurger={checkHandler} />
          </div>
          <div className="w-100">
            <Navigation closeBurger={checkHandler} />
          </div>
          <div className="w-105">
            <SocialNetworks />
          </div>
        </div>
      </div>
    </div>
  );
}
