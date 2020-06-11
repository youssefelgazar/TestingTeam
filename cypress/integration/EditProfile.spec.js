describe('Edit Profile test senario',function(){
    it('should open Edit Profile and give error when leaving the email empty ',function(){
        cy.SignIn()
        cy.contains('Spotify',{timeout:10000}).should('be.visible')
        cy.contains('Egypt (English)').click()
        cy.url().should('include','/eg-en/')
        cy.wait(5000)
        cy.get('li.svelte-kdyqkb > .navbar-highlight-white').click()
        cy.get('ul.sv50000elte-11h1c9 > :nth-child(1) > .svelte-11h1c9').click()
        cy.url().should('include','/account')
        cy.wait(5000)
        cy.get(':nth-child(2) > div > .CTA__root--3drmT').click()
        cy.get('#profile_email').clear()
        cy.get('#profile_save_profile').click()
        cy.get('.control-label-validation')
        .invoke('text')
        .should('equal','You must specify your email.')
    })

    it('should open Edit Profile and give error when entering wrong email',function(){
        cy.SignIn()
        cy.contains('Spotify',{timeout:10000}).should('be.visible')
        cy.url().should('include','/eg-en/')
        cy.url().should('include','/account')
        cy.wait(5000)
        cy.get(':nth-child(2) > div > .CTA__root--3drmT').click()
        cy.get('#profile_email').clear()
        cy.get('#profile_email').type('numby@@email.com')
        cy.get('#profile_confirmPassword').type('YoussefN99')
        cy.get('#profile_save_profile').click()
        cy.get('.control-label-validation')
        .invoke('text')
        .should('equal','The email address you supplied is invalid, please check to ensure it is correct.')
    })
    it('should open Edit Profile and change email correctly email',function(){
        cy.SignIn()
        cy.contains('Spotify',{timeout:10000}).should('be.visible')
        cy.url().should('include','/eg-en/')
        cy.url().should('include','/account')
        cy.wait(5000)
        cy.get(':nth-child(2) > div > .CTA__root--3drmT').click()
        cy.get('#profile_email').clear()
        cy.get('#profile_email').type('numby@email.com')
        cy.get('#profile_confirmPassword').type('YoussefN99')
        cy.get('#profile_save_profile').click()
        cy.get('p')
        .invoke('text')
        .should('equal','Profile saved')
        cy.get('#profile_email').clear()
        cy.get('#profile_email').type('youssef.elgazar99@icloud.com')
        cy.get('#profile_confirmPassword').type('YoussefN99')
        cy.get('#profile_save_profile').click()
        cy.get('p')
        .invoke('text')
        .should('equal','Profile saved')

    })


})