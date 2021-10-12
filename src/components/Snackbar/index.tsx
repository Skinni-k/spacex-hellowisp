import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { getNotificationState } from "../../redux/selectors";
import { HIDE_SNACKBAR_NOTIFICATION } from "../../redux/constants";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const SnackbarNotification = (): ReactElement => {
  const dispatch = useDispatch();

  const {
    snackbar: { title, severity, show },
  } = useSelector(getNotificationState);

  return (
    <Snackbar
      data-testid="snackbar-container"
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={show}
      autoHideDuration={2 * 1000}
      onClose={() =>
        dispatch({
          type: HIDE_SNACKBAR_NOTIFICATION,
          payload: { title, severity },
        })
      }
    >
      <Alert
        data-testid={severity}
        variant="filled"
        onClose={() =>
          dispatch({
            type: HIDE_SNACKBAR_NOTIFICATION,
            payload: { title, severity },
          })
        }
        severity={severity}
      >
        {title}
      </Alert>
    </Snackbar>
  );
};
