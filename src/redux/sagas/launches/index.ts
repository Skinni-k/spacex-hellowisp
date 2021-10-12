import { put, takeEvery, call, all } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE,
  SHOW_SNACKBAR_NOTIFICATION,
} from "../../constants";
import { PayloadType } from "../../../types/state";
import Api from "../../api";

const instance = new Api();

export function* rocketLaunchesFn({ payload }: PayloadType): SagaIterator {
  const { page, order } = payload;
  try {
    const response = yield call(instance.launches, page, order);
    if (response && response.data && response.status === 200) {
      yield put({
        type: FETCH_LAUNCHES_SUCCESS,
        payload: { data: response.data },
      });
    } else {
      yield put({ type: FETCH_LAUNCHES_FAILURE });
      yield put({
        type: SHOW_SNACKBAR_NOTIFICATION,
        payload: { title: "Failed! Try again.", severity: "error" },
      });
    }
  } catch (err) {
    yield put({ type: FETCH_LAUNCHES_FAILURE });
    yield put({
      type: SHOW_SNACKBAR_NOTIFICATION,
      payload: { title: "Failed! Try again.", severity: "error" },
    });
  }
}

export default function* launchesSaga(): Generator {
  yield all([takeEvery(FETCH_LAUNCHES_REQUEST, rocketLaunchesFn)]);
}
