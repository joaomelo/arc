describe('auth routing', () => {
  it('redirects to "/auth" when in unsolved status', () => {
    cy.visit('/');
    cy.window()
      .its('$store')
      .as('store');

    // mock the isUndefined vuex getter to force a eternal undefined state
    cy.get('@store')
      .then(store => {
        Object.defineProperty(store, 'getters', {
          get: () => ({ isUndefined: true })
        });
      });

    cy.visit('/sign-up');

    cy.location('pathname')
      .should('equal', '/auth');
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

    cy.visit('/auth');

    cy.location('pathname')
      .should('equal', '/');
  });
});
