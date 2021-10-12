import { all } from "redux-saga/effects";
import launchesSaga from "./launches";

export default function* rootSaga(): Generator {
  yield all([launchesSaga()]);
}
