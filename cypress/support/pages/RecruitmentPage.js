import CandidateSection from "./RecruitmentPage/CandidateSection";

class RecruitmentPage {

    navTab = '.oxd-topbar-body-nav-tab-item'

    selectSection(section) {
      cy.get(this.navTab).contains(section).click();
      cy.task('logToTerminal', `User selects to visit the ${section} section.`);
    }

    addCandidate(candidate) {
      CandidateSection.add(candidate);
    }

  }
  
  export default new RecruitmentPage();