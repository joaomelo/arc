describe('auth routing', () => {
  it('redirects to "/unsolved" when in unsolved status', () => {
    cy.visit('/');
    cy.window()
      .its('$store')
      .then(store => {
        Object.defineProperty(store, 'getters', {
          get: () => ({ isUndefined: true })
        });
      });

    cy.visit('/sign-up');

    cy.location('pathname')
      .should('equal', '/unsolved');
  });

  it('protected routes redirects to sign-up when there is no user signed', () => {
    cy.visit('/');

    cy.location('pathname')
      .should('include', '/sign-up');
  });

  it('after successful sign up, redirects to home and blocks signed out routes', () => {
    cy.signUpManual('teste@test.test', '12345678');

    cy.location('pathname').should('equal', '/');

    cy.visit('/unsolved');
    cy.location('pathname').should('equal', '/');
  });

  it('after successful sign out, redirects to sign-up', () => {
    cy.signUpManual('teste@test.test', '12345678');

    cy.get('#action-sign-out').click();

    cy.location('pathname')
      .should('equal', '/sign-up');
  });
});
