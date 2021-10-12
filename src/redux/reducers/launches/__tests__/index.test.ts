import {
  mockLaunchesFailureAction,
  mockLaunchesRequestAction,
  mockLaunchesSuccessAction,
} from "../../../mocks/launches";
import launchesReducer from "..";

describe("Launches reducer", () => {
  describe("when the action is FETCH_LAUNCHES_REQUEST", () => {
    it("should update requested value to true and failed to false", () => {
      const state = launchesReducer(undefined, mockLaunchesRequestAction);
      expect(state).toMatchObject({
        requested: true,
        failed: false,
      });
    });
  });

  describe("when the action is FETCH_LAUNCHES_SUCCESS", () => {
    it("should update show variable to false to hide it", () => {
      const state = launchesReducer(undefined, mockLaunchesSuccessAction);
      expect(state).toMatchObject({
        requested: false,
        failed: false,
        launches: [...mockLaunchesSuccessAction.payload.data.docs],
        currentPage: mockLaunchesSuccessAction.payload.data.page,
        totalLaunches: mockLaunchesSuccessAction.payload.data.totalDocs,
      });
    });
  });

  describe("when the action is FETCH_LAUNCHES_FAILURE", () => {
    it("should update snackbar values to show it", () => {
      const state = launchesReducer(undefined, mockLaunchesFailureAction);
      expect(state).toMatchObject({
        requested: false,
        failed: true,
        launches: [],
        currentPage: 0,
        totalLaunches: 0,
      });
    });
  });
});
