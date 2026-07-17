import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import VisitCard from "./VisitCard";

export default function ContactView() {
  const { t } = useTranslation();

  return (
    <div id="contact" className="flex flex-col w-full px-3 pt-10 lg:pt-20">
      <div className="h-auto lg:h-33 w-fit flex mb-6 lg:mb-0">
        <h4 className="text-3xl sm:text-4xl lg:text-6xl">{t("contactMe")}</h4>
        <span className="pl-3 text-gray-400">**</span>
      </div>

      <div className="flex flex-col gap-6 xl:grid xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <ContactForm />
        </div>
        <div className="min-w-0 xl:col-span-1">
          <VisitCard />
        </div>
      </div>
    </div>
  );
}
