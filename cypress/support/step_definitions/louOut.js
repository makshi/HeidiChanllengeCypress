// import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

// import HomePage from '../../e2e/PageObject/HomePage';

// const homepage = new HomePage()


// Given("I click on LogOut", () => {

//     cy.contains('div.flex.items-center', 'QA Role')
//     .within(() => {
//       cy.get(homepage.userDropDown).click();
//     });
//     cy.get(homepage.transcribingMenu).should('be.visible');
//     cy.contains('[role="menuitem"]', 'Log out').click({timeout:30  *1000
//     });
  
// });

// Then("I verify user is back to login page", () => {
//     cy.url().should('include', 'scribe.heidihealth.com');
//     cy.get('input[type=email]').should('be.visible')
// });