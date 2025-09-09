import LoginPage from '../../../support/pages/LoginPage';
import TopMenu from '../../../support/pages/TopMenu';
import SideMenu from '../../../support/pages/SideMenu';

describe('Smoke Test - Test Setup', () => {

    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('/');
      cy.fixture('users').then((users) => {
        const user = users.standardUser;
        LoginPage.login(user.username, user.password);
      });
      SideMenu.selectPage('Recruitment')
    });

    afterEach(() => {
      TopMenu.logout();
    });
  
    it('Visit Recruitment Page', () => {
      
    })
  
  })