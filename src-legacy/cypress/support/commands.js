// https://on.cypress.io/custom-commands

Cypress.Commands.add('signUpManual', (email, password) => {
  cy.visit('/sign-up');
  cy.get('#control-email').type(email);
  cy.get('#control-password').type(password);
  cy.get('#control-repeat-password').type(password);
  cy.get('#action-sign-up').click();
});
