
describe('NavBar',function(){
    it('Account',function(){
        cy.SignIn()
        cy.contains('Spotify',{timeout:10000}).should('be.visible')
        cy.contains('Home').click()
        cy.get('button[data-testid="user-widget-link"]').click()
        cy.contains('Account').invoke('removeAttr', 'target').click()
        cy.url().should('include','/account')
        cy.contains('Egypt (English)').click()
        cy.url().should('include','/eg-en/')
        cy.contains('Profile').click()
        cy.contains('Account').click()
        cy.contains('Account overview')
        cy.url().should('include','/overview')
        
        
    })

    it('Upgrade',function(){
    cy.SignIn()
    cy.contains('Spotify',{timeout:10000}).should('be.visible')
    cy.contains('Home').click()
    cy.get('button[data-testid="user-widget-link"]').click()
    cy.contains('Upgrade to Premium').invoke('removeAttr', 'target').click()
    cy.url().should('include','/premium')
    cy.contains('Premium').click()
    cy.contains('Get Premium free for 1 month').should('be.visible')
    })
    it('Logout',function(){
        cy.SignIn()
        cy.contains('Search').click()
        cy.url().should('include','/search')
        cy.contains('Your Library').click()
        cy.url().should('include','/collection/playlists')
        cy.get('button[title="Go back"]').click()
        cy.url().should('include','/search')
        cy.get('button[title="Go forward"]').click({force:true})
        cy.url().should('include','/collection/playlists')
        cy.get('button[data-testid="user-widget-link"]').click()
        cy.contains('Log out').invoke('removeAttr', 'target').click()
        cy.contains('SIGN UP').should('be.visible')
     
        cy.contains('Uniquely yours').should('be.visible')
        cy.contains('Home').should('be.visible')


    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false


    })

   
})