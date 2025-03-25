import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {URLS,cred} from '../cypress_env';
import Login from '../../e2e/PageObject/LoginPage';
import HomePage from '../../e2e/PageObject/HomePage';
const hPage = new HomePage();
const loginPage = new Login();

Given('I visit the login page', () => {
  cy.visit(URLS.LoginPageUrl);
  
});

When('I enter valid credentials', () => {
  loginPage.setEmailAddress(cred.email)
  loginPage.setPassword(cred.password,URLS.PassworfPageUrl)
});

Then('I should see the dashboard', () => {
  loginPage.verifyLoginSuccessfull(URLS.LoginPageUrl)
});

Given("I click on new session", () => {
  hPage.clickNewSession();
  
});

Given("select Upload session audio option from start transcribing", () => {
   hPage.clickUploadSessionAudio();
});

Then("I wait for dialog to appear", () => {
  hPage.dialogAppear();
  console.log("IN transscribe")
});

Then("I upload file and wait for completion", () => {
  hPage.uploadFile();
});

Then("I verify both Note and Referral letter tabs are created", () => {
  hPage.verifyNoteReferralCraetion();
});

Then("I verify both tabs contain data", () => {
  hPage.verifyDataExistense();
});

Then("I select note tab and click view-edit tempalte from ellipses dropdown", () => {
  hPage.noteTabSelectionAndClick();
});

Then("I wait for edit template dialog to appear", () => {
  hPage.waitForEditTemplate();
});

Then("I make changes in Title and append Text", () => {
  hPage.makeChangesInTempalte();
});

Then("I click on save and use button", () => {
  hPage.saveTemplateChanges();
});

Then("Wait for New referral letter to be generated", () => {
  hPage.verifyUpdatedReferralLetter();
});

Then("I verify the updated text", () => {
  hPage.verifyUpdatedReferralLetter();
});

Given("I click on LogOut", () => {

    cy.contains('div.flex.items-center', 'QA Role')
    .within(() => {
      cy.get(hPage.userDropDown).click();
    });
    cy.get(hPage.transcribingMenu).should('be.visible');
    cy.contains('[role="menuitem"]', 'Log out').click({timeout:30  *1000
    });
  
});

Then("I verify user is back to login page", () => {
    cy.url().should('include', 'scribe.heidihealth.com');
    cy.get('input[type=email]').should('be.visible')
});