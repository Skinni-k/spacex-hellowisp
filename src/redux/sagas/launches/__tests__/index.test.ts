import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import Api from "../../../api";
import {
  axiosGetLaunchesSucceededResponse,
  axiosGetLaunchesFailedResponse,
  mockLaunchesRequestAction,
  mockLaunchesSuccessAction,
  mockLaunchesFailureAction,
  mockShowSnackbarApiFailedAction,
} from "../../../mocks/launches";
import { rocketLaunchesFn } from "..";

const instance = new Api();

describe("launchesSaga", () => {
  describe("Rocket Launches Function", () => {
    describe("launchesSaga Success Case", () => {
      it("launchesSaga Success Case Integration Testing", () => {
        const action = { ...mockLaunchesRequestAction };
        return expectSaga(rocketLaunchesFn, action)
          .provide([
            [
              matchers.call.fn(instance.launches),
              axiosGetLaunchesSucceededResponse,
            ],
          ])
          .put({
            type: mockLaunchesSuccessAction.type,
            payload: { ...mockLaunchesSuccessAction.payload },
          })
          .dispatch({ ...mockLaunchesRequestAction })
          .run();
      });
    });

    describe("launchesSaga Failure Case", () => {
      it("launchesSaga Failure Case Integration Testing", () => {
        const action = { ...mockLaunchesRequestAction };
        return expectSaga(rocketLaunchesFn, action)
          .provide([
            [
              matchers.call.fn(instance.launches),
              axiosGetLaunchesFailedResponse,
            ],
          ])
          .put({ ...mockLaunchesFailureAction })
          .put({ ...mockShowSnackbarApiFailedAction })
          .dispatch({ ...mockLaunchesRequestAction })
          .run();
      });

      it("launchesSaga Failure Case Unit Testing when api call throws an error", () => {
        const action = { ...mockLaunchesRequestAction };
        const error = new Error("Something went wrong");
        return expectSaga(rocketLaunchesFn, action)
          .provide([[matchers.call.fn(instance.launches), throwError(error)]])
          .put({ ...mockLaunchesFailureAction })
          .put({ ...mockShowSnackbarApiFailedAction })
          .dispatch({ ...mockLaunchesRequestAction })
          .run();
      });
    });
  });
});
