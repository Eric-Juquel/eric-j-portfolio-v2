import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
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
        <div className="order-1 lg:col-start-1 lg:row-start-1 min-[440px]:block   ">
          <Tooltip text={t("video")} place="top">
            <div className="w-100 h-60 m-auto flex items-center justify-center">
              <ReactPlayer
                playing={false}
                controls
                light
                volume={0.3}
                width="25rem"
                height="15rem"
                src="https://vimeo.com/481159581"
              />
            </div>
          </Tooltip>
        </div>

        <div className="order-2 lg:col-start-2 lg:row-start-1 min-[440px]:block self-center">
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

        <div className="order-3 lg:col-start-1 lg:row-start-2 min-[440px]:block self-center">
          <p className="body1 ">
            <span className="text-primary">{t("interface")}</span>
            {t("include")}
          </p>
        </div>

        <div className="order-4 lg:col-start-2 lg:row-start-2 min-[440px]:block self-center">
          <Tooltip text={t("video")} place="top">
            <img
              src="https://res.cloudinary.com/ericjuquel94/image/upload/v1638351914/portfolio/woody/Presidentielle_yqd9qb.png"
              alt="UI Elections Us France 24"
              width={400}
              className="m-auto"
              onClick={() => openModal(US_SLIDES)}
              onKeyDown={(e) => e.key === "Enter" && openModal(US_SLIDES)}
            />
          </Tooltip>
        </div>

        <div className="order-6 lg:col-start-1 lg:row-start-3 min-[440px]:block self-center">
          <Tooltip text={t("video")} place="top">
            <div className="relative  bg-white/10 p-2 rounded-md w-4/5 m-auto">
              <img
                src="https://res.cloudinary.com/ericjuquel94/image/upload/v1638351902/portfolio/woody/licences-blur_s9hryc.png"
                alt="Serveur de licences"
                width={400}
                className="m-auto"
                onClick={() => openModal(LICENCE_SLIDES)}
                onKeyDown={(e) =>
                  e.key === "Enter" && openModal(LICENCE_SLIDES)
                }
              />
            </div>
          </Tooltip>
        </div>

        <div className="order-5 lg:col-start-2 lg:row-start-3 min-[440px]:block self-center">
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
