import LoginPage from './LoginPage';

class TopMenu {

    dropdownTab = '.oxd-userdropdown-tab'
    logoutLink = 'a[href*="/logout"]';
    topbarHeader = '.oxd-topbar-header'

    confirmHeader(headerName) {
      cy.get(this.topbarHeader).should('contain.text', headerName);
    }

    logout() {
      cy.get(this.dropdownTab).click();
      cy.get(this.logoutLink).should('be.visible').click();
      cy.get(LoginPage.loginButton).should('contain.text', 'Login');
      cy.task('logToTerminal', `User is logged out`);
    }
  }
  
  export default new TopMenu();
  