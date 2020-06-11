describe('Sign up validity',() => {
    it('checks page redial',()=>{
        cy.visit('https://accounts.spotify.com/en/signup')
        cy.url().should('include', '/signup')
    })
    it('checks invalid email handling',()=>{ 
        cy.get('#signupForm > div > input:nth-child(11)').type("dummyyahoo.com")
        cy.get('#signupForm > div > div:nth-child(12)').should('exist')
        
            
    })            

   
    it('Checks underage warning label',()=>{
        cy.get('#signupForm > div > input:nth-child(20)').clear()
        cy.get('#signupForm > div > input:nth-child(20)').type('2')
        cy.get('#signupForm > div > div:nth-child(21)').should('exist')
        
    })            
    it('checks unsatisfying password',()=>{

        cy.get('#signupForm > div > input:nth-child(17)').clear()
        cy.get('#signupForm > div > input:nth-child(17)').type("low")
        cy.get('#signupForm > div > div:nth-child(18)').should('exist')
    })
    it('Checks DropBox functioning',()=>{
        cy.get('#select').select('Male')
              .invoke("text")
              .should('equal','Male')

    })
    it('Check complete SignUp indication',()=>{
        cy.get('#signupForm > div > input:nth-child(11)').clear() 
        cy.get('#signupForm > div > input:nth-child(11)').type("piocv@yahoo.com")
        cy.get('#signupForm > div > input:nth-child(17)').clear()
        cy.get('#signupForm > div > input:nth-child(17)').type("encryption")
        cy.get('#signupForm > div > input:nth-child(14)').type("name")
        cy.get('#signupForm > div > input:nth-child(20)').clear()
        cy.get('#signupForm > div > input:nth-child(20)').type('20')  
        cy.get('#signupForm > div > button.btn').click()
        cy.get('#signupForm > div > div.errormsg2').should('exist')

    })
    it('Check another SignUp with same information',()=>{
        cy.get('#signupForm > div > input:nth-child(11)').clear() 
        cy.get('#signupForm > div > input:nth-child(11)').type("piocv@yahoo.com")
        cy.get('#signupForm > div > input:nth-child(17)').clear()
        cy.get('#signupForm > div > input:nth-child(17)').type("encryption")
        cy.get('#signupForm > div > input:nth-child(14)').type("name")
        cy.get('#signupForm > div > input:nth-child(20)').clear()
        cy.get('#signupForm > div > input:nth-child(20)').type('20')  
        cy.get('#signupForm > div > button.btn').click()
        cy.get('#signupForm > div > div.errormsg2').should('not.exist')

    })
    it('Checks login button renders a /login',()=>{
        cy.get('#forlogin').click()
        cy.url().should('include', '/login')        


    })
  
     
})