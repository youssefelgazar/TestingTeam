describe('SideBarAndNavBar',function(){
     // Sign in func in commands.js
    beforeEach(function () {
        cy.SignIn()
    })

     //Clik on Search, Assertion, Search for smt tere, Searc for smt not there
    it('Search',function(){                 
    cy.contains('Search').should('be.visible').click()
    cy.url().should('include','/search')
    cy.contains('Browse all').should('be.visible')
    
    cy.get('input[placeholder="Search for Artists, Songs, or Podcasts"]').type('Estranged')
    cy.contains('Top result').should('be.visible')
    cy.get('input[placeholder="Search for Artists, Songs, or Podcasts"]').type('askfbsdbd')
    cy.contains('No results found for "Estrangedaskfbsdbd"').should('be.visible')
    })

  

     // Check each button in Nav Bar after clickin on library
    it('Library',function(){
        cy.contains('Your Library').should('be.visible').click()
        cy.url().should('include','/collection/playlists')
        cy.contains('Playlists').should('be.visible')
        cy.contains('More').should('be.visible').click()
        cy.contains('podcasts').should('be.visible').click()
        cy.url().should('include','/collection/podcasts')
        cy.contains('Podcasts').should('be.visible').click()
        cy.contains('artists').should('be.visible').click()
        cy.url().should('include','/collection/artists')
        cy.contains('Artists').should('be.visible').click()
        cy.contains('albums').should('be.visible').click()
        cy.url().should('include','/collection/albums')

    })
    
     // Creates a Playlist Called Test
    it('CreatePlaylist',function(){

    cy.contains('Create Playlist').should('be.visible').click()
    cy.get('input[placeholder ="New Playlist"]').type('Test')

    })
    //Check the Liked Songs page , check on test playlist , return to home

    it('Liked SongsHome',function(){
    cy.contains('Liked Songs').should('be.visible').click()
    cy.url().should('include','/collection/tracks')
    cy.contains('Test').should('be.visible')
    cy.contains('Home').should('be.visible').click()
    })
    

    //acount icon
    //upgrade- account btfta7 new tab 
    //logout 

    it('UpgradeAccountLogout',function(){
        // Go back
        // forward
        //Upgrade.click
        //Account.click
        //LogOut.click
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false


    })

   
})