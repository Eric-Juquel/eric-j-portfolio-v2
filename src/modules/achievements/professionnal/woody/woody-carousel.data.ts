import { t } from "i18next";
import type { Slide } from "@/shared/components/carousel/EmblaCarousel";

export const licenseServeur: Slide[] = [
  {
    id: 1,
    url: "https://res.cloudinary.com/ericjuquel94/image/upload/v1638351902/portfolio/woody/licences-blur_s9hryc.png",
    title: "Licenses",
    subtitle: "",
    alt: "Licenses",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/ericjuquel94/image/upload/v1638351905/portfolio/woody/templates_qiaocw.png",
    title: "Templates",
    subtitle: "",
    alt: "Templates",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/ericjuquel94/image/upload/v1638351897/portfolio/woody/createlicence_vzsvs1.png",
    title: "Create / Edit License",
    subtitle: "",
    alt: "Create / Edit License",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/ericjuquel94/image/upload/v1638351903/portfolio/woody/search-blur_hd8lgj.png",
    title: "Advanced Search",
    subtitle: "",
    alt: "Advanced Search",
  },
];

export const getElectionsUs = (): Slide[] => {
  return [
    {
      id: 1,
      url: "https://res.cloudinary.com/ericjuquel94/image/upload/v1638351914/portfolio/woody/Presidentielle_yqd9qb.png",
      title: t("presidentialTitle"),
      subtitle: t("presidentialSub"),
      alt: t("presidentialTitle"),
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/ericjuquel94/image/upload/v1638351915/portfolio/woody/S%C3%A9nat_r1wmdn.png",
      title: t("senatTitle"),
      subtitle: t("senatSub"),
      alt: t("senatTitle"),
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/ericjuquel94/image/upload/v1638351916/portfolio/woody/Ticker_p9lhan.png",
      title: t("tickerTitle"),
      subtitle: t("tickerSub"),
      alt: t("tickerTitle"),
    },
  ];
};
