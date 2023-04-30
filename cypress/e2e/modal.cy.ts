describe('modal', () => {
  it('opens modal', () => {
    cy.intercept('GET', 'api/character', { fixture: 'intercept/characters.json' });
    cy.visit('/');
    cy.get('.item').contains('TEST NAME').click();
    cy.get('.opened-card__closeBtn').click();
    cy.get('.opened-card__closeBtn').should('not.exist');
  });
});
