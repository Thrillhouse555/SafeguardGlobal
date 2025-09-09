describe('Smoke Test - Login', () => {

  beforeEach(() => {
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.viewport(1280, 720);
    cy.visit('/');
});

  it('standard login', () => {
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-topbar-header').should('contain.text', 'Dashboard')
  })

})