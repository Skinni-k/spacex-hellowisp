type snackbar = {
  title: string;
  severity: "success" | "info" | "warning" | "error";
  show: boolean;
};

export type NotificationsStateType = {
  snackbar: snackbar;
};
