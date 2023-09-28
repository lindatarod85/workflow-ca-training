it("signup and login user", () => {
  cy.visit("http://127.0.0.1:5500/index.html");

  //cy.get("#registerName").type("Name");
  //cy.get("#registerEmail").type("linda85@stud.noroff.no");
  //cy.get("#registerPassword").type("Test12345");
  //cy.get("#registerAvatar").type("https://i.pravatar.cc/300");
  //cy.get("#registerForm .btn-success").click();

  cy.get("#registerForm .btn-outline-success").click();

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

/*
it("Logs out user", () => {
  cy.visit("http://127.0.0.1:5500/?view=profile&name=linda");

  cy.get(".btn-outline-warning").click();

  cy.location("pathname").should("eq", "http://127.0.0.1:5500/index.html");
});
*/
