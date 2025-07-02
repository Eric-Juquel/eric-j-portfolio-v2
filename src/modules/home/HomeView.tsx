import { useTranslation } from "react-i18next";
import ButtonWave from "../shared/components/buttons/ButtonWave";

export default function HomeView() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex align-center">
        <div className="grid  w-1/3 [grid-template-columns:repeat(5,3rem)] [grid-template-rows:repeat(5,3rem)] text-5xl font-capriola">
          <div className="[grid-column:1/3] [grid-row:1/span_3] -ml-[0.8rem] mt-5 text-[7rem] bg-gradient-to-b from-title-first-from to-title-first-to bg-clip-text text-transparent">
            E
          </div>
          <div className="[grid-column:2/4] [grid-row:2/span_1] -ml-[1.5rem] text-center">
            ric
          </div>
          <div className="[grid-column:2/4] [grid-row:3/span_3] -mt-[0.8rem] text-[7rem] bg-gradient-to-b from-title-last-from to-title-last-to bg-clip-text text-transparent ">
            J
          </div>
          <div className="[grid-column:3/5] [grid-row:3/span_1] ">uquel</div>
        </div>
        <div className="flex flex-col justify-center">
          <h4>{t("title")}</h4>
        </div>
      </div>
      <h6 className="-mt-2">{t("subtitle")}</h6>
      <div className="mt-30">
        <ButtonWave text={t("contactMe")} />
      </div>
    </div>
  );
}
