import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Modal from "@/shared/components/modals/Modal";

export default function NotFound() {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  });

  return (
    <div>
      <Modal
        ref={dialogRef}
        modalContent={{ title: t("nftitle"), description: t("nfdescript") }}
      />
    </div>
  );
}
