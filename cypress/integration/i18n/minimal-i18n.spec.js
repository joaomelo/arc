describe('i18n engine minimal test at sign up', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
    cy.location('pathname').should('include', '/sign-up');
  });

  const controlEMailId = '#control-email';
  const actionSignUpId = '#action-sign-up';

  it('proper en messages for some labels', () => {
    cy.contains('Sign up');
    cy.contains('Repeat password');
  });

  it('proper pt-BR messages for some labels', () => {
    cy.window().its('$i18n').then(i18n => {
      i18n.updateLocale('pt-BR');
      console.log(i18n.currentLocale);
    });

    cy.contains('Criar');
    cy.contains('Confirmar senha');
  });

  it('proper en messages for some field validation', () => {
    cy.get(controlEMailId).type('notAnEMail');
    cy.get(actionSignUpId).click();

    cy.contains('must be a valid email');
    cy.contains('field is required');
  });

  it('proper pt-BR messages for some field validation', () => {
    cy.window().its('$i18n').then(i18n => i18n.updateLocale('pt-BR'));

    cy.get(controlEMailId).type('notAnEMail');
    cy.get(actionSignUpId).click();

    cy.contains('deve ser um email válido');
    cy.contains('é obrigatório');
  });
});
