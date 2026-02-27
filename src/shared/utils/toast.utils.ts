import { toast } from "react-toastify";

const getStyle = (bgVar: string, colorVar: string, borderVar: string) => ({
  background:
    getComputedStyle(document.documentElement).getPropertyValue(bgVar) ||
    "#1c2430",
  color:
    getComputedStyle(document.documentElement).getPropertyValue(colorVar) ||
    "#fff",
  border: `1px solid ${getComputedStyle(document.documentElement).getPropertyValue(borderVar) || "#4db6ac"}`,
});

export const toastSuccess = (message: string) => {
  toast.success(message, {
    style: getStyle("--color-paper", "--color-light", "--color-secondary"),
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    style: getStyle("--color-paper", "--color-warning", "--color-warning"),
  });
};

export const toastInfo = (message: string) => {
  toast.info(message, {
    style: getStyle("--color-paper", "--color-light", "--color-secondary"),
  });
};
