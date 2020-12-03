it('sign up successfully and go home', () => {
  cy.visit('http://localhost:5000/sign-up');
  cy.get('#controlEMail').type('test@test.test');
  cy.get('#controlPassword').type('12345678');
  cy.get('#actionSignUp').click();

  cy.location('pathname')
    .should('equal', '/');
});
