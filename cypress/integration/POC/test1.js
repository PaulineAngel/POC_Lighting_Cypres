describe('First test', () =>{
    it('Just it', () =>{
        cy.visit('https://dellservices--dev1.my.salesforce.com/?login')
        cy.wait(1000)
        cy.get('#username')
        .click()
        .type('pauline_angel@dellservices.dev1')

        cy.wait(1000)
        cy.get('#password')
        .click()
        .type('Pp81712180@')
    

        cy.wait(1000)
        cy.get('[type=submit]')
        //.click()

        cy.wait(100000)
    })
})


