it("Logs out user", () => {
  cy.visit("http://127.0.0.1:5500/?view=profile&name=linda");

  cy.get(".btn-outline-warning").click();

  cy.location("pathname").should("eq", "http://127.0.0.1:5500");
});
