export interface DownloadModalProps {
  title: string;
  description: string;
  documentRef: string;
}

export default function DownloadModal({
  title,
  description,
  documentRef,
}: DownloadModalProps) {
  return (
    <dialog>
      <h2>{title}</h2>
      <h6>{description}</h6>
      <form
        method="dialog"
        className="felx w-full items-center justify-evenly "
      >
        <a href={documentRef} download>
          <button>Télecharger</button>
        </a>
        <button>Sortir</button>
      </form>
    </dialog>
  );
}
