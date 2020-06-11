function login()
{
    cy.visit('https://accounts.spotify.com/en/login/?continue=https:%2F%2Fwww.spotify.com%2Fapi%2Fgrowth%2Fl2l-redirect&_locale=en-EG');
      cy.get('input[id="login-username"]').type("youssef.elgazar99@icloud.com")
      cy.get('input[id="login-password"]').type("YoussefN99")
      cy.get('button[id="login-button"]').click()     
    

}
function edit_p()
{
    cy.get("#profile > a").click()
}
function access()
{    
    cy.visit('https://open.spotify.com/playlist/37i9dQZF1DWWxPM4nWdhyI')
  

}



describe('Account Profile page',() => {
    beforeEach(() => {
     
    //   cy.get('[data-cy="input-last-name"]')
    //     .as('charInput');
    //   cy.get('[data-cy="last-name-chars-left-count"]')
    //     .as('charsLeftSpan');

    });
       it('Check the title',()=>{
        
        //    login() 
        //    cy.get('.mh-header-primary > svg > .svelte-1gcdbl9 > path').click()
        //    cy.get('#segmented-desktop-launch').click()
        //    cy.get(':nth-child(1) > .more-by-grid > :nth-child(1) > .cover > :nth-child(2)').click()
        //    cy.get('[data-position="1"]').click()

           cy.SignIn()
           

    
        })
  
     
    
})    

    