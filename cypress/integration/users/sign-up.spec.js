describe('sign up', () => {
  const controlEMailId = '#controlEMail';
  const controlPasswordId = '#controlPassword';
  const controlRepeatPasswordId = '#controlRepeatPassword';
  const actionSignUpId = '#actionSignUp';
  const actionSignOutId = '#actionSignOut';

  it('show home page with greeting after success', () => {
    cy.visit('/sign-up');
    cy.get(controlEMailId).type('test@test.test');
    cy.get(controlPasswordId).type('12345678');
    cy.get(controlRepeatPasswordId).type('12345678');
    cy.get(actionSignUpId).click();

    cy.location('pathname').should('equal', '/');
    cy.contains('test@test.test');
  });

  it('do not allow another user with same email', () => {
    cy.signUpDefault();
    cy.get(actionSignOutId).click();

    cy.signUpDefault();
    cy.get('[data-error="EMAIL_ALREADY_IN_USE"]');
  });

  it('only accept valid emails', () => {
    cy.visit('/sign-up');

    cy.get(actionSignUpId).click();
    cy.get(controlEMailId).should('not.have.attr', 'data-has-passed');

    cy.get(controlEMailId).type('test');
    cy.get(controlEMailId).should('not.have.attr', 'data-has-passed');

    cy.get(controlEMailId).type('test@test.test');
    cy.get(controlEMailId).should('have.attr', 'data-has-passed');
  });

  it('do not accept empty or small passwords', () => {
    cy.visit('/sign-up');

    const smallPassword = '123457';
    const goodPassword = '12345678';

    cy.get(actionSignUpId).click();
    cy.get(controlPasswordId).should('not.have.attr', 'data-has-passed');

    cy.get(controlPasswordId).type(smallPassword);
    cy.get(controlPasswordId).should('not.have.attr', 'data-has-passed');

    cy.get(controlPasswordId).clear().type(goodPassword);
    cy.get(controlPasswordId).should('have.attr', 'data-has-passed');
  });

  it('do not accept unrepeated password', () => {
    cy.visit('/sign-up');

    const goodPassword = '12345678';
    const goodButDifferentPassword = '123456789';

    cy.get(controlRepeatPasswordId).should('not.have.attr', 'data-has-passed');

    cy.get(controlPasswordId).type(goodPassword);
    cy.get(controlRepeatPasswordId).type(goodButDifferentPassword);
    cy.get(controlRepeatPasswordId).should('not.have.attr', 'data-has-passed');

    cy.get(controlRepeatPasswordId).clear().type(goodPassword);
    cy.get(controlRepeatPasswordId).should('have.attr', 'data-has-passed');
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
