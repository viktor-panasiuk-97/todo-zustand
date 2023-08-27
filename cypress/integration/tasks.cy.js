before(() => {
  cy.visit('http://localhost:3000');
});

describe('Tasks', () => {
  it('should create a new task via submit button', () => {
    const title = 'Sweet cherry!';
    cy.get(
      'div[data-testid="column-0"] button[data-testid="add-task__open-modal-btn"]',
    ).click();
    cy.get('input[data-testid="add-task__field-name"]').type(title);
    cy.get('button[data-testid="add-task__submit-btn"]').click();
    cy.get('div[data-testid="task-card"').contains(title).should('exist');
  });

  it('should create a new task via enter key', () => {
    const title = 'Salt potato!';
    cy.get(
      'div[data-testid="column-0"] button[data-testid="add-task__open-modal-btn"]',
    ).click();
    cy.get('input[data-testid="add-task__field-name"]').type(title);
    cy.get('input[data-testid="add-task__field-name"]').type('{enter}');
    cy.get('div[data-testid="task-card"').contains(title).should('exist');
  });

  it('should move the task from column to column', () => {
    cy.get('div[data-testid="column-0"]').within(() => {
      cy.get('div[data-testid="task-card"]')
        .contains('Salt potato!')
        .parentsUntil('div[data-testid="task-card"]')
        .within(() => {
          cy.get('button[data-testid="task-actions-btn"]').click();
        });
    });

    cy.get('*[data-testid="task-actions-list"]').within(() => {
      cy.get('*[role="button"]').contains('Done').click();
    });

    cy.get('div[data-testid="column-0"]').within(() => {
      cy.get('div[data-testid="task-card"]')
        .contains('Salt potato!')
        .should('not.exist');
    });

    cy.get('div[data-testid="column-2"]').within(() => {
      cy.get('div[data-testid="task-card"]')
        .contains('Salt potato!')
        .parentsUntil('div[data-testid="task-card"]')
        .within(() => {
          cy.get('button[data-testid="task-actions-btn"]').click();
        });
    });

    cy.get('*[data-testid="task-actions-list"]').within(() => {
      cy.get('*[role="button"]').contains('Todo').click();
    });

    cy.get('div[data-testid="column-0"]').within(() => {
      cy.get('div[data-testid="task-card"]')
        .contains('Salt potato!')
        .should('exist');
    });
  });
});
