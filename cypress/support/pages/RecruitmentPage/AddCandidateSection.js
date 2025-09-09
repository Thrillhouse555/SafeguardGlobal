class AddCandidateSection {

    firstNameField = '[name="firstName"]'
    lastNameField = '[name="lastName"]'

    addFirstName(firstName) {
        cy.get(this.firstNameField).type(firstName);
    }

    addLastName(lastName) {
        cy.get(this.lastNameField).type(lastName);
    }

    addEmail(email) {
        cy.inputField('Email', email)
    }



  }
  
  export default new AddCandidateSection();
