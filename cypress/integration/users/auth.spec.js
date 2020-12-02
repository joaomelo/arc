describe('auth redirects based on state', () => {
  it('protected routes redirect to auth if there is a signed in user', () => {
    cy.visit('http://localhost:5000/');

    cy.location('pathname')
      .should('include', '/auth');
  });

  it('auth redirects to signup if no user is found', () => {
    cy.visit('http://localhost:5000/auth');

    cy.location('pathname')
      .should('include', '/sign-up');
  });

  it('auth redirects to home if a user is found', () => {
    // add a user in a way the auth service can locate

    cy.visit('http://localhost:5000/auth');

    cy.location('pathname')
      .should('equal', '/');
  });
});
