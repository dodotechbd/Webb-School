import Swal from "sweetalert2";

const Toast = (type, message) => {
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  }).fire({
    icon: type,
    title: message,
  });
};

export const successToast = (message) => {
  Toast("success", message);
};
export const errorToast = (message) => {
  Toast("error", message);
};
export const warnToast = (message) => {
  Toast("warning", message);
};
