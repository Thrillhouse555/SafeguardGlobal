import LoginPage from '../../../support/pages/LoginPage';
import TopMenu from '../../../support/pages/TopMenu';
import SideMenu from '../../../support/pages/SideMenu';
import RecruitmentPage from '../../../support/pages/RecruitmentPage';

describe('Recruitment Page - Add Candidate', () => {

    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('/');
      LoginPage.login('standardUser')
      SideMenu.selectPage('Recruitment')
    });

    afterEach(() => {
      TopMenu.logout();
    });

  
    it('Add & search for vacancy - testr', () => {
      RecruitmentPage

    })
  
  })