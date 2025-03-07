describe("Store", () => {
  it("should be able to see the proper data on store page", () => {
    cy.visit("/store");
    cy.get("td").contains("The Martian").should("exist");
    cy.get("td").contains("Andy Weir").should("exist");
    cy.get("td").contains("Science Fiction").should("exist");
    cy.get("td")
      .contains("A story of an astronaut stranded on Mars, trying to survive.")
      .should("exist");
    cy.get("td").contains("978-0553418026").should("exist");
    cy.get("tr").should("have.length", 11);
  });
});
