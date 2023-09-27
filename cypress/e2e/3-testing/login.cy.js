it("signup and login user", () => {
  cy.visit("http://127.0.0.1:5500/index.html");

  cy.get('input id="loginEmail" [name="email"]').type("linda@stud.noroff.no");
  cy.get('input id="loginPassword" [name="password"]').type("Test1234");
  cy.get(".btn-success").click();

  cy.location("pathname").should("eq", "/profile.html");

  //logout
  //cy.visit('http://127.0.0.1:5500/profile.html');

  // cy.get('#logout').click();

  // cy.location('pathname').should('eq', '/')
});
