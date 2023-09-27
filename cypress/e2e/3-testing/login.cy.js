it("signup and login user", () => {
  cy.visit("http://127.0.0.1:5500/index.html");

  cy.get("#loginEmail").type("linda@stud.noroff.no");
  cy.get("#loginPassword").type("Test1234");
  cy.get("#loginForm .btn-success").click();

  cy.location().should((location) => {
    expect(location.href).to.eq(
      "http://127.0.0.1:5500/?view=profile&name=linda",
    );

    // expect(location.pathname).to.eq('/commands/location')
  });

  //cy.location("pathname").should("eq", "/?view=profile&name=linda");

  //logout
  //cy.visit('http://127.0.0.1:5500/profile.html');

  // cy.get('#logout').click();
});
