import { useTranslation } from "react-i18next";
import ChipBox from "./ChipBox";
import SkillParagraph from "./components/SkillParagraph";
import ProgressBox from "./ProgressBox";
import { list_1, list_2, list_3, list_4 } from "./skills.const";

export default function SkillsView() {
  const { t } = useTranslation();
  return (
    <div id="skills" className="flex flex-col w-full px-3 pt-20">
      <div className="h-33 w-fit">
        <h4 className="text-6xl">{t("skills")}</h4>
      </div>
      <div className="grid grid-cols-1 gap-6 mb-10 lg:grid-cols-2">
        <SkillParagraph
          label={t("skills-1")}
          list={list_1}
          className="order-2 lg:col-start-1 lg:row-start-1 min-[440px]:block self-center"
        />

        <SkillParagraph
          label={t("skills-2")}
          list={list_2}
          className="order-3 lg:order-0 lg:col-start-1 lg:row-start-2 self-center "
        />

        <SkillParagraph
          label={t("skills-3")}
          list={list_3}
          className="order-5 lg:order-0 lg:col-start-1 lg:row-start-4 self-center"
        />

        <SkillParagraph
          label={t("skills-4")}
          list={list_4}
          className="order-6 lg:order-0 lg:col-start-1 lg:row-start-3 self-center"
        />

        <div className="order-1 lg:order-0 lg:col-start-2 lg:row-start-1 lg:row-span-3 ">
          <ProgressBox />
        </div>

        <div className="order-4 lg:order-0 lg:col-start-2 lg:row-start-4 ">
          <ChipBox />
        </div>
      </div>
    </div>
  );
}
