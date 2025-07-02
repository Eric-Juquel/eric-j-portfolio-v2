import { useEffect, useRef } from "react";
import Modal from "../../shared/components/Modal";
import { useTranslation } from "react-i18next";

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
