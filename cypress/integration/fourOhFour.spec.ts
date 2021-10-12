describe("404 page testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/invalid-path");
  });

  it("should render all elements", () => {
    cy.get('[data-testid="page-container"]')
      .children()
      .should("have.length", 1);

    cy.get('[data-testid="container"]').children().should("have.length", 3);

    cy.get('[data-testid="error-code"]');

    cy.get('[data-testid="error-message"]');
  });
});
