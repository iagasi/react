describe('intercept', () => {
  beforeEach(() => {
    cy.intercept('GET', 'api/character', { fixture: 'intercept/characters.json' });
    cy.visit('/');
  });
  it('main page load', () => {
    cy.get('.item').should('have.length', '20');
    cy.get('.item').should('contain.text', 'TEST NAME');
  });

  it('search input works correctly', () => {
    const input = cy.get('input');
    input.should('have.text', '');
    input.type('hello');
    cy.get('button').contains('Search').click();
    cy.get('h1').contains('Nothing Found');
    cy.get('a').contains('Form').click();
    cy.get('a').contains('Main').click();
    cy.get('input').should('have.value', 'hello');
    cy.get('.search__delete-btn').click();

  });
});
