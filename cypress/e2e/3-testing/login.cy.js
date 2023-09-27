it("signup and login user", () => {
  cy.visit("http://127.0.0.1:5500/index.html");

  cy.get('input[name="email"]').type("linda@stud.noroff.no");
  //cy.get('input[name="password"]').type("Test1234");
  cy.get(".modal-foter.btn-success").click();

  cy.location("pathname").should("eq", "/profile.html");

  //logout
  //cy.visit('http://127.0.0.1:5500/profile.html');

  // cy.get('#logout').click();

  // cy.location('pathname').should('eq', '/')
});
