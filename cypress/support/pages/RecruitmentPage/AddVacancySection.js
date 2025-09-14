class addVacancySection {

    gridItem = '.oxd-grid-item'

    addVacancyName(name) {
        cy.inputField('Vacancy Name', name);
    }

    addJobTitle(jobTitle) {
        cy.selectDropdown('Job Title', jobTitle)
    }

    addDescription(description) {
        cy.get(this.gridItem).contains('Description').should('be.visible').parents(this.gridItem).find('textarea').clear().type(description);
    }

    addHiringManager(firstName, lastName) {
        const fullName = firstName + ' ' + lastName
        cy.inputField('Hiring Manager', firstName, { delay: 200 });
        //cy.autocomplete(fullName);
        //HIRING MANAGER WORK AROUND
        cy.autocomplete(firstName);
    }


  }
  
  export default new addVacancySection();