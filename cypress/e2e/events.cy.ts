describe("Events", () => {
  it("should be able to see the proper data on events page", () => {
    cy.visit("/events");
    cy.contains("Jun 1, 2025 - 05:00 PM").should("exist");
    cy.contains("Book Signing: Brandon Sanderson").should("exist");
    cy.contains(
      "Meet the author of Mistborn and learn about the fascinating world of his creation.",
    ).should("exist");
    cy.contains("Mistborn: The Final Empire by Brandon Sanderson").should(
      "exist",
    );
    cy.get(`[data-testid="events__page--card-event"]`).should("have.length", 5);
  });
});
