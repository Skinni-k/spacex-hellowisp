import { FourOhFour } from "..";
import { renderApp } from "../../../../config/testUtils";

describe("404 Page", () => {
  it("should render everything", () => {
    const { getByTestId } = renderApp(<FourOhFour />);

    expect(getByTestId("page-container")).toBeInTheDocument();
    expect(getByTestId("error-code")).toBeInTheDocument();
    expect(getByTestId("error-message")).toBeInTheDocument();
  });
});
