import {
  SHOW_SNACKBAR_NOTIFICATION,
  HIDE_SNACKBAR_NOTIFICATION,
} from "../../constants";
import { NotificationsStateType } from "../../../types/notifications";
import { PayloadType } from "../../../types/state";

const initialState: NotificationsStateType = {
  snackbar: { title: "", severity: "success", show: false },
};

// eslint-disable-next-line
export default (
  state = initialState,
  action: PayloadType
): NotificationsStateType => {
  switch (action.type) {
    case SHOW_SNACKBAR_NOTIFICATION:
      const { title, severity } = action.payload;
      return {
        ...state,
        snackbar: { title, severity, show: true },
      };

    case HIDE_SNACKBAR_NOTIFICATION:
      const { title: hidingTitle, severity: hidingSeverity } = action.payload;
      return {
        ...state,
        snackbar: { title: hidingTitle, severity: hidingSeverity, show: false },
      };

    default:
      return state;
  }
};
