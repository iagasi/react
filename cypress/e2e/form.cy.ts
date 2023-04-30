describe('Form', () => {
  it('Form page exists', () => {
    cy.intercept('GET', 'api/character', { fixture: 'intercept/characters.json' });
    cy.visit('/form');
    const form = cy.get('form');
    form.get('input[placeholder*="Name"]').type('Myname');
    form.get('input[placeholder*="Surname"]').type('MySurname');
    form.get('[data-testid="checkboxHandled"]').click();
    form.get('[data-testid="selectCountries"]').select('England');
    form.get('[data-testid="formdate"]').type('2000-12-11');
    form.get('input[value="Male"]').click();
    form.get('.form__file').click();
    form.get('input[type=file]').selectFile('./cypress/e2e/test.png', { force: true });
    form.get('input[type=submit]').click();

  });
});
