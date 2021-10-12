export const interceptNewestLaunchesPage1 = (): void => {
  cy.intercept(
    {
      method: "POST",
      url: "https://api.spacexdata.com/v5/launches/query",
    },
    { fixture: "newestLaunchesPage1.json" }
  );
};

export const interceptNewestLaunchesPage2 = (): void => {
  cy.intercept(
    {
      method: "POST",
      url: "https://api.spacexdata.com/v5/launches/query",
    },
    { fixture: "newestLaunchesPage2.json" }
  );
};

export const interceptOldestLaunchesPage1 = (): void => {
  cy.intercept(
    {
      method: "POST",
      url: "https://api.spacexdata.com/v5/launches/query",
    },
    { fixture: "oldestLaunchesPage1.json" }
  );
};
