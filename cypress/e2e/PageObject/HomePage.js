class HomePage{
    transcribingIcon = 'div[aria-haspopup="menu"][data-state="closed"]';
    transcribingMenu = '[role="menu"]';
    uploadDialog = '.ant-upload-drag-container'
    inputFile = 'input[type="file"]'
    table = 'div[role="tablist"].tabs-list-scrollbar'
    referrerLetter ='.DraftEditor-editorContainer'
    tabsMenu = 'div[role="tablist"].tabs-list-scrollbar'
    noteContent = '.public-DraftEditor-content'
    outerContainer = 'div.rounded-lg.text-card-foreground.shadow-sm'
    noteElipses = 'svg.lucide-ellipsis'
    editTemplate = 'input[placeholder="Untitled template"]'
    userDropDown = 'svg.lucide-chevron-down'


    clickNewSession()
    {
       
        cy.contains('button', 'New session').should('exist').should('be.visible').click();
        cy.wait(15 * 1000)
        cy.get(this.transcribingIcon).should('exist')
        cy.get(this.transcribingIcon).eq(0)
        .should('be.visible')
        .click();
    }
    clickUploadSessionAudio()
    {
        cy.get(this.transcribingMenu).should('be.visible');
        cy.contains('div[role="menuitem"]', 'Upload session audio')
        .should('be.visible')
        .click();
    }
    dialogAppear()
    {
        console.log("In dialog")
        cy.get(this.uploadDialog).should('be.visible')
        .click();
        console.log("out of dialog")
        
    }
    
    uploadFile()
    {
        console.log("In upload")
        console.log(this.inputFile)
        cy.get(this.inputFile).selectFile('cypress/fixtures/test.mp3', { force: true});
        cy.get(this.uploadDialog,{timeout: 30*1000}).should('not.exist');
        console.log("out")
    }
    verifyNoteReferralCraetion()
    {
        cy.get(this.table).within(() => {
            cy.contains('button', 'Note').should('exist').and('be.visible');
            cy.contains('button', 'Referral letter').should('exist').and('be.visible');
          });

          cy.contains('button', 'Stop generating', { timeout: 60000 }).should('not.exist');

    }
    verifyDataExistense()
{
    cy.get(this.referrerLetter,{timeout: 10*1000}).should('exist').should('not.be.empty')
    cy.get(this.tabsMenu).contains('button', 'Note')
    .click();
    cy.get(this.noteContent).should('not.be.empty');
}   
    noteTabSelectionAndClick()
    {
         cy.get(this.outerContainer).first()
         .within(() => {
           cy.get(this.noteElipses) // Find the ellipsis icon
             .closest('button') // Climb to its button
             .click({ force: true }); // Force click in case of hover visibility
         });
         cy.contains('View / edit template').should('be.visible').click();
    }
    waitForEditTemplate()
    {
          cy.get(this.editTemplate).should('be.visible')
         
    }
    makeChangesInTempalte()
    {
        cy.get(this.editTemplate).should('be.visible')
          .clear()
          .type('Awesome New Title1',{timeout:5000});
          cy.get('textarea[placeholder="Start writing your template content here..."]')
  .should('be.visible')
  .type('\nHey, this is the new line you’re adding.',{timeout:5000});
    }
    saveTemplateChanges()
    {
        cy.contains('button[type="submit"]','Save & use').click();
    }
    verifyUpdatedReferralLetter(){

        cy.wait(5 * 1000)
        cy.contains('button', 'Awesome New Title1').click();
        cy.contains('button', 'Stop generating', { timeout: 60000 }).should('not.exist');

        cy.get(this.referrerLetter, { timeout: 10000 }).should('be.visible')
            .invoke('text')
            .should('include', "Hey, this is the new line you're adding.",{timeout: 10 * 1000});
    }
}
export default HomePage;