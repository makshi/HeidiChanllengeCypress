class Login {
    // Define the selectors for the login page elements
    emailAddress = 'input[type=email]';
    password = '#verify_password_p_password';
    submit = '.kinde-button-text';
    // newSessionButton = 'flex.items-center.gap-2.font-medium.leading-4.text-white.overflow-hidden.text-ellipsis';
    
  
    // Method to type the username (email address) into the email input field
    setEmailAddress(username) {
      cy.get(this.emailAddress).type(username);
      cy.contains('button', 'Sign in with email').click();
    }
  
    // Method to type the password into the password input field
    setPassword(passwordValue,passPageUrl) {
        let pwd = this.password
        let submit_btn = this.submit
        cy.origin(passPageUrl, { args: { passwordValue, pwd,submit_btn} },({passwordValue,pwd,submit_btn}) => {
            cy.get(pwd).type(passwordValue)
            cy.get(submit_btn).click()  
            cy.wait(500)            
          })   
    }
   // VerifySucceefulLogin
    verifyLoginSuccessfull(loginPageUrl){
      
        cy.url().should('include', loginPageUrl);  
        cy.reload();
        cy.wait(10*1000)
        cy.contains('button', 'New session').should('exist');
  
    }
    confirmNoteandReferralLetterTab(){
      cy.get('div[role="tablist"].tabs-list-scrollbar').within(() => {
        cy.contains('button', 'Note').should('exist').and('be.visible');
        cy.contains('button', 'Referral letter').should('exist').and('be.visible');
      });
      cy.contains('Stop generating', { timeout: 60000 }).should('not.exist');
    }
  }
  
  export default Login;