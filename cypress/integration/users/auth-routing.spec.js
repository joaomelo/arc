describe('auth routing', () => {
  it('protected routes cascade redirects to sign-up when there is no user signed', () => {
    cy.visit('/');

    cy.location('pathname')
      .should('include', '/sign-up');
  });

  it('after successful sign-up, redirects to home', () => {
    // since we are testing the reroute, move the signup to a command
    cy.visit('/sign-up');
    cy.get('#controlEMail').type('test@test.test');
    cy.get('#controlPassword').type('12345678');
    cy.get('#actionSignUp').click();

    cy.location('pathname')
      .should('equal', '/');

    cy.visit('/auth');

    cy.location('pathname')
      .should('equal', '/');
  });
});
