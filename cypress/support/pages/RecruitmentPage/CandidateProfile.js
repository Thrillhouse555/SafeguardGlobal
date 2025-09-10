class CandidateProfile {

    firstNameField = '[name="firstName"]'
    lastNameField = '[name="lastName"]'
    editButton = 'label:contains("Edit") input'

    addFirstName(firstName) {
        cy.get(this.firstNameField).clear().type(firstName);
    }

    addLastName(lastName) {
        cy.get(this.lastNameField).clear().type(lastName);
    }

    addEmail(email) {
        cy.inputField('Email', email)
    }

    addKeywords(keywords) {
        cy.inputField('Keywords', keywords)
    }

    checkFirstName(firstName) {
        cy.get(this.firstNameField).should('have.value', firstName);
    }

    checkLastName(lastName) {
        cy.get(this.lastNameField).should('have.value', lastName);
    }

    checkEmail(email) {
        cy.checkField('Email', email)
    }

    checkKeywords(keywords) {
        cy.checkField('Keywords', keywords)
    }

    editToggle() {
        cy.get(this.editButton).click();
    }


  }
  
  export default new CandidateProfile();
