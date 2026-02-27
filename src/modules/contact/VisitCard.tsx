import { AtSign, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Tooltip from "@/shared/components/Tooltip";

export default function VisitCard() {
  const { t } = useTranslation();

  return (
    <div className="card-paper font-montserrat w-120 max-w-full  mx-auto items-start">
      <div className="flex flex-col">
        <h2>Eric Juquel</h2>
        <h5 className="body1 font-thin text-medium"> {t("subtitle")}</h5>
      </div>
      <div className="flex flex-col">
        <p className="body1">Paris</p>
        <p className="body1">France</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-warning">
          <Phone size={18} fill="var(--color-warning)" />
          <span>+33 6 28 90 58 89</span>
        </div>
        <Tooltip text={t("email")} place="bottom">
          <div className="flex items-center gap-2 text-secondary">
            <AtSign size={18} />
            <span>ericjuquel94@gmail.com</span>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
