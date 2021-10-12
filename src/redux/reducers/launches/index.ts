import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE,
} from "../../constants";
import { LaunchesStateType } from "../../../types/launches";
import { PayloadType } from "../../../types/state";

const initialState: LaunchesStateType = {
  requested: true,
  failed: false,
  launches: [],
  currentPage: 0,
  totalLaunches: 0,
};

export default (
  state = initialState,
  action: PayloadType
): LaunchesStateType => {
  switch (action.type) {
    case FETCH_LAUNCHES_REQUEST:
      return {
        ...state,
        requested: true,
        failed: false,
      };

    case FETCH_LAUNCHES_SUCCESS:
      const {
        data: { docs, page, totalDocs },
      } = action.payload;
      return {
        ...state,
        requested: false,
        failed: false,
        launches: [...docs],
        currentPage: page,
        totalLaunches: totalDocs,
      };

    case FETCH_LAUNCHES_FAILURE:
      return {
        ...state,
        requested: false,
        failed: true,
        launches: [],
        currentPage: 0,
        totalLaunches: 0,
      };

    default:
      return state;
  }
};
