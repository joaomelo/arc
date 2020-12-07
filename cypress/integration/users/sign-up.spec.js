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
    cy.get('#actionSignOut').click();

    cy.signUpDefault();
    cy.get('[data-error="EMAIL_ALREADY_IN_USE"]');
  });

  it('only accept valid emails', () => {
    cy.visit('/sign-up');
    cy.get('#actionSignUp').click();
    cy.get('[data-error="EMAIL_INVALID"]');

    cy.get('#controlEMail').type('test');
    cy.get('[data-error="EMAIL_INVALID"]');

    cy.get('#controlEMail').type('test@test.test');
    cy.get('[data-error="EMAIL_INVALID"]').should('not.exist');
  });

  it.skip('do not accept small or empty password', () => {
    cy.get('div').then(() => expect(false).to.be.true);
  });

  it.skip('do not accept a different repeated password', () => {
    cy.get('div').then(() => expect(false).to.be.true);
  });

  it.skip('the page have working link to sign in', () => {
    cy.get('div').then(() => expect(false).to.be.true);
  });

  it.skip('create a user profile with default preferences', () => {
    cy.get('div').then(() => expect(false).to.be.true);
  });

  it.skip('only allow profile creation when signing up new user', () => {
    cy.get('div').then(() => expect(false).to.be.true);
  });
});
