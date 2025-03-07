describe("Home", () => {
  it("should be able to redirect to events and return", () => {
    cy.visit("/");
    cy.contains("Explore Events").click();
    cy.url().should("contain", "/events");
    cy.get(`[data-testid="page__layout--button-home"]`).click();
    cy.url().should("not.contain", "/events");
    cy.contains("Explore Events").should("exist");
  });

  it("should be able to redirect to books store and return", () => {
    cy.visit("/");
    cy.contains("Explore Bookstore").click();
    cy.url().should("contain", "/store");
    cy.get(`[data-testid="page__layout--button-home"]`).click();
    cy.url().should("not.contain", "/store");
    cy.contains("Explore Bookstore").should("exist");
  });
});

