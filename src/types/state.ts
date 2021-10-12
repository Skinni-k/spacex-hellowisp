import { LaunchesStateType } from "./launches";
import { NotificationsStateType } from "./notifications";

export type RootState = {
  launchesState: LaunchesStateType;
  notificationsState: NotificationsStateType;
};

export type PayloadType = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};
