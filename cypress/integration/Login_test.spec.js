describe('Login fuctionality', () => {
    it('should respond with error when filling username space and not password space' , () => {
        cy.visit("F")


        cy.get('input[id="login-username"]').type('youssef.elgazar99@icloud.com')
        
        cy.get('button[id="login-button"]').click()

        cy.get('label[class="control-label-validation ng-binding ng-scope"]')
          .invoke('text')
          .should('equal', 'Please enter your password.');


    })

    it('should respond with error when filling password space and not username space' , () => {
        cy.visit("F")


        cy.get('input[id="login-password"]').type('YoussefN99')
        
        cy.get('button[id="login-button"]').click()

        cy.get('label[ng-if="accounts.username.$error.required"]')
          .invoke('text')
          .should('equal', 'Please enter your Spotify username or email address.');
    })

    it('should respond with error when entering wrong username or password' , () => {
        cy.visit("F")

        cy.get('input[id="login-username"]').type('youssef.elgazar99@icloud.com')

        cy.get('input[id="login-password"]').type('YoussefV99')

        cy.get('button[id="login-button"]').click()

        cy.get('span[ng-if="response.error"]')
          .invoke('text')
          .should('equal', 'Incorrect username or password.');

        cy.get('input[id="login-username"]')
          .clear()
          .type('yussef.elgazar99@icloud.com')

        cy.get('input[id="login-password"]')
          .clear()
          .type('YoussefN99')
  
        cy.get('button[id="login-button"]').click()

        cy.get('span[ng-if="response.error"]')
          .invoke('text')
          .should('equal', 'Incorrect username or password.');
    })

    it('should respond with error when not filling both places(username and password)' , () => {
        cy.visit("F")

        cy.get('button[id="login-button"]').click()

        cy.get('label[ng-if="accounts.username.$error.required"]')
          .invoke('text')
          .should('equal', 'Please enter your Spotify username or email address.');

        cy.get('label[ng-if="accounts.password.$error.required"]')
          .invoke('text')
          .should('equal', 'Please enter your password.');

       
    })


})