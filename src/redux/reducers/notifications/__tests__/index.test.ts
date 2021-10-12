import {
  mockHideSnackbarAction,
  mockShowSnackbarAction,
} from "../../../mocks/launches";
import notificationsReducer from "..";

describe("Notifications reducer", () => {
  describe("when the action is SHOW_SNACKBAR_NOTIFICATION", () => {
    it("should update snackbar values to show it", () => {
      const state = notificationsReducer(undefined, mockShowSnackbarAction);
      expect(state).toMatchObject({
        snackbar: {
          title: "Preskit document not available",
          severity: "info",
          show: true,
        },
      });
    });
  });

  describe("when the action is HIDE_SNACKBAR_NOTIFICATION", () => {
    it("should update show variable to false to hide it", () => {
      const state = notificationsReducer(undefined, mockHideSnackbarAction);
      expect(state).toMatchObject({
        snackbar: {
          title: "Preskit document not available",
          severity: "info",
          show: false,
        },
      });
    });
  });
});
