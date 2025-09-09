import TopMenu from './TopMenu';

class LoginPage {

    usernameField = '[name="username"]'
    passwordField = '[name="password"]'
    loginButton = 'button[type="submit"]'
  
    visit() {
      cy.visit('/');
      this.waitForPage();
    }

    waitForPage() {
      cy.get(this.usernameField, { timeout: 10000 }).should('be.visible');
    }
  
    fillUsername(username) {
      cy.get(this.usernameField).clear().type(username);
    }
  
    fillPassword(password) {
      cy.get(this.passwordField).clear().type(password);
    }
  
    submit() {
      cy.get(this.loginButton).click();
    }
  
    login(userKey) {
      cy.fixture('users').then((users) => {
        const user = users[userKey];
  
        this.fillUsername(user.username);
        this.fillPassword(user.password);
        this.submit();
        this.assertLoginSuccess();
      });
    }

    assertLoginSuccess() {
      TopMenu.confirmHeader('Dashboard');
      cy.task('logToTerminal', `User is logged in`);
    }
  
  }
  
  export default new LoginPage();
  