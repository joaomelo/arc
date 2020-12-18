describe('sign in page', () => {
  const controlEMailId = '#control-email';
  const controlPasswordId = '#control-password';
  const actionSignInId = '#action-sign-in';
  const actionSignOutId = '#action-sign-out';

  const goodEmail = 'test@test.test';
  const goodPassword = '12345678';
  const smallPassword = '123457';

  describe('happy path', () => {
    it('has route showing page', () => {
      cy.visit('/sign-in');
      cy.location('pathname').should('equal', '/sign-in');

      cy.contains('sign in', { matchCase: false });
    });

    it('has link to sign up', () => {
      cy.visit('/sign-in');

      cy.get('a[href="/sign-up"]');
    });

    it('shows home page after sign in', () => {
      cy.signUpManual(goodEmail, goodPassword);
      cy.get(actionSignOutId).click();

      cy.visit('/sign-in');
      cy.get(controlEMailId).type(goodEmail);
      cy.get(controlPasswordId).type(goodPassword);
      cy.get(actionSignInId).click();

      cy.location('pathname').should('equal', '/');
      cy.contains(goodEmail);
    });

    it('shows user original attempted route after sign in', () => {
      // mock a valid route to test
      expect(true).to.equal(false);
    });
  });

  describe('alternative paths', () => {
    describe('validation', () => {
      it('only accept valid emails', () => {
        cy.visit('/sign-in');

        cy.get(actionSignInId).click();
        cy.get(controlEMailId).should('not.have.attr', 'data-has-passed');

        cy.get(controlEMailId).type('test');
        cy.get(controlEMailId).should('not.have.attr', 'data-has-passed');

        cy.get(controlEMailId).clear().type('test@test.test');
        cy.get(controlEMailId).should('have.attr', 'data-has-passed');
      });

      it('do not accept empty or small passwords', () => {
        cy.visit('/sign-in');

        cy.get(actionSignInId).click();
        cy.get(controlPasswordId).should('not.have.attr', 'data-has-passed');

        cy.get(controlPasswordId).type(smallPassword);
        cy.get(controlPasswordId).should('not.have.attr', 'data-has-passed');

        cy.get(controlPasswordId).clear().type(goodPassword);
        cy.get(controlPasswordId).should('have.attr', 'data-has-passed');
      });
    });

    // user exists but not with this password
    // user does not exists
  });
});
