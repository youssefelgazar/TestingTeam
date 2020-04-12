
describe('SideBar',function(){
     // Sign in func in commands.js
     /*Cypress.Commands.add("SignIn",() =>{
    cy.visit('https://accounts.spotify.com/en/login?continue=https:%2F%2Fopen.spotify.com%2F')
    cy.get('input[id="login-username"]').type('saad.dine98@eng-st.cu.edu.eg')
    cy.get('input[id="login-password"]').type('u%GJG,fHdz6#g2F')
    cy.get('button[id="login-button"]').click()
    cy.contains('Spotify',{timeout:10000}).should('be.visible')
    cy.location('protocol').should('eq','https:') 

*/

    it('Search',function(){      
    cy.SignIn()           
    cy.contains('Search').should('be.visible').click()
    cy.url().should('include','/search')
    cy.contains('Browse all').should('be.visible')
    
    cy.get('input[placeholder="Search for Artists, Songs, or Podcasts"]').type('Estranged')
    cy.contains('Top result').should('be.visible')
    cy.get('input[placeholder="Search for Artists, Songs, or Podcasts"]').type('askfbsdbd')
    cy.contains('No results found for "Estrangedaskfbsdbd"').should('be.visible')
    })
    it('Library',function(){
        cy.SignIn()
        cy.contains('Your Library').should('be.visible').click()
        cy.url().should('include','/collection/playlists')
        cy.contains('Playlists').should('be.visible')
        cy.contains('More').should('be.visible').click()
        cy.contains('Podcasts').should('be.visible').click()
        cy.url().should('include','/collection/podcasts')
        cy.contains('Podcasts').should('be.visible').click()
        cy.contains('Artists').should('be.visible').click()
        cy.url().should('include','/collection/artists')
        cy.contains('Artists').should('be.visible').click()
        cy.contains('Albums').should('be.visible').click()
        cy.url().should('include','/collection/albums')

    })
    
    it('CreatePlaylist',function(){
        cy.SignIn()
        cy.contains('Create Playlist').should('be.visible').click()
        cy.get('input[placeholder ="New Playlist"]').type('Test')

    })
 
    it('Liked Songs Home',function(){
    cy.SignIn()
    cy.contains('Liked Songs').should('be.visible').click()
    cy.url().should('include','/collection/tracks')
    cy.contains('Test').should('be.visible')
    cy.contains('Home').should('be.visible').click()
    })

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false


    })

   
})