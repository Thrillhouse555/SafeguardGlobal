import AddVacancySection from "./AddVacancySection"

class VacanciesSection {

  selectText = '.oxd-select-wrapper'
  gridItem = '.oxd-grid-item'
  tableCard = '.oxd-table-card'
  trashButton = 'button .oxd-icon.bi-trash'
  editButton = 'button .oxd-icon.bi-pencil-fill'

  add(vacancyKey) {
    cy.intercept('GET', '/web/index.php/api/v2/recruitment/vacancies/*').as('getVacancy');
    cy.fixture('vacancies').then((vacancies) => {
      const vacancy = vacancies[vacancyKey];
      cy.get('button').contains('Add').click();
      AddVacancySection.addVacancyName(vacancy.name);
      AddVacancySection.addJobTitle(vacancy.jobTitle);
      AddVacancySection.addDescription(vacancy.description);
      AddVacancySection.addHiringManager(vacancy.hiringManagerFirstName, vacancy.hiringManagerLastName);
      cy.get('button').contains('Save').click();
    });
    cy.wait('@getVacancy');
  }

  search(vacancyKey) {
    cy.intercept('GET', '/web/index.php/api/v2/recruitment/vacancies*').as('getVacancy');
    cy.fixture('vacancies').then((vacancies) => {
      const vacancy = vacancies[vacancyKey];
      const fullName = vacancy.hiringManagerFirstName + ' ' + vacancy.hiringManagerLastName
      cy.selectDropdown('Job Title', vacancy.jobTitle);
      cy.selectDropdown('Vacancy', vacancy.name);
      cy.selectDropdown('Hiring Manager', fullName);
      cy.selectDropdown('Status', 'Active');
      cy.get('button').contains('Search').click();
      cy.wait('@getVacancy');
      cy.get(this.tableCard).should('have.length', 1);
      cy.get(this.tableCard).contains(vacancy.jobTitle);
      cy.get(this.tableCard).contains(vacancy.name);
      cy.get(this.tableCard).contains(fullName);
      cy.get(this.tableCard).contains('Active');
      });
}

delete(vacancyKey) {
    cy.intercept('DELETE', '/web/index.php/api/v2/recruitment/vacancies*').as('deleteVacancy');
    cy.fixture('vacancies').then((vacancies) => {
      const vacancy = vacancies[vacancyKey];
        cy.get(this.tableCard).contains(vacancy.name).parents(this.tableCard).find(this.trashButton).click();
        cy.get('button').contains('Yes').click();
      });
      cy.wait('@deleteVacancy');
}

view(vacancyKey) {
  cy.fixture('vacancies').then((vacancies) => {
    const vacancy = vacancies[vacancyKey];
    cy.get(this.tableCard).contains(vacancy.name).parents(this.tableCard).find(this.editButton).click();
  });
}

    

  }
  
  export default new VacanciesSection();