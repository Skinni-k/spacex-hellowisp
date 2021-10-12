import * as reactRedux from "react-redux";
import { LaunchesGrid } from "../..";
import { renderApp } from "../../../../config/testUtils";
import { axiosGetLaunchesSucceededResponse } from "../../../redux/mocks/launches";

describe("<LoadingOverlay />", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  beforeAll((done) => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    done();
  });

  afterAll((done) => {
    done();
  });

  it("should render grid without problem", () => {
    useSelectorMock.mockReturnValue({
      currentPage: 1,
      launches: [...axiosGetLaunchesSucceededResponse.data.docs],
      totalLaunches: 145,
      requested: true,
      snackbar: {
        title: "Preskit document not available",
        severity: "info",
        show: false,
      },
    });

    const { getByTestId } = renderApp(<LaunchesGrid autoHeight={true} />);
    expect(getByTestId("grid-ovelay-loader")).toBeInTheDocument();
  });
});
