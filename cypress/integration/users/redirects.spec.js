describe('app redirects based auth on state', () => {
  it('protected routes redirect to auth if there is a signed in user', () => {
    cy.visit('http://localhost:5000/');

    cy.location('pathname')
      .should('include', '/auth');
  });

  context('auth redirects', () => {
    it('to signup if no user is found', () => {
      cy.visit('http://localhost:5000/auth');

      cy.location('pathname')
        .should('include', '/sign-up');
    });

    it('to home if a user is signed in', () => {
      cy.visit('http://localhost:5000/sign-up');
      cy.get('#controlEMail').type('test@test.test');
      cy.get('#controlPassword').type('12345678');
      cy.get('#actionSignUp').click();

      cy.visit('http://localhost:5000/auth');

      cy.location('pathname')
        .should('equal', '/');
    });

    // is there a command to clear firebase auth after every test?
  });
});
