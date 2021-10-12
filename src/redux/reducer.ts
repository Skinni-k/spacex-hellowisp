import { AnyAction, CombinedState, combineReducers, Reducer } from "redux";

import launchesReducer from "./reducers/launches";
import notificationsReducer from "./reducers/notifications";

import { RootState } from "../types/state";

const appReducer: Reducer<
  CombinedState<RootState>,
  AnyAction
> = combineReducers<RootState>({
  launchesState: launchesReducer,
  notificationsState: notificationsReducer,
});

// eslint-disable-next-line
const rootReducer = (state: any, action: any): CombinedState<RootState> =>
  appReducer(state, action);

export default rootReducer;
