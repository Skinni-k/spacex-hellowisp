import {
  interceptNewestLaunchesPage1,
  interceptNewestLaunchesPage2,
  interceptOldestLaunchesPage1,
} from "../mocks";

describe("Homepage testing", () => {
  beforeEach(() => {
    interceptNewestLaunchesPage1();

    cy.visit("http://localhost:3000/");
  });

  it("should render all elements", () => {
    cy.get('[data-testid="homepage-base"]').should("have.length", 1);

    cy.get('[data-testid="logo"]');

    cy.get('[data-testid="grid-root"]').should("have.length", 1);

    cy.get('[data-testid="select-container"]');

    cy.get('[data-testid="grid-ovelay-loader"]');

    cy.get(".MuiDataGrid-root.makeStyles-root-7.MuiDataGrid-root");
  });

  it("changes launches order on select", () => {
    cy.contains("WorldView Legion 1-2");

    interceptOldestLaunchesPage1();

    cy.get('[data-testid="select-order"] ').click();

    cy.contains("Oldest first").click();

    cy.contains("FalconSat");
  });

  it("shows preskit doc not available", () => {
    cy.contains("WorldView Legion 1-2").click();

    cy.get('[data-testid="snackbar-container"]').contains(
      "Presskit document not available"
    );
  });

  it("navigates to next and previous pages of launches", () => {
    cy.contains("1-10 of");

    interceptNewestLaunchesPage2();

    cy.get("[aria-label='Previous page']").should("be.disabled");

    cy.get("[aria-label='Next page']").should("not.be.disabled").click();

    cy.contains("11-20 of");

    interceptNewestLaunchesPage1();

    cy.get("[aria-label='Previous page']").should("not.be.disabled").click();

    cy.contains("1-10 of");
  });
});
