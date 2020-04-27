describe('First test', () =>{
    it('Just it', () =>{
        cy.visit('https://login.salesforce.com/?locale=br')
        
        cy.contains('username')
        .click()
        .type('pauline_angel@dellservices.dev1')

        cy.contains('pw')
        .click()
        .type('Pp81712180@')
        
        cy.get('input[type="submit"]')
        .click()
    })
})


