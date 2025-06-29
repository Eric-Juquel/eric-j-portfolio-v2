import type { RefObject } from "react";

export type ModalContent = {
  title: string;
  description: string;
  documentRef: string;
};

export interface DownloadModalProps {
  ref: RefObject<HTMLDialogElement | null>;
  modalContent: ModalContent;
}

export default function DownloadModal({
  ref,
  modalContent,
}: DownloadModalProps) {
  console.log(modalContent);

  return (
    <dialog
      ref={ref}
      className="fixed bg-paper top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-md p-6 w-[90%] max-w-md  backdrop:bg-black/40 backdrop:backdrop-blur-sm z-50"
    >
      <h2 className="text-center">{modalContent.title}</h2>
      <h6 className=" mb-4 text-center">{modalContent.description}</h6>
      <form method="dialog" className="flex w-full items-center justify-evenly">
        <a
          href={modalContent.documentRef}
          download
          className="button-regular"
          onClick={() => ref?.current?.close()}
        >
          Télecharger
        </a>
        <button className="button-regular">Sortir</button>
      </form>
    </dialog>
  );
}
