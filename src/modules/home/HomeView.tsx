import { useTranslation } from "react-i18next";
import ButtonWave from "@/shared/components/buttons/ButtonWave";
import AchievementsView from "../achievements/AchievementsView";
import SkillsView from "../skills/SkillsView";

export default function HomeView() {
  const { t } = useTranslation();
  return (
    <div id="home" className="flex flex-col items-center w-full gap-10">
      <div className="flex flex-col h-screen justify-center w-full">
        <div className="flex flex-col align-center w-100 md:flex-row md:w-200 ">
          <div className="grid h-50  w-1/3 grid-cols-[repeat(5,3rem)] grid-rows-[repeat(5,3rem)] text-5xl font-capriola">
            <div className="col-[1/3] row-[1/span_3] -ml-[0.8rem] mt-5 text-[7rem] bg-linear-to-b from-title-first-from to-title-first-to bg-clip-text text-transparent">
              E
            </div>
            <div className="col-[2/4] row-[2/span_1] -ml-6 text-center">
              ric
            </div>
            <div className="col-[2/4] row-[3/span_3] -mt-[0.8rem] text-[7rem] bg-linear-to-b from-title-last-from to-title-last-to bg-clip-text text-transparent ">
              J
            </div>
            <div className="col-[3/5] row-[3/span_1] ">uquel</div>
          </div>
          <div className="flex flex-col justify-center">
            <h4>{t("title")}</h4>
          </div>
        </div>
        <h6>{t("subtitle")}</h6>
        <div className="mt-30">
          <ButtonWave text={t("contactMe")} />
        </div>
      </div>

      <SkillsView />
      <AchievementsView />
    </div>
  );
}
