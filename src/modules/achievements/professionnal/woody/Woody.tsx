import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import WoodyVideoThumb from "@/assets/images/woody-video-thumb.webp";
import type { Slide } from "@/shared/components/carousel/EmblaCarousel";
import CarouselModal from "@/shared/components/modals/CarouselModal";
import Tooltip from "@/shared/components/Tooltip";
import WoodySVG from "./WoodySVG";
import { getElectionsUs, licenseServeur } from "./woody-carousel.data";

const US_SLIDES: Slide[] = getElectionsUs();
const LICENCE_SLIDES: Slide[] = licenseServeur;

export default function Woody() {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [currentSlides, setCurrentSlides] = useState<Slide[]>([]);

  const openModal = (slides: Slide[]) => {
    setCurrentSlides(slides);
    dialogRef.current?.showModal();
  };

  return (
    <div className="flex flex-col w-full items-center gap-20">
      <Tooltip text={`${t("linkTo")} woody-technologies.com`} place="top">
        <NavLink
          to="https://woody-technologies.com/"
          target="_blank"
          className="flex items-center gap-4 w-fitt self-center"
        >
          <WoodySVG className="h-15" />
        </NavLink>
      </Tooltip>
      <div className="grid grid-cols-1 gap-6 mb-10 lg:grid-cols-2">
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <Tooltip text={t("video")} place="top">
            <div
              className="relative w-full max-w-100 m-auto"
              style={{ paddingTop: "56.25%" }}
            >
              <ReactPlayer
                playing={false}
                controls
                light={WoodyVideoThumb}
                volume={0.3}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src="https://vimeo.com/481159581"
              />
            </div>
          </Tooltip>
        </div>

        <div className="order-2 lg:col-start-2 lg:row-start-1 self-center">
          <p className="body1 ">
            {t("coverage")}
            <span className="body1 text-primary">
              <Tooltip text={t("complete")} place="top">
                <NavLink to="https://lnkd.in/dqvUutT" target="_blank">
                  {t("elections")}
                </NavLink>
              </Tooltip>
            </span>
            {t("achieve")}
          </p>
        </div>

        <div className="order-3 lg:col-start-1 lg:row-start-2 self-center">
          <p className="body1 ">
            <span className="text-primary">{t("interface")}</span>
            {t("include")}
          </p>
        </div>

        <div className="order-4 lg:col-start-2 lg:row-start-2 self-center">
          <Tooltip text={t("video")} place="top">
            <button
              type="button"
              className="block m-auto p-0 border-0 bg-transparent cursor-pointer"
              aria-label={`${t("slider")} : UI Elections Us France 24`}
              onClick={() => openModal(US_SLIDES)}
            >
              <img
                src="https://res.cloudinary.com/ericjuquel94/image/upload/v1638351914/portfolio/woody/Presidentielle_yqd9qb.png"
                alt="UI Elections Us France 24"
                className="m-auto w-full max-w-100"
              />
            </button>
          </Tooltip>
        </div>

        <div className="order-6 lg:col-start-1 lg:row-start-3 self-center">
          <Tooltip text={t("video")} place="top">
            <div className="relative  bg-white/10 p-2 rounded-md w-4/5 m-auto">
              <button
                type="button"
                className="block m-auto p-0 border-0 bg-transparent cursor-pointer"
                aria-label={`${t("slider")} : Serveur de licences`}
                onClick={() => openModal(LICENCE_SLIDES)}
              >
                <img
                  src="https://res.cloudinary.com/ericjuquel94/image/upload/v1638351902/portfolio/woody/licences-blur_s9hryc.png"
                  alt="Serveur de licences"
                  className="m-auto w-full max-w-100"
                />
              </button>
            </div>
          </Tooltip>
        </div>

        <div className="order-5 lg:col-start-2 lg:row-start-3 self-center">
          <p className="body1 ">
            {t("licence")}
            <span className="text-primary">{t("serveur")}</span>
            {t("licenceSuite")}
          </p>
        </div>
      </div>
      <CarouselModal
        dialogRef={dialogRef}
        slides={currentSlides}
        title={t("presidentialGalery")}
        overlay={currentSlides === LICENCE_SLIDES}
      />
    </div>
  );
}
