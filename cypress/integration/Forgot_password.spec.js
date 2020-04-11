describe('it tests the forgot you password page ',() => {

    it('should contain all headers ', () =>{

        cy.visit('https://www.spotify.com/eg-en/password-reset/')
        cy.get('h1')
          .invoke('text')
          .should('equal', '\n                     Password Reset\n         ')

    })

})