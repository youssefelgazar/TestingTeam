describe('Your Library',function(){
   
    it('Create New Play List',function(){ 
    cy.SignIn()
    cy.contains('Your Library').click()
    cy.url().should('include','/collection/playlists')
    cy.contains('help you make the perfect mixtape, minus the tape').should('be.visible')
    cy.contains('Create Playlist').should('be.visible').click()
    cy.contains('CANCEL').should('be.visible').click()
    //cy.contains('Create Playlist').should('be.visible').click()
    //click on X
    cy.contains('Create').should('be.visible').click()
    cy.get('input[placeholder="New Playlist"]').type('Test')
    cy.contains('CREATE').should('be.visible').click()
    cy.contains('CANCEL').should('be.visible').click()
    cy.url().should('include','/playlist')
    cy.contains('Recommended Songs').should('be.visible')
    //cy.contains('Add').click() add first songs to Test playlist
    //Refresh
    //Add second song 
    //Add first one in playlist to liked
    cy.contains('a bit empty here...').should('be.visible')
    cy.contains('NEW RELEASES').scrollIntoView().should('be.visible').click()
    cy.url().should('include','/browse/newreleases')
    cy.contains('The best new releases').should('be.visible')
    cy.go('back')
    })

    it('Liked Songs',function(){ 
    cy.SignIn()
    cy.contains('Liked Songs').click()
    cy.url().should('include','/collection/tracks')
    cy.contains('Songs you’ve liked live here').should('be.visible')

    })
     
    it('albums(discover)',function(){
        cy.SignIn()
        cy.contains('Your Library').click()
        cy.contains('More').should('be.visible').click()
        cy.contains('Albums').should('be.visible').click()
        cy.contains('DISCOVER').should('be.visible').click()
        cy.contains('Save your favourite albums').should('be.visible')
        cy.contains('DISCOVER').should('be.visible').click()
        cy.url().should('include','/browse/discover')
        cy.contains('Playlists made just for you').should('be.visible')
    })
    it('artist(Search)',function(){
        cy.SignIn()
        cy.contains('Your Library').click()
        cy.contains('More').should('be.visible').click()
        cy.contains('Artists').should('be.visible').click()
        cy.url().should('include','/collection/artists')
        cy.contains('Your artists will appear here.').should('be.visible')
        cy.contains('Search').should('be.visible').click()
        cy.get('input[placeholder="Search for Artists, Songs, or Podcasts"]').type('The Notorious B.I.G.')
        cy.contains('The Notorious B.I.G.').should('be.visible').click()
        cy.url().should('include','/artist')
    })


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false


    })








})