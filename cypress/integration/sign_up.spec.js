describe('Sign up validity',() => {
    it('checks page redial',()=>{
        cy.visit('/signup')
           cy.get('input[id="register-email"]').type("dummy@yahoo.com")
           cy.get('a[id="register-button-email-submit"]').click()
           cy.url().should('include', '/signup')
    })
    it('checks error messages',()=>{ 
        cy.get('input[id="register-email"]').type("dummy@yahoo.com")
        cy.get('a[id="register-button-email-submit"]').click()    
        cy.get('label[for="register-password"]')
                .invoke("text")
                .should('equal', 'PasswordEnter a password to continue.');
    })            

    it('triggers all type of almost complete signup',()=>{
        
        cy.get('input[id="register-email"]').type("piocv@yahoo.com")
        cy.get('input[id="register-confirm-email"]').type("piocv@yahoo.com")
        cy.get('input[id="register-password"]').type("encryption")
        cy.get('input[id="register-displayname"]').type("name")
        cy.get('input[id="register-male"]').check()
        cy.get('input[id="register-dob-day"]').type("2")
        cy.get('input[id="register-dob-year"]').type("1999")
        cy.get('a[id="register-button-email-submit"]').click()
        
        cy.get('label[for="register-dob-month"]')
               .invoke("text")
               .should('equal','Please enter your birth month.')
          
    })
    it('Not equal confirmed email',()=>{
        cy.get('input[id="register-email"]').clear()
        cy.get('input[id="register-email"]').type("piocv@yahoo.com")
        cy.get('input[id="register-confirm-email"]').clear()
        cy.get('input[id="register-confirm-email"]').type("piov@yahoo.com")
       
        cy.get('a[id="register-button-email-submit"]').click()
        
        cy.get('label[for="register-confirm-email"]')
                .invoke("text")
                .should('equal',"Confirm emailEmail address doesn't match.")
                
    })            
    it('checks logical year ',()=>{

        cy.get('input[id="register-dob-year"]').clear()
        cy.get('input[id="register-dob-year"]').type("2021")
        cy.get('label[for="register-dob-year"]')
                 .invoke("text")
                 .should('equal',"Sorry, but you don't meet Spotify's age requirements.")

    
            
       
         
    })
    it('Unsatisfying password',()=>{
        cy.get('input[id="register-password"]').clear()
        cy.get('input[id="register-password"]').type("en")
        cy.get('label[for="register-password"]')
                .invoke("text")
                .should('equal',"PasswordYour password is too short.")
      



     })
})