function login()
{
    cy.visit('/account');
      cy.get('input[id="login-username"]').type("yussef.elgazar99@icloud.com")
      cy.get('input[id="login-password"]').type("YoussefN99")
      cy.get('button[id="login-button"]').click()     
    

}




describe('Premium subscription',() => {
    it('checks page redial',()=>{
        login()
        cy.visit('https://www.spotify.com/eg-en/purchase/offer/2020-midyear-trial-3m/')
           cy.get('body > div.wrap > div > section > div > h1')
                .invoke("text")
                .should('equal', 'Get Premium');
                  

    })
 
    
})    