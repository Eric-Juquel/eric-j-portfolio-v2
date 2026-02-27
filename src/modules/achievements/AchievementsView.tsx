import { useTranslation } from "react-i18next";
import Divider from "@/shared/components/Divider";
import LineshopCard from "./personnal/lineshop/LineshopCard";
import TrainingSites from "./personnal/trainig-sites/TrainingSites";
import Frog from "./professionnal/frog/Frog";
import Woody from "./professionnal/woody/Woody";

function AchievementsView() {
  const { t } = useTranslation();

  return (
    <div id="achievements" className="flex flex-col  w-full px-3  pt-20 gap-20">
      <div className="h-33 w-fit">
        <h4 className="text-6xl">{t("achievements")}</h4>
      </div>

      <section className=" card-paper relative">
        <div className="self-end relative -top-9 mr-10 bg-[linear-gradient(to_bottom,rgba(28,36,48,0)_0%,rgba(28,36,48,0)_49%,rgb(28,36,48)_58%)]     ">
          <h4 className=" text-secondary text-3xl">{t("professionals")}</h4>
        </div>

        <Frog />
        <Divider />
        <Woody />
      </section>
      <section className=" card-paper relative">
        <div className="self-end relative -top-9 mr-10 bg-[linear-gradient(to_bottom,rgba(28,36,48,0)_0%,rgba(28,36,48,0)_49%,rgb(28,36,48)_58%)]     ">
          <h4 className=" text-secondary text-3xl">{t("training")}</h4>
        </div>

        <LineshopCard
          iframeUrl="https://lineshopgaming.vercel.app/"
          imageUrl="https://res.cloudinary.com/ericjuquel94/image/upload/v1638363590/portfolio/lineshop/lineshop-home_nssvt5_ahznme.webp"
          title="LineShop Gaming - MERN stack"
          subtitle={t("lineshopDesc")}
          visitUrl="https://lineshopgaming.vercel.app/"
        />
        <Divider />
        <TrainingSites />
      </section>
    </div>
  );
}

export default AchievementsView;
