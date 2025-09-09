class CandidateSection {

    dropdownWrapper = '.oxd-select-wrapper'
    gridItem = '.oxd-grid-item'

    useSelect(label) {
        cy.get(this.gridItem).contains(label).isVisible
        cy.get(this.gridItem).contains(label).find(dropdownWrapper).click()
    }

  }
  
  export default new CandidateSection();