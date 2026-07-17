import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import InsideMyRaceVideo from "@/assets/inside-my-race.mp4";
import FROG_LOGO from "@/assets/images/frogdesign_logo.webp";
import ThalesLogo from "@/assets/images/thales_logo.webp";
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
          <img src={FROG_LOGO} alt="frog brand logo" className="w-15 h-auto" />
          <FrogSVG className="h-15" />
        </NavLink>
      </Tooltip>
      <div className="grid grid-cols-1  mb-10 lg:grid-cols-2 gap-20">
        <div className="order-1 lg:col-start-1 lg:row-start-1 self-center">
          <Tooltip text={t("video")} place="top">
            <div
              className="relative w-full max-w-100 m-auto"
              style={{ paddingTop: "56.25%" }}
            >
              <ReactPlayer
                playing={false}
                controls
                volume={0.3}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src={InsideMyRaceVideo}
              />
            </div>
          </Tooltip>
        </div>
        <div className="order-2 lg:col-start-2 lg:row-start-1 self-center">
          <p className="body1 ">
            <span className="text-primary">{t("insideMyRaceHighlight")}</span>
            {t("insideMyRacePost")}
          </p>
        </div>

        <div className="order-3 lg:col-start-1 lg:row-start-2 self-center">
          <p className="body1 ">
            {t("aiTrainingPre")}
            <span className="text-primary">{t("aiTrainingHighlight")}</span>
            {t("aiTrainingPost")}
          </p>
        </div>
        <div className="order-4 lg:col-start-2 lg:row-start-2 self-center">
          <Tooltip text={`${t("linkTo")} www.thalesgroup.com`} place="top">
            <NavLink
              to="https://www.thalesgroup.com/"
              target="_blank"
              className="flex items-center gap-4 w-fitt self-center"
            >
              <img
                src={ThalesLogo}
                alt="thales logo"
                className="m-auto w-full max-w-75"
              />
            </NavLink>
          </Tooltip>
        </div>

        <div className="order-5 lg:col-start-1 lg:row-start-3 self-center">
          <img
            src="https://res.cloudinary.com/ericjuquel94/image/upload/v1738349005/fabrique-digitale.png"
            alt="fabrique digitale ratp"
            className="m-auto w-full max-w-125"
          />
        </div>
        <div className="order-6 lg:col-start-2 lg:row-start-3 self-center">
          <p className="body1 ">
            {t("digitalFactoryPre")}
            <span className="text-primary">{t("digitalFactoryHighlight")}</span>
            {t("digitalFactoryPost")}
          </p>
        </div>

        <div className="order-7 lg:col-start-1 lg:row-start-4 self-center">
          <p className="body1 ">
            <span className="text-primary">{t("bootstrapHighlight")}</span>
            {t("bootstrapPost")}
          </p>
        </div>
        <div className="order-8 lg:col-start-2 lg:row-start-4 self-center">
          <img
            src="https://res.cloudinary.com/ericjuquel94/image/upload/v1738495242/stack-clean-archi_oamiqt.png"
            alt="stack clean archi"
            className="m-auto w-full max-w-87.5"
          />
        </div>
      </div>
    </div>
  );
}

export default Frog;
