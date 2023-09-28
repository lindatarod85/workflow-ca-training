it("User is shown message if login credentials are wrong", () => {
  cy.visit("/");
  cy.wait(2000);

  cy.get("#registerForm [data-auth=login]").click();

  cy.wait(2000);

  cy.get("#loginEmail").type("invalidEmail");
  cy.get("#loginPassword").type("invalidPassword");
  cy.get("#loginForm .btn-success").click();

  cy.get(response.statusText)
    .should("be.visible")
    .and("contain", "Username is required");

  cy.get(response.statustext)
    .should("be.visible")
    .and("contain", "Password must contain at least 8 characters");
});
