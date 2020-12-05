// https://on.cypress.io/custom-commands

Cypress.Commands.add('signUp', (email, password) => {
  cy.visit('/sign-up');
  cy.get('#controlEMail').type(email);
  cy.get('#controlPassword').type(password);
  cy.get('#controlRepeatPassword').type(password);
  cy.get('#actionSignUp').click();
});

Cypress.Commands.add('signUpDefault', () => {
  cy.signUp('default@default.default', '12345678');
});
