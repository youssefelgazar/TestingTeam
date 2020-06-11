describe('Login fuctionality', () => {
    it('should respond with error when filling username space and not password space' , () => {
        cy.visit("https://accounts.spotify.com/en/login")


        cy.get('input[name="username"]').type('youssef.elgazar99@icloud.com')
        
        cy.get('button[class="btn btn-block btn-green ng-binding"]').click()

        cy.get('label[class="control-label-validation ng-binding ng-scope"]')
          .invoke('text')
          .should('equal', 'Please enter your password.' );


    })

    it('should respond with error when filling password space and not username space' , () => {
        cy.visit("https://accounts.spotify.com/en/login")


        cy.get('input[name="password"]').type('YoussefN99')
        
         cy.get('button[class="btn btn-block btn-green ng-binding"]').click()

        cy.get('label[class="control-label-validation ng-binding ng-scope"]')
          .invoke('text')
          .should('equal', 'Please enter your Spotify username or email address.');
    })

    it('should respond with error when entering wrong username or password' , () => {
        cy.visit("https://accounts.spotify.com/en/login")

         cy.get('input[name="username"]').type('youssef.elgazar99@icloud.com')

        cy.get('input[name="password"]').type('YoussefV99')

         cy.get('button[class="btn btn-block btn-green ng-binding"]').click()

        cy.get('label[class="error"]')
          .invoke('text')
          .should('equal', 'Incorrect user or password');

         cy.get('input[name="username"]')
          .clear()
          .type('yussef.elgazar99@icloud.com')

        cy.get('input[name="password"]')
          .clear()
          .type('YoussefN99')
  
        cy.get('button[class="btn btn-block btn-green ng-binding"]').click()

        cy.get('div[class="error"]')
          .invoke('text')
          .should('equal', 'Incorrect username or password.');
    })

    it('should respond with error when not filling both places(username and password)' , () => {
        cy.visit("https://accounts.spotify.com/en/login")

         cy.get('button[class="btn btn-block btn-green ng-binding"]').click()

        cy.get('div[class="error"]')
          .invoke('text')
          .should('equal', 'Please enter your Spotify username or email address.Please enter your password.');

       
    })

    it('should open forgot password window correctly', () => {
        cy.visit("https://accounts.spotify.com/en/login")

        cy.get('a[id="reset-password-link"]').click()

         cy.url().should('include', '/password-reset')
     
    })

    it('should open signup window correctly', () => {
      cy.visit("https://accounts.spotify.com/en/login")

      cy.get('a[class="btn3"]').click()

      cy.url().should('include', '/signup')

    })

    it('should take you to the continue with facebook page' , () => {
      cy.visit("https://accounts.spotify.com/en/login")
      cy.get('button[class="btn2"]').click()
      cy.url().should('include', '/ContinueWithFacebook')

    })
    it('should login naturally when entering right credentials' , () => {
        cy.visit("https://accounts.spotify.com/en/login")

         cy.get('input[name="username"]').type('youssef.elgazar99@icloud.com')

        cy.get('input[name="password"]').type('YoussefN99')

         cy.get('button[class="btn btn-block btn-green ng-binding"]').click()

        cy.url().should('include','/Home')

    })
    

 })