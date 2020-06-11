function login()
{
    cy.visit('/account');
      cy.get('input[id="login-username"]').type("yussef.elgazar99@icloud.com")
      cy.get('input[id="login-password"]').type("YoussefN99")
      cy.get('button[id="login-button"]').click()     
    

}
function edit_p()
{
    cy.get("#profile > a").click()
}



describe('Account Profile page',() => {
    beforeEach(() => {
     
    //   cy.get('[data-cy="input-last-name"]')
    //     .as('charInput');
    //   cy.get('[data-cy="last-name-chars-left-count"]')
    //     .as('charsLeftSpan');

    });
       it('Check the title',()=>{
           login()
           cy.get('#__next > div > div > div.PageScaffold__wrapper--2If9F > div.PageScaffold__container--30wj5 > div.PageScaffold__content--1aceg > div > div > h1')
                .invoke("text")
                .should('equal',"Account overview")
    
        })
        it('checks edit profile button',()=>{
            login()
            //cy.get('a["href="/eg-en/account/profile/]').click()
            cy.get("#profile > a").click()
            cy.url().should('include', '/profile') 
        

        })
        it("checks changing to denied year alert and if chosen is right",()=>{
           login()
           edit_p()
           cy.get("#profile_birthdate_year").select('2016').should('have.value','2016')
           cy.get("#profile_save_profile").click()
           cy.wait(5000)
           cy.get("#profile > div.form-group.has-error > label.control-label-validation.has-error")
                  .invoke("text")
                  .should('equal','You must be at least 12 years old')


        })
        it("checks the cancel button ",()=>{
            login()
            edit_p()
            cy.get("#profile_cancel").click()
            cy.url().should('equal', 'https://www.spotify.com/eg-en/account/overview/') 




        })
        it("checks editting profile rendering from sidebar",()=>{
            login()
            cy.get("#receipts > a").click()
            cy.url().should('include', '/receipt') 



        })
        it("checks the join premium function",()=>{
            login()
            cy.get("#your-plan > div > a").click()
            cy.url().should('include','/3-month-trial')


        })

        it("checks sign-out anywhere",()=>{
            login()
            cy.get("#__next > div > div > div.PageScaffold__wrapper--2If9F > div.PageScaffold__container--30wj5 > div.PageScaffold__content--1aceg > div > article:nth-child(4) > div:nth-child(4) > a")
                   .click()
            cy.url().should(('equal', 'www.spotify.com/eg-en/') )       





        })
        
         
     
    
})    

    