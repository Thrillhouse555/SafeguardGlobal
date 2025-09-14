import AddVacancySection from "./AddVacancySection"

class VacanciesSection {

  selectText = '.oxd-select-wrapper'
  gridItem = '.oxd-grid-item'
  tableCard = '.oxd-table-card'
  trashButton = 'button .oxd-icon.bi-trash'
  editButton = 'button .oxd-icon.bi-pencil-fill'

  add(vacancyKey) {
    
    cy.fixture('vacancies').then((vacancies) => {
      const vacancy = vacancies[vacancyKey];
      cy.get('button').contains('Add').click();
      AddVacancySection.addVacancyName(vacancy.name);
      AddVacancySection.addJobTitle(vacancy.jobTitle);
      AddVacancySection.addDescription(vacancy.description);

      //HIRING MANAGER WORK AROUND
      //AddVacancySection.addHiringManager(vacancy.hiringManagerFirstName, vacancy.hiringManagerLastName);
      cy.get('p.oxd-userdropdown-name').invoke('text').then(fullName => {
      const [firstName, lastName] = fullName.trim().split(' ');
      AddVacancySection.addHiringManager(firstName, lastName);
      });
      cy.intercept('GET', '/web/index.php/api/v2/recruitment/vacancies/*').as('getVacancy');
      cy.get('button').contains('Save').click();
      cy.wait('@getVacancy', {timeout: 10000});
    });
    
  }

  search(vacancyKey) {
    cy.intercept('GET', '/web/index.php/api/v2/recruitment/vacancies*').as('getVacancy');
    cy.fixture('vacancies').then((vacancies) => {
      const vacancy = vacancies[vacancyKey];
      const fullName = vacancy.hiringManagerFirstName + ' ' + vacancy.hiringManagerLastName
      cy.selectDropdown('Job Title', vacancy.jobTitle);
      cy.selectDropdown('Vacancy', vacancy.name);
      //Removed due to Hiring Manager Workaround
      //cy.selectDropdown('Hiring Manager', fullName);
      cy.selectDropdown('Status', 'Active');
      cy.get('button').contains('Search').click();
      cy.wait('@getVacancy');
      cy.get(this.tableCard).should('have.length', 1);
      cy.get(this.tableCard).contains(vacancy.jobTitle);
      cy.get(this.tableCard).contains(vacancy.name);
      //Hiring Manager Workaround
      //cy.get(this.tableCard).contains(fullName);
      cy.get(this.tableCard).contains('Active');
      });
}

delete(vacancyKey) {
    cy.intercept('DELETE', '/web/index.php/api/v2/recruitment/vacancies*').as('deleteVacancy');
    cy.fixture('vacancies').then((vacancies) => {
      const vacancy = vacancies[vacancyKey];
        cy.get(this.tableCard).contains(vacancy.name).parents(this.tableCard).find(this.trashButton).click();
        cy.get('button').contains('Yes').click();
        cy.wait('@deleteVacancy');
      });
      
}

view(vacancyKey) {
  cy.fixture('vacancies').then((vacancies) => {
    const vacancy = vacancies[vacancyKey];
    cy.get(this.tableCard).contains(vacancy.name).parents(this.tableCard).find(this.editButton).click();
  });
}

edit(vacancyKey) {
  cy.fixture('vacancies').then((vacancies) => {
    const vacancy = vacancies[vacancyKey];
    AddVacancySection.addVacancyName(vacancy.name);
    AddVacancySection.addJobTitle(vacancy.jobTitle);
    AddVacancySection.addDescription(vacancy.description);
    //HIRING MANAGER WORK AROUND
    //AddVacancySection.addHiringManager(vacancy.hiringManagerFirstName, vacancy.hiringManagerLastName);
    cy.intercept('GET', '/web/index.php/api/v2/recruitment/vacancies/*').as('editVacancy');
    cy.get('button').contains('Save').click();
    cy.wait('@editVacancy', {timeout: 10000});
  });
  
}

    

  }
  
  export default new VacanciesSection();