// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-if';

Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
      return false
    }
  })

  Cypress.Commands.add("inputField", (label, text, options) => { 
    const gridItem = '.oxd-grid-item'
    const fieldInput = 'input'
    cy.get(gridItem).contains(label).should('be.visible').parents(gridItem).find(fieldInput).clear().type(text, options);
   })

   Cypress.Commands.add("checkField", (label, text) => { 
    const gridItem = '.oxd-grid-item'
    const fieldInput = 'input'
    cy.get(gridItem).contains(label).should('be.visible').parents(gridItem).find(fieldInput).should('have.value', text);
   })





