describe('sign out', () => {
  it('app resolves to sign out state after loading', () => {
    cy.visit('/');
    cy.window()
      .its('$store')
      .as('store');

    cy.get('@store')
      .its('state.usersStore.status')
      .should('eq', 'AUTH_STATUSES.SIGNED_OUT');
  });
});
