class RecruitmentPage {

    menuItem = '.oxd-main-menu-item'

    selectPage(page) {
      cy.get(this.menuItem).contains(page).click();
      cy.task('logToTerminal', `User selects to visit the ${page} page.`);
    }
  }
  
  export default new RecruitmentPage();