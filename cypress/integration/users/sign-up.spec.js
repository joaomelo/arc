describe('sign up', () => {
  it('show home page with greeting after success', () => {
    cy.visit('/sign-up');
    cy.get('#controlEMail').type('test@test.test');
    cy.get('#controlPassword').type('12345678');
    cy.get('#controlRepeatPassword').type('12345678');
    cy.get('#actionSignUp').click();

    cy.location('pathname').should('equal', '/');
    cy.contains('test@test.test');
  });

  it('do not allow another user with same email', () => {
    cy.signUpDefault();
    cy.location('pathname').should('equal', '/');

    cy.signUpDefault();
    cy.get('data-error-id=users.same-user-error');
  });

  it.skip('do not accept invalid or empty email', () => {
    cy.get('div').then(() => expect(false).to.be.true);
  });

  it.skip('do not accept small or empty password', () => {
    cy.get('div').then(() => expect(false).to.be.true);
  });

  it.skip('do not accept a different repeated password', () => {
    cy.get('div').then(() => expect(false).to.be.true);
  });

  it.skip('have working link to sign in', () => {
    cy.get('div').then(() => expect(false).to.be.true);
  });
});
