import LoginPage from '../../../support/pages/LoginPage';
import TopMenu from '../../../support/pages/TopMenu';
import SideMenu from '../../../support/pages/SideMenu';
import RecruitmentPage from '../../../support/pages/RecruitmentPage';

describe('Recruitment Page - Add Vancancy', () => {

    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('/');
      LoginPage.login('standardUser')
      SideMenu.selectPage('Recruitment')
    });

    afterEach(() => {
      TopMenu.logout();
    });

    //SORT MISSING HIRING MANAGER ISSUE
    //Will have to write item for user's name and use for adding 

  
    it('Add & search for vacancy - accountant', () => {
      const vacancy = "accountant"
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.addVacancy(vacancy);
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.searchVacancy(vacancy);
      RecruitmentPage.deleteVacancy(vacancy);
      
    })

    it('Add & edit details for vacancy - accountant to payroll', () => {
      const vacancy1 = "payroll"
      const vacancy2 = "accountant"
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.addVacancy(vacancy1);
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.searchVacancy(vacancy1);
      RecruitmentPage.viewVacancy(vacancy1);
      RecruitmentPage.editVacancy(vacancy2);
      RecruitmentPage.searchVacancy(vacancy2);
      RecruitmentPage.deleteVacancy(vacancy2);
      
    })

  
  })