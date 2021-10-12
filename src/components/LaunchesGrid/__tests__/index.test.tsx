import * as reactRedux from "react-redux";
import { renderApp } from "../../../../config/testUtils";
import { LaunchesGrid } from "../..";
import { axiosGetLaunchesSucceededResponse } from "../../../redux/mocks/launches";
import { fireEvent, waitFor, screen } from "@testing-library/react";

describe("<LaunchesGrid />", () => {
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

  it("should render everything without problem", () => {
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

    const { getByTestId, getByRole } = renderApp(
      <LaunchesGrid autoHeight={true} />
    );

    expect(getByTestId("select-container")).toBeInTheDocument();
    const selectLaunchesDropdown = getByTestId("select-order");
    expect(selectLaunchesDropdown).toBeInTheDocument();

    fireEvent.click(selectLaunchesDropdown);

    waitFor(() => {
      expect(getByTestId("select-order-desc")).toBeInTheDocument();
      expect(getByTestId("select-order-asc")).toBeInTheDocument();
    });

    expect(getByRole("grid")).toBeInTheDocument();
    expect(getByTestId("grid-ovelay-loader")).toBeInTheDocument();
  });

  it("should open doc in new tab", () => {
    useSelectorMock.mockReturnValue({
      currentPage: 1,
      launches: [...axiosGetLaunchesSucceededResponse.data.docs],
      totalLaunches: 145,
      requested: false,
      snackbar: {
        title: "Preskit document not available",
        severity: "info",
        show: false,
      },
    });

    const { getByRole } = renderApp(<LaunchesGrid autoHeight={true} />);

    expect(getByRole("grid")).toBeInTheDocument();
    const cell = screen.getByText("KoreaSat 5A");
    expect(cell).toBeInTheDocument();
    fireEvent.click(cell);
    expect(global.open).toHaveBeenCalledWith(
      `http://www.spacex.com/sites/spacex/files/koreasat5apresskit.pdf`,
      "_blank"
    );
  });

  it("should show snackbar for doc link not present", () => {
    useSelectorMock.mockReturnValue({
      currentPage: 1,
      launches: [
        {
          ...axiosGetLaunchesSucceededResponse.data.docs[0],
          links: { presskit: null },
        },
      ],
      totalLaunches: 145,
      requested: false,
      snackbar: {
        title: "Preskit document not available",
        severity: "info",
        show: true,
      },
    });

    const { getByRole, getByTestId } = renderApp(
      <LaunchesGrid autoHeight={true} />
    );

    expect(getByRole("grid")).toBeInTheDocument();
    const cell = screen.getByText("KoreaSat 5A");
    expect(cell).toBeInTheDocument();
    fireEvent.click(cell);

    waitFor(() => {
      expect(getByTestId("snackbar-container")).toBeInTheDocument();
    });
  });
});
