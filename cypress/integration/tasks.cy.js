describe('Tasks', () => {
  it('should create a new task', () => {
    cy.visit('http://localhost:3000');
    const title = 'Sweet cherry!';
    cy.get('button').contains('Add new task').click();
    cy.get('input[name="title"]').type(title);
    cy.get('button').contains('Add task').click();
    cy.get('div').contains(title).should('exist');
  });
});
