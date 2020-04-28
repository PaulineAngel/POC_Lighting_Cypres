describe('First test', () =>{
    it('Just it', () =>{
        cy.visit('https://dellservices--dev1.my.salesforce.com/?login')
        
        cy.get('#username')
        .click()
        .type('pauline_angel@dellservices.dev1')

        
        cy.get('#password')
        .click()
        .type('Pp81712180@')
    

        
        cy.get('[type=submit]')
        //.click()

        
    })
})


