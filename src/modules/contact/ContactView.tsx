import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import VisitCard from "./VisitCard";

export default function ContactView() {
  const { t } = useTranslation();

  return (
    <div id="contact" className="flex flex-col w-full px-3 pt-20">
      <div className="h-33 w-fit flex">
        <h4 className="text-6xl">{t("contactMe")}</h4>
        <span className="pl-3 text-gray-400">**</span>
      </div>

      <div className="flex flex-wrap justify-between ">
        <div className="w-2/3 min-w-200 mb-10">
          <ContactForm />
        </div>
        <div className="w-1/3 min-w-100">
          <VisitCard />
        </div>
      </div>
    </div>
  );
}
