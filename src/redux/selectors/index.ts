import type { LaunchesStateType } from "../../types/launches";
import { NotificationsStateType } from "../../types/notifications";

import { RootState } from "../../types/state";

const getLaunchesState = (state: RootState): LaunchesStateType =>
  state.launchesState;

const getNotificationState = (state: RootState): NotificationsStateType =>
  state.notificationsState;

export { getLaunchesState, getNotificationState };
