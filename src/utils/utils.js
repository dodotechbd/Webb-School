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

export const getTimeAgo = (dateData) => {
  const date = new Date(dateData);
  const now = new Date();
  const diff = Math.abs(now.getTime() - date.getTime()) / 1000;

  if (diff < 60) {
    return `${Math.floor(diff)} seconds ago`;
  } else if (diff < 60 * 60) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (diff < 60 * 60 * 24) {
    const hours = Math.floor(diff / (60 * 60));
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (diff < 60 * 60 * 24 * 7) {
    const days = Math.floor(diff / (60 * 60 * 24));
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (diff < 60 * 60 * 24 * 30) {
    const weeks = Math.floor(diff / (60 * 60 * 24 * 7));
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (diff < 60 * 60 * 24 * 365) {
    const months = Math.floor(diff / (60 * 60 * 24 * 30));
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(diff / (60 * 60 * 24 * 365));
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
};

export const getFirebaseErrorMessage = (e) => {
  if (e?.code == "auth/user-not-found") return "User not found!";
  if (e?.code == "auth/invalid-password") return "Invalid Password!";
  if (e?.code == "auth/wrong-password") return "Wrong Password!";
  if (e?.code == "auth/email-already-in-use") return "Email already in use.";
  return e?.message || "Something went wrong. Please try again.";
};
