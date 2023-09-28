it("signup and login user", () => {
  cy.visit("http://127.0.0.1:5500/index.html");

  cy.get("#registerName").type("Linda");
  cy.get("#registerEmail").type("linda@stud.noroff.no");
  cy.get("#registerPassword").type("Test1234");
  cy.get("#registerForm .btn-success").click();

  //cy.get("#registerForm .btn-outline-success").click();

  cy.get("#loginEmail").type("linda@stud.noroff.no");
  cy.get("#loginPassword").type("Test1234");
  cy.get("#loginForm .btn-success").click();

  cy.location("pathname").should(
    "eq",
    "http://127.0.0.1:5500/?view=profile&name=linda",
  );

  //logout
  //cy.visit("http://127.0.0.1:5500/?view=profile&name=linda");

  //cy.get(".btn-outline-warning").click();

  //cy.location("pathname").should("eq", "http://127.0.0.1:5500/index.html");
});
