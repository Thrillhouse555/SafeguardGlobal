class SearchCandidateSection {

    firstNameField = '[name="firstName"]'
    lastNameField = '[name="lastName"]'

    addFullName(firstName, lastName) {
        const fullName = firstName + ' ' + lastName
        cy.inputField('Candidate Name', firstName);
        
    }

  }
  
  export default new SearchCandidateSection();