import { NavLink, useLocation } from "react-router-dom";
import { APP_ROUTES } from "../routes";
import { scrollToTopHandler } from "../../shared/utils";
import "./navigation.css";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="text-[1rem] w-full">
      <ul>
        {Object.values(APP_ROUTES).map((item) => {
          const isActive = item.href === location.pathname;
          return (
            <li
              key={item.label}
              className="relative group overflow-hidden nav-item"
            >
              <NavLink
                to={item.href}
                onClick={scrollToTopHandler}
                className=" relative flex text-center text-disabled py-4 px-18 z-10 items-center transition-colors ease-in-out hover:text-medium"
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
