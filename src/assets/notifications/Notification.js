import { toast } from "react-toastify";

export const notifyWarnBeforeSubmit = () =>
  toast.warn("Please fill out the form first");

