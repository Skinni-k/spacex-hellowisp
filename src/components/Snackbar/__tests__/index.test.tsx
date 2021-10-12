import * as reactRedux from "react-redux";
import { renderApp } from "../../../../config/testUtils";
import { SnackbarNotification } from "../..";

describe("<SnackbarNotification />", () => {
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

  it("render without problem", () => {
    useSelectorMock.mockReturnValue({
      snackbar: {
        title: "Preskit document not available",
        severity: "info",
        show: true,
      },
    });

    const { getByTestId } = renderApp(<SnackbarNotification />);
    expect(getByTestId("snackbar-container")).toBeInTheDocument();
  });
});
