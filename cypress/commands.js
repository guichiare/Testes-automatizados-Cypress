// Realizar login
Cypress.Commands.add('login', (email, senha) => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[id="email"]').type(email)
    cy.get('input[id="password"]').type(senha)
    cy.get('button').contains('Entrar').click()
    cy.get('button').contains('Continuar').click()
})
// Criar banco de dados no menu de banco de dados
Cypress.Commands.add('createdb', (nome) => {
    cy.contains('button', 'Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nome)
    cy.contains('button', 'Salvar').click()
})