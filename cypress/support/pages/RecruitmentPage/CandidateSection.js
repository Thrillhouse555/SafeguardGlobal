import AddCandidateSection from "./AddCandidateSection";

class RecruitmentCandidateSection {

    selectText = '.oxd-select-wrapper'
    gridItem = '.oxd-grid-item'

    useSelect(label, option) {
        cy.get(this.gridItem).contains(label).should('be.visible').parents(this.gridItem).find(this.selectText).click();
        cy.get('.oxd-select-dropdown').contains('.oxd-select-option', option).should('be.visible').click()
    }

    add(candidateKey) {
        cy.intercept('GET', '/web/index.php/api/v2/recruitment/candidates/*').as('getCandidate');
        cy.fixture('candidates').then((candidates) => {
          const candidate = candidates[candidateKey];
          cy.get('button').contains('Add').click();
          AddCandidateSection.addFirstName(candidate.firstName);
          AddCandidateSection.addLastName(candidate.lastName);
          AddCandidateSection.addEmail(candidate.email);
          cy.get('button').contains('Save').click();
        });
        cy.wait('@getCandidate');
        cy.task('logToTerminal', `Saved Candidate: ${candidateKey}`);
      }

    search(candidateKey) {
        
        cy.fixture('candidates').then((candidates) => {
            const candidate = candidates[candidateKey];
            SearchCandidateSection.addFullName(candidate.firstName, candidate.lastName);
            cy.get('button').contains('Search').click();
          });

    }

    

  }
  
  export default new RecruitmentCandidateSection();