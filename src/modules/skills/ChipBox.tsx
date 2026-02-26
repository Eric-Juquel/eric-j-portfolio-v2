import { useTranslation } from "react-i18next";
import Chip from "./components/Chip";
import { libraries1, libraries2 } from "./skills.const";

export default function ChipBox() {
  const { t } = useTranslation();

  return (
    <div className="card-paper">
      <div className="w-fit">
        <h4 className="text-4xl ">{t("libraries")}</h4>
      </div>

      <div className="flex justify-between w-full px-8 ">
        {libraries1.map((library) => (
          <Chip
            key={library.label}
            label={library.label}
            color={library.color}
          />
        ))}
      </div>
      <div className="flex justify-around w-full ">
        {libraries2.map((library) => (
          <Chip
            key={library.label}
            label={library.label}
            color={library.color}
          />
        ))}
      </div>
    </div>
  );
}
