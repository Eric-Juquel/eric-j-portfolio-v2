import { useTranslation } from "react-i18next";
import Frog from "./professionnal/Frog";
import Woody from "./professionnal/Woody";

function AchievementsView() {
  const { t } = useTranslation();

  return (
    <div id="achievements" className="flex flex-col  w-full px-3 py-5 gap-20">
      <div className="h-33 w-fit">
        <h4 className="text-6xl">{t("achievements")}</h4>
      </div>

      <section className=" card-paper relative">
        <div className="self-end relative -top-9 mr-10 bg-[linear-gradient(to_bottom,rgba(28,36,48,0)_0%,rgba(28,36,48,0)_49%,rgb(28,36,48)_58%)]     ">
          <h4 className=" text-secondary text-3xl">{t("professionals")}</h4>
        </div>

        <Frog />
        <div className="my-6 h-px bg-gray-600 w-2/3"></div>
        <Woody />
      </section>
      <section className=" card-paper relative">
        <div className="self-end relative -top-9 mr-10 bg-[linear-gradient(to_bottom,rgba(28,36,48,0)_0%,rgba(28,36,48,0)_49%,rgb(28,36,48)_58%)]     ">
          <h4 className=" text-secondary text-3xl">{t("training")}</h4>
        </div>
      </section>
    </div>
  );
}

export default AchievementsView;
