describe('Login', () => {
  it('logar com dados validos', () => {
    cy.login('qa@test.com', '123456')
    cy.url().should('include', 'dashboard')
  })

  it('logar com e-mail invalido', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[id="email"]').type('errado')
    cy.get('input[id="password"]').type('123456')
    cy.get('button').contains('Entrar').click()

    cy.contains('Usuário ou senha inválidos').should('exist')
  })

  it('logar com senha invalida', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[id="email"]').type(' qa@test.com')
    cy.get('input[id="password"]').type('errado')
    cy.get('button').contains('Entrar').click()
    
    cy.contains('Usuário ou senha inválidos').should('exist')
  })
})