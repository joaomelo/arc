describe('i18n engine minimal test at sign up', () => {
  beforeEach(() => {
    cy.visit('/sign-up', { log: false });
  });

  const controlEMailId = '#control-email';
  const controlPasswordId = '#control-password';
  const controlRepeatPasswordId = '#control-repeat-password';
  const actionSignUpId = '#action-sign-up';
  const actionSignOutId = '#action-sign-out';

  it('proper en messages for some labels', () => {
    cy.contains('Sign up');
    cy.contains('Repeat password');
  });

  it('proper pt-BR messages for some labels', () => {
    cy.window().its('$i18n').then(i18n => i18n.updateLocale('pt-BR'));

    cy.contains('Criar');
    cy.contains('Confirmar senha');
  });

  it('when locale changes, reflects the correct one on labels', () => {
    cy.contains('Sign up');
    cy.window().its('$i18n').then(i18n => i18n.updateLocale('pt-BR'));
    cy.contains('Criar');
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

  it('when locale changes, reflects the correct one on field validation', () => {
    cy.get(controlEMailId).type('notAnEMail');
    cy.get(actionSignUpId).click();

    cy.contains('must be a valid email');
    cy.contains('field is required');

    cy.window().its('$i18n').then(i18n => i18n.updateLocale('pt-BR'));

    cy.contains('deve ser um email válido');
    cy.contains('é obrigatório');
  });

  it('proper en error messages for exceptions', () => {
    cy.signUpDefault();
    cy.get(actionSignOutId).click();

    cy.signUpDefault();
    cy.contains("Can't create or update a user with an e-mail already in use");
  });

  it('proper pt-BR error messages for exceptions', () => {
    const email = 'default@default.default';
    const password = '12345678';

    cy.signUp(email, password);
    cy.get(actionSignOutId).click();

    cy.visit('/sign-up');
    cy.window().its('$i18n').then(i18n => i18n.updateLocale('pt-BR'));
    cy.get(controlEMailId).type(email);
    cy.get(controlPasswordId).type(password);
    cy.get(controlRepeatPasswordId).type(password);
    cy.get(actionSignUpId).click();

    cy.contains('Não é possível criar ou atualizar um usuário com um e-mail já em uso.');
  });
});
