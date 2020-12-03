// clear users in firebase emulator
beforeEach(() => {
  cy.request({
    method: 'DELETE',
    url: 'http://localhost:9099/emulator/v1/projects/arc-prod-41999/accounts',
    headers: {
      Authorization: 'Bearer owner'
    }
  });
});
