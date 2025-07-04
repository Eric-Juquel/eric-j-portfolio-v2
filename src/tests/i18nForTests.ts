import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  debug: false,
  resources: {
    fr: {
      translation: {
        home: "Accueuil",
        skills: "Competences",
        achievements: "Réalisations",
        contact: "Contact",
      },
    },
  },
});

export default i18n;
