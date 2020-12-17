describe('sign in page', () => {
  describe('happy path', () => {
    it.only('has route showing page', () => {
      cy.visit('/sign-in');
      cy.location('pathname').should('equal', '/sign-in');

      cy.contains('sign in', { matchCase: false });
    });

    it('has link to sign up', () => {
      expect(true).to.equal(false);
    });

    it('shows home page after sign in', () => {
      expect(true).to.equal(false);
    });

    it.skip('shows user original attempted route after sign in', () => {
      // waiting a biz routes to be implemented
      expect(true).to.equal(false);
    });
  });

  describe('exceptions', () => {

  });
});
