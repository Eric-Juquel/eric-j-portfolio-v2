import { useTranslation } from "react-i18next";

export default function Languages() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const isFrench = currentLang === "fr";
  const isEnglish = currentLang === "en";
  const languageButtonCommon =
    "cursor-pointer py-1 px-2.5 transition-all ease-in-out";

  const frButtonClass = `rounded-l-sm ${languageButtonCommon}  ${
    isFrench
      ? "text-black bg-secondary hover:bg-secondary-hover"
      : "text-secondary border border-secondary/50"
  }`;

  const enButtonClass = `rounded-r-sm ${languageButtonCommon}  ${
    isEnglish
      ? "text-black bg-secondary hover:bg-secondary-hover"
      : "text-secondary border border-secondary/50"
  }`;

  return (
    <div className="inline-flex rounded-sm min-w-10  divide-x divide-transparent">
      <button
        className={frButtonClass}
        onClick={() => i18n.changeLanguage("fr")}
      >
        FR
      </button>
      <button
        className={enButtonClass}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
