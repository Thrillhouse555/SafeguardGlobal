import LoginPage from '../../../support/pages/LoginPage';
import TopMenu from '../../../support/pages/TopMenu';
import SideMenu from '../../../support/pages/SideMenu';
import RecruitmentPage from '../../../support/pages/RecruitmentPage';

describe('Recruitment Page - Add Vancancy Test Scenarios', () => {

    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('/');
      LoginPage.login('standardUser')
      SideMenu.selectPage('Recruitment')
    });

    afterEach(() => {
      TopMenu.logout();
    });

  
    it('Add & search for vacancy - accountant', () => {
      const vacancy = "accountant"
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.addVacancy(vacancy);
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.searchVacancy(vacancy);
      RecruitmentPage.deleteVacancy(vacancy);
      
    })

    it('Add & edit details for vacancy - payroll to saleRep', () => {
      const vacancy1 = "payroll"
      const vacancy2 = "saleRep"
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.addVacancy(vacancy1);
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.searchVacancy(vacancy1);
      RecruitmentPage.viewVacancy(vacancy1);
      RecruitmentPage.editVacancy(vacancy2);
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.searchVacancy(vacancy2);
      RecruitmentPage.deleteVacancy(vacancy2);
      
    })

    it('Add vancancy, add candidate with vacancy - George, QALead', () => {
      const vacancy = "QALead"
      const candidate = "george"
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.addVacancy(vacancy);
      RecruitmentPage.selectSection('Candidates');
      RecruitmentPage.addCandidate(candidate, 'addVacancy');
      RecruitmentPage.selectSection('Candidates');
      RecruitmentPage.searchCandidate(candidate);
      RecruitmentPage.deleteCandidate(candidate);
      RecruitmentPage.selectSection('Vacancies');
      RecruitmentPage.searchVacancy(vacancy);
      RecruitmentPage.deleteVacancy(vacancy);

    })

  
  })