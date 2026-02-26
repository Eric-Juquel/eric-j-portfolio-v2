import { useTranslation } from "react-i18next";
import SkillBar from "./components/SkillBar";
import { skills } from "./skills.const";

export default function ProgressBox() {
  const { t } = useTranslation();

  return (
    <div className="card-paper">
      <div className="w-fit">
        <h4 className="text-4xl ">{t("languageFramework")}</h4>
      </div>

      <div className="space-y-6 w-full">
        {skills.map((skill) => (
          <SkillBar
            key={skill.label}
            label={skill.label}
            value={skill.value}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
}
