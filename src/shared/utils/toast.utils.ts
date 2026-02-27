// utils/toast.ts
import { toast } from "react-toastify";

export const toastSuccess = (message: string) => {
  const style = {
    background:
      getComputedStyle(document.documentElement).getPropertyValue(
        "--color-paper",
      ) || "#1c2430",
    color:
      getComputedStyle(document.documentElement).getPropertyValue(
        "--color-light",
      ) || "#fff",
    border: `1px solid ${getComputedStyle(document.documentElement).getPropertyValue("--color-secondary") || "#4db6ac"}`,
  };
  toast.success(message, { style });
};

export const toastError = (message: string) => {
  const style = {
    background:
      getComputedStyle(document.documentElement).getPropertyValue(
        "--color-paper",
      ) || "#1c2430",
    color:
      getComputedStyle(document.documentElement).getPropertyValue(
        "--color-warning",
      ) || "#ff4080",
    border: `1px solid ${getComputedStyle(document.documentElement).getPropertyValue("--color-warning") || "#ff4080"}`,
  };
  toast.error(message, { style });
};
