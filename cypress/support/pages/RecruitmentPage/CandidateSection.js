import CandidateProfile from "./CandidateProfile";

class CandidateSection {

    gridItem = '.oxd-grid-item'
    tableCard = '.oxd-table-card'
    trashButton = 'button .oxd-icon.bi-trash'
    viewButton = 'button .oxd-icon.bi-eye-fill'

    add(candidateKey, option) {
        cy.intercept('GET', '/web/index.php/api/v2/recruitment/candidates/*').as('getCandidate');
        cy.fixture('candidates').then((candidates) => {
          const candidate = candidates[candidateKey];
          cy.get('button').contains('Add').click();
          CandidateProfile.addFirstName(candidate.firstName);
          CandidateProfile.addLastName(candidate.lastName);
          CandidateProfile.addEmail(candidate.email);
          CandidateProfile.addKeywords(candidate.keywords);
          if (option === 'addVacancy') {
            CandidateProfile.addVacancy(candidate.vacancy);
            cy.task('logToTerminal', `Added vancancy to candidate: ${candidate.vacancy}`);
          }
          cy.get('button').contains('Save').click();
        });
        cy.wait('@getCandidate');
      }

    search(candidateKey) {
        cy.intercept('GET', '/web/index.php/api/v2/recruitment/candidates?*').as('getCandidate');
        cy.fixture('candidates').then((candidates) => {
            const candidate = candidates[candidateKey];
            const fullName = candidate.firstName + ' ' + candidate.lastName
            cy.inputField('Candidate Name', candidate.firstName, { delay: 200 });
            cy.autocomplete(fullName);
            cy.inputField('Keywords', candidate.keywords);
            cy.get('button').contains('Search').click();
            cy.wait('@getCandidate');
            cy.get(this.tableCard).should('have.length', 1);
            cy.get(this.tableCard).contains(fullName);
          });
    }

    delete(candidateKey) {
        cy.intercept('DELETE', '/web/index.php/api/v2/recruitment/candidates*').as('deleteCandidate');
        cy.fixture('candidates').then((candidates) => {
            const candidate = candidates[candidateKey];
            const fullName = candidate.firstName + ' ' + candidate.lastName
            cy.get(this.tableCard).contains(fullName).parents(this.tableCard).find(this.trashButton).click();
            cy.get('button').contains('Yes').click();
          });
          cy.wait('@deleteCandidate');
    }

    view(candidateKey) {
        cy.intercept('GET', '/web/index.php/api/v2/recruitment/candidates?*').as('getCandidate');
        cy.fixture('candidates').then((candidates) => {
            const candidate = candidates[candidateKey];
            const fullName = candidate.firstName + ' ' + candidate.lastName
            cy.get(this.tableCard).contains(fullName).parents(this.tableCard).find(this.viewButton).click();
          });
          cy.wait('@getCandidate');
    }

    check(candidateKey) {
        cy.fixture('candidates').then((candidates) => {
          const candidate = candidates[candidateKey];
          CandidateProfile.checkFirstName(candidate.firstName);
          CandidateProfile.checkLastName(candidate.lastName);
          CandidateProfile.checkEmail(candidate.email);
          CandidateProfile.checkKeywords(candidate.keywords);
        });
    }

    edit(candidateKey) {
        cy.intercept('GET', '/web/index.php/api/v2/recruitment/candidates/*').as('getCandidate');
        CandidateProfile.editToggle();
        cy.fixture('candidates').then((candidates) => {
            const candidate = candidates[candidateKey];
            CandidateProfile.addFirstName(candidate.firstName);
            CandidateProfile.addLastName(candidate.lastName);
            CandidateProfile.addEmail(candidate.email);
            CandidateProfile.addKeywords(candidate.keywords);
            cy.get('button').contains('Save').click();
        });
        cy.wait('@getCandidate');
    }

    

  }
  
  export default new CandidateSection();