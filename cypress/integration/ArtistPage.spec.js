describe('Artist Page',function(){


    it('Over view,Related Artist,About',function(){
        cy.SignIn()
        cy.contains('The Notorious B.I.G.').should('be.visible').click()
        cy.contains('Overview').should('be.visible')
        cy.contains('Popular').should('be.visible')
        cy.contains('Albums').should('be.visible')
        cy.contains('Related Artists').should('be.visible').click()
        cy.url().should('include','/related')
        cy.contains('Artist').scrollIntoView().should('be.visible').click()
        cy.contains('About').click()
        cy.url().should('include','/about')
        cy.contains('Biography').should('be.visible')
        cy.contains('Where people listen').should('be.visible')
        cy.contains('Home').click()
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false


    })

})