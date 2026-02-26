import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import FROG_LOGO from "@/assets/images/frogdesign_logo.jpg";
import Tooltip from "@/shared/components/Tooltip";
import FrogSVG from "./FrogSVG";

function Frog() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full items-center gap-10">
      <Tooltip text={`${t("linkTo")} www.frog.co`} place="top">
        <NavLink
          to="https://www.frog.co/fr-fr/"
          target="_blank"
          className="flex items-center gap-4 w-fitt self-center"
        >
          <img src={FROG_LOGO} alt="frog brand logo" width={60} />
          <FrogSVG className="h-15" />
        </NavLink>
      </Tooltip>
      <div className="grid grid-cols-1  mb-10 lg:grid-cols-2 gap-20">
        <div className="order-1 lg:col-start-1 lg:row-start-1 min-[440px]:block self-center">
          <p className="body1 ">{t("digitalFactory")}</p>
        </div>

        <div className="order-2 lg:col-start-2 lg:row-start-1 min-[440px]:block self-center">
          <img
            src="https://res.cloudinary.com/ericjuquel94/image/upload/v1738349005/fabrique-digitale.png"
            width={500}
            alt="fabrique digitale ratp"
            className="m-auto"
          />
        </div>

        <div className="order-3 lg:col-start-1 lg:row-start-2 min-[440px]:block self-center">
          <img
            src="https://res.cloudinary.com/ericjuquel94/image/upload/v1738495242/stack-clean-archi_oamiqt.png"
            width={350}
            alt="stack clean archi"
            className="m-auto"
          />
        </div>

        <div className="order-4 lg:col-start-2 lg:row-start-2 min-[440px]:block self-center">
          <p className="body1 ">{t("bootstrap")}</p>
        </div>
      </div>
    </div>
  );
}

export default Frog;
