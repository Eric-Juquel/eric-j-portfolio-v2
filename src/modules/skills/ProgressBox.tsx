import { useTranslation } from "react-i18next";

export default function ProgressBox() {
  const { t } = useTranslation();

  return (
    <div className="card-paper">
      <h4>{t("languageFramework")}</h4>
    </div>
  );
}
