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

  it('after successful sign-up, redirects to home', () => {
    cy.signUpDefault();

    cy.location('pathname')
      .should('equal', '/');

    cy.visit('/unsolved');

    cy.location('pathname')
      .should('equal', '/');
  });
});
