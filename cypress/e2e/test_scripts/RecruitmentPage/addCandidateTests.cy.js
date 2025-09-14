import LoginPage from '../../../support/pages/LoginPage';
import TopMenu from '../../../support/pages/TopMenu';
import SideMenu from '../../../support/pages/SideMenu';
import RecruitmentPage from '../../../support/pages/RecruitmentPage';

describe('Recruitment Page - Add Candidate Test Scenarios', () => {

    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('/');
      LoginPage.login('standardUser')
      SideMenu.selectPage('Recruitment')
    });

    afterEach(() => {
      TopMenu.logout();
    });

  
    it('Add & search for candidate - dave', () => {
      const candidate = 'dave'
      RecruitmentPage.addCandidate(candidate);
      RecruitmentPage.selectSection('Candidates');
      RecruitmentPage.searchCandidate(candidate);
      RecruitmentPage.deleteCandidate(candidate);
    })

    it('Add & view details for candidate - susan', () => {
      const candidate = 'susan'
      RecruitmentPage.addCandidate(candidate);
      RecruitmentPage.selectSection('Candidates');
      RecruitmentPage.searchCandidate(candidate);
      RecruitmentPage.viewCandidate(candidate);
      RecruitmentPage.checkCandidateDetails(candidate)
      RecruitmentPage.selectSection('Candidates');
      RecruitmentPage.searchCandidate(candidate);
      RecruitmentPage.deleteCandidate(candidate);
    })

    it('Add & edit details for candidate - greg to steve', () => {
      const candidate1 = 'greg'
      const candidate2 = 'steve'
      RecruitmentPage.addCandidate(candidate1);
      RecruitmentPage.selectSection('Candidates');
      RecruitmentPage.searchCandidate(candidate1);
      RecruitmentPage.viewCandidate(candidate1);
      RecruitmentPage.editCandidateDetails(candidate2);
      RecruitmentPage.selectSection('Candidates');
      RecruitmentPage.searchCandidate(candidate2);
      RecruitmentPage.deleteCandidate(candidate2);
    })

  
  })