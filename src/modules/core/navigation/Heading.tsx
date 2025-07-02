import { NavLink } from "react-router-dom";
import Tooltip from "../../shared/components/Tooltip";
import Logo from "../../../assets/logos/Logo1.svg?react";
import { useRef, useState } from "react";
import Modal, { type ModalContent } from "../../shared/components/Modal";
import { useTranslation } from "react-i18next";

export interface HeadingProps {
  closeBurger: () => void;
}

export default function Heading({ closeBurger }: HeadingProps) {
  const { t } = useTranslation();

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [modalContent, setModalContent] = useState<ModalContent>({
    title: "",
    description: "",
    documentRef: "",
  });

  // Modal //
  const openCVModalHandler = () => {
    setModalContent({
      title: "CV",
      description: `${t("cv")}  ${t("pdf")} (223Ko)`,
      documentRef: "/files/CV_2024-10-29_Eric_JUQUEL.pdf",
    });

    dialogRef.current?.showModal();
  };
  const openLRModalHandler = () => {
    setModalContent({
      title: "LR",
      description: `${t("lr")}  ${t("pdf")} (299Ko)`,
      documentRef:
        "/files/Lettre de recommandation Woody Technologies pour Eric Juquel.pdf",
    });

    dialogRef.current?.showModal();
  };

  return (
    <div className="w-[90%]  lg:h-90 flex flex-col items-center justify-between">
      <NavLink className="w-full" to="/">
        <div
          className=" flex h-50  lg:flex-col lg:h-80 p-4 justify-between rounded-md hover:bg-gray-700/60"
          onClick={() => {
            closeBurger();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Logo className="h-40 w-40" />
          <div>
            <h2 className="mb-1">Eric</h2>
            <h3>{t("title")}</h3>
          </div>
        </div>
      </NavLink>
      <div className="flex p-2 items-center justify-around w-full">
        <Tooltip text={t("cv")} place="top">
          <button
            aria-describedby="tooltip-id"
            type="button"
            className=" cursor-pointer text-sm text-black bg-secondary hover:bg-secondary-hover px-4 py-2 min-w-16 rounded-sm uppercase transition-colors ease-in-out"
            onClick={openCVModalHandler}
          >
            CV
          </button>
        </Tooltip>
        <Tooltip text={t("lr")} place="top">
          <button
            aria-describedby="tooltip-id"
            type="button"
            className="cursor-pointer text-sm text-black bg-secondary hover:bg-secondary-hover px-4 py-2 min-w-16 rounded-sm uppercase transition-colors ease-in-out"
            onClick={openLRModalHandler}
          >
            LR
          </button>
        </Tooltip>
      </div>
      <Modal ref={dialogRef} modalContent={modalContent} />
    </div>
  );
}
