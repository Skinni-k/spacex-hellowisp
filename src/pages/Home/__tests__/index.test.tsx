import * as reactRedux from "react-redux";
import { renderApp } from "../../../../config/testUtils";
import { Home } from "..";
import { axiosGetLaunchesSucceededResponse } from "../../../redux/mocks/launches";

describe("<Login />", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  beforeAll((done) => {
    done();
  });

  afterAll((done) => {
    done();
  });

  it("render without problem", () => {
    useSelectorMock.mockReturnValue({
      currentPage: 1,
      launches: [...axiosGetLaunchesSucceededResponse.data.docs],
      totalLaunches: 145,
      requested: false,
      snackbar: { title: "", severity: "info", show: false },
    });
    const { getByTestId } = renderApp(<Home />);
    expect(getByTestId("homepage-base")).toBeInTheDocument();
    expect(getByTestId("logo")).toBeInTheDocument();
    expect(getByTestId("grid-root")).toBeInTheDocument();
  });
});
