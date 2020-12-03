describe('sign up routing', () => {
  it('protected routes cascade redirects to sign-up if there is no user signed', () => {
    cy.visit('/');

    cy.location('pathname')
      .should('include', '/sign-up');
  });

  it('after successful sign-up, redirects to home', () => {
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

  // is there a command to clear firebase auth after every test?
});
