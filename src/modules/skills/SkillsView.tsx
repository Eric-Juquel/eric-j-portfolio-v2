import { useTranslation } from "react-i18next";
import ChipBox from "./ChipBox";
import ProgressBox from "./ProgressBox";
import SkillParagraph from "./SkillParagraph";
import { list_1, list_2, list_3, list_4 } from "./skills.const";

export default function SkillsView() {
  const { t } = useTranslation();
  return (
    <div id="skills" className="flex flex-col w-full px-3 py-5">
      <div className="h-33 w-fit">
        <h4 className="text-6xl">{t("skills")}</h4>
      </div>
      <div className="grid grid-cols-1 gap-6 mb-10 lg:grid-cols-2 lg:grid-rows-4 lg:gap-10 lg:mb-36">
        <SkillParagraph
          label={t("skills-1")}
          list={list_1}
          className="order-2 lg:col-start-1 lg:row-start-1 hidden min-[440px]:block"
        />

        <SkillParagraph
          label={t("skills-2")}
          list={list_2}
          className="order-3 lg:order-none lg:col-start-1 lg:row-start-2"
        />

        <SkillParagraph
          label={t("skills-3")}
          list={list_3}
          className="order-5 lg:order-none lg:col-start-1 lg:row-start-3"
        />

        <SkillParagraph
          label={t("skills-4")}
          list={list_4}
          className="order-6 lg:order-none lg:col-start-1 lg:row-start-4"
        />

        <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 self-start">
          <ProgressBox />
        </div>

        <div className="order-4 lg:order-none lg:col-start-2 lg:row-start-3 ">
          <ChipBox />
        </div>
      </div>
    </div>
  );
}
