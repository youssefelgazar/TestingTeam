describe('Sign up validity',() => {
    it('checks page redial',()=>{
        cy.visit('/signup')
           cy.get('#email').type("dummy@yahoo.com")
           cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div.EmailForm__Center-jwtojv-0.gMBYBd > div > button').click()
           cy.url().should('include', '/signup')
    })
    it('checks error messages',()=>{ 
        cy.get('#email').type("dummy@yahoo.com")
        cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div.EmailForm__Center-jwtojv-0.gMBYBd > div > button').click()    
        cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div:nth-child(4) > div.FormHelpText__Help-e48exm-0.doEKrx.InputErrorMessage__Container-tliowl-0.ciTMoJ')
                .invoke("text")
                .should('equal', 'You need to enter a password.');
    })            

    it('triggers all type of almost complete signup',()=>{
        
        cy.get('#email').type("piocv@yahoo.com")
        cy.get('#confirm').type("piocv@yahoo.com")
        cy.get('#password').type("encryption")
        cy.get('#displayname').type("name")
        cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div:nth-child(7) > div.GenderSelect__FlexRow-v1a8zn-0.fRpOnE > label:nth-child(1) > span.Indicator-sc-16vj7o8-0.dDbCKU').click()
        cy.get('#day').type("2")
        cy.get('#year').type("1999")
        cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div.EmailForm__Center-jwtojv-0.gMBYBd > div > button').click()
        
        cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div:nth-child(6) > div:nth-child(3) > div')
               .invoke("text")
               .should('equal','Select your birth month.')
          
    })
    it('Not equal confirmed email',()=>{
        cy.get('#email').clear()
        cy.get('#email').type("piocv@yahoo.com")
        cy.get('#confirm').clear()
        cy.get('#confirm').type("piov@yahoo.com")
       
        cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div.EmailForm__Center-jwtojv-0.gMBYBd > div > button').click()
        
        cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div:nth-child(3) > div.FormHelpText__Help-e48exm-0.doEKrx.InputErrorMessage__Container-tliowl-0.ciTMoJ')
                .invoke("text")
                .should('equal',"The email addresses don't match.")
                
    })            
    it('checks logical year ',()=>{

        cy.get('#year').clear()
        cy.get('#year').type("2021")
        cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div:nth-child(6) > div:nth-child(3) > div')
                 .invoke("text")
                 .should('equal',"Select your birth month.Sorry, you don't meet Spotify's age requirements.")

    
            
       
         
    })
    it('Unsatisfying password',()=>{
        cy.get('#password').clear()
        cy.get('#password').type("en")
        cy.get('#__next > main > div.signuppage__Signup-sof6g5-0.YsCoj > form > div:nth-child(4) > div.FormHelpText__Help-e48exm-0.doEKrx.InputErrorMessage__Container-tliowl-0.ciTMoJ')
                .invoke("text")
                .should('equal',"Your password is too short.")
      



     })
})