import CandidateSection from "./RecruitmentPage/CandidateSection";

class RecruitmentPage {

    navTab = '.oxd-topbar-body-nav-tab-item'

    selectSection(section) {
      cy.get(this.navTab).contains(section).click();
      cy.task('logToTerminal', `User selects to visit the ${section} section.`);
    }

    addCandidate(candidate) {
      CandidateSection.add(candidate);
      cy.task('logToTerminal', `Saved Candidate: ${candidate}`);
    }

    searchCandidate(candidate) {
      CandidateSection.search(candidate);
      cy.task('logToTerminal', `Searched & Found Candidate: ${candidate}`);
    }

    viewCandidate(candidate) {
      CandidateSection.view(candidate);
      cy.task('logToTerminal', `Opened to view candidate: ${candidate}`);
    }

    deleteCandidate(candidate) {
      CandidateSection.delete(candidate);
      cy.task('logToTerminal', `Deleted Candidate: ${candidate}`);
    }

    checkCandidateDetails(candidate) {
      CandidateSection.check(candidate);
      cy.task('logToTerminal', `Checked details for candidate: ${candidate}`);
    }

    editCandidateDetails(candidate) {
      CandidateSection.edit(candidate)
      cy.task('logToTerminal', `Updated details to candidate: ${candidate}`);
    }

  }
  
  export default new RecruitmentPage();