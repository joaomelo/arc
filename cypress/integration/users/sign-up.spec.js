describe('sign up', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
  });

  it('show home page with greeting after success', () => {
    cy.get('#controlEMail').type('test@test.test');
    cy.get('#controlPassword').type('12345678');
    cy.get('#controlRepeatPassword').type('12345678');
    cy.get('#actionSignUp').click();

    cy.location('pathname').should('equal', '/');
    cy.get('#textGreeting').should('contain', 'test@test.test');
  });

  it.skip('do not allow another user with same email', () => {
    cy.get('div').then(() => expect(false).to.be.true);
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
