import { NavLink, useLocation } from "react-router-dom";
import { scrollToTopHandler } from "../../shared/utils";
import { APP_ROUTES } from "../routes";
import "./navigation.css";
import { useTranslation } from "react-i18next";

export interface NavigationProps {
  closeBurger?: () => void;
}

export default function Navigation({ closeBurger }: NavigationProps) {
  const { t } = useTranslation();
  const location = useLocation();

  function navigationHandler() {
    closeBurger?.();
    scrollToTopHandler();
  }

  return (
    <nav className="text-[1rem] w-full ">
      <ul>
        {Object.values(APP_ROUTES).map((item) => {
          const isActive = item.href === location.pathname;
          return (
            <li
              key={item.label}
              className="relative group overflow-hidden nav-item"
            >
              <NavLink
                data-testid={`navigation-link-to-${item.label}`}
                to={item.href}
                onClick={navigationHandler}
                className=" relative flex justify-center  text-xl lg:text-[1rem] text-disabled py-4 px-18 z-10 items-center transition-colors ease-in-out hover:text-medium"
                style={{
                  color: isActive ? "rgba(255, 255, 255, 0.9)" : "",
                  backgroundColor: isActive ? "rgba(0,0,0, 0.3)" : "",
                }}
              >
                <span className="capitalize">{t(item.label)}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
