describe('Login fuctionality', () => {
    it('should respond with error when filling username space and not password space' , () => {
        cy.visit("/")


        cy.get('input[name="identifier"]').type('youssef.elgazar99@icloud.com')
        
        cy.get('button[class="btn"]').click()

        cy.get('div[class="error"]')
          .invoke('text')
          .should('equal', 'Incorrect user or passwordPlease enter your password.' );


    })

    it('should respond with error when filling password space and not username space' , () => {
        cy.visit("/")


        cy.get('input[name="password"]').type('YoussefN99')
        
        cy.get('button[class="btn"]').click()

        cy.get('div[class="error"]')
          .invoke('text')
          .should('equal', 'Incorrect user or passwordPlease enter your Spotify username or email address.');
    })

    it('should respond with error when entering wrong username or password' , () => {
        cy.visit("/")

        cy.get('input[name="identifier"]').type('youssef.elgazar99@icloud.com')

        cy.get('input[name="password"]').type('YoussefV99')

        cy.get('button[class="btn"]').click()

        cy.get('div[class="error"]')
          .invoke('text')
          .should('equal', 'Incorrect user or password');

        cy.get('input[name="identifier"]')
          .clear()
          .type('yussef.elgazar99@icloud.com')

        cy.get('input[name="password"]')
          .clear()
          .type('YoussefN99')
  
        cy.get('button[class="btn"]').click()

        cy.get('div[class="error"]')
          .invoke('text')
          .should('equal', 'Incorrect username or password.');
    })

    it('should respond with error when not filling both places(username and password)' , () => {
        cy.visit("/")

        cy.get('button[class="btn"]').click()

        cy.get('div[class="error"]')
          .invoke('text')
          .should('equal', 'Incorrect user or passwordPlease enter your Spotify username or email address.Please enter your password.');

       
    })

    it('should open forgot password window correctly', () => {
        cy.visit("/")

        cy.get('a[class="hyperLink"]').click()

         cy.url().should('include', '/page')
     
    })

    it('should open signup window correctly', () => {
      cy.visit("/")

      cy.get('a[class="btn3"]').click()

      cy.url().should('include', '/signup')

    })

    it('should take you to the continue with facebook page' , () => {
      cy.visit("/")
      cy.get('button[class="btn2"]').click()
      cy.url().should('include', '/ContinueWithFacebook')

    })
    it('should login naturally when entering right credentials' , () => {
        cy.visit("/")

        cy.get('input[name="identifier"]').type('youssef.elgazar99@icloud.com')

        cy.get('input[name="password"]').type('YoussefN99')

        cy.get('button[class="btn"]').click()

        cy.url().should('include','/Home')

    })
    

 })