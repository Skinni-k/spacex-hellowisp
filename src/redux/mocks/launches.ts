import { AxiosResponse } from "axios";
import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE,
  SHOW_SNACKBAR_NOTIFICATION,
  HIDE_SNACKBAR_NOTIFICATION,
} from "../constants";

export const axiosGetLaunchesSucceededResponse: AxiosResponse = {
  status: 200,
  statusText: "",
  data: {
    docs: [
      {
        links: {
          presskit:
            "http://www.spacex.com/sites/spacex/files/koreasat5apresskit.pdf",
        },
        static_fire_date_utc: "2017-10-26T16:00:00.000Z",
        static_fire_date_unix: 1509033600,
        tdb: false,
        net: false,
        window: 8640,
        rocket: "5e9d0d95eda69973a809d1ec",
        success: true,
        details:
          "KoreaSat 5A is a Ku-band satellite capable of providing communication services from East Africa and Central Asia to southern India, Southeast Asia, the Philippines, Guam, Korea, and Japan. The satellite will be placed in GEO at 113Â° East Longitude, and will provide services ranging from broadband internet to broadcasting services and maritime communications.",

        launchpad: "5e9e4502f509094188566f88",
        auto_update: true,
        flight_number: 50,
        name: "KoreaSat 5A",
        date_utc: "2017-10-30T19:34:00.000Z",
        date_unix: 1509392040,
        date_local: "2017-10-30T15:34:00-04:00",
        date_precision: "hour",
        totalDocs: 109,
        limit: 10,
        totalPages: 11,
        page: 5,
        pagingCounter: 41,
        hasPrevPage: true,
        hasNextPage: true,
        prevPage: 4,
        nextPage: 6,
      },
    ],
    page: 1,
    totalDocs: 145,
  },
  headers: {},
  config: {},
  request: {},
};

export const axiosGetLaunchesFailedResponse: AxiosResponse = {
  status: 404,
  statusText: "",
  data: null,
  headers: {},
  config: {},
};

export const mockLaunchesRequestPayload = { page: 1, order: "asc" };

export const mockLaunchesRequestAction = {
  type: FETCH_LAUNCHES_REQUEST,
  payload: mockLaunchesRequestPayload,
};

export const mockLaunchesSuccessAction = {
  type: FETCH_LAUNCHES_SUCCESS,
  payload: { data: axiosGetLaunchesSucceededResponse.data },
};

export const mockLaunchesFailureAction = { type: FETCH_LAUNCHES_FAILURE };

export const mockShowSnackbarAction = {
  type: SHOW_SNACKBAR_NOTIFICATION,
  payload: {
    title: "Preskit document not available",
    severity: "info",
    show: true,
  },
};

export const mockShowSnackbarApiFailedAction = {
  type: SHOW_SNACKBAR_NOTIFICATION,
  payload: {
    title: "Failed! Try again.",
    severity: "error",
  },
};

export const mockHideSnackbarAction = {
  type: HIDE_SNACKBAR_NOTIFICATION,
  payload: {
    title: "Preskit document not available",
    severity: "info",
    show: false,
  },
};
