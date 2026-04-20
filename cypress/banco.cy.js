describe('Menu de bancos de dados', () => {
  beforeEach(() => {
    cy.login('qa@test.com', '123456')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()
  })

  it('criar um banco de dados', () => {
    cy.contains('button', 'Criar').click()
    cy.contains('Adicionar novo item').should('exist')
    cy.get('input[placeholder="Nome do item"]').type('teste')
    cy.contains('button', 'Salvar').click()
    cy.contains('teste').should('exist')
  })

  it('criar bancos de dados iguais', () => {
    cy.createdb('teste')
    cy.createdb('teste')
    cy.contains('teste').should('have.length', 0)
  })

  it('buscar por um banco de dados', () => {
    cy.createdb('teste1')
    cy.createdb('teste2')
    cy.createdb('teste3')
    cy.get('input[placeholder="Pesquisar"]').type('teste2')
    cy.contains('teste1').should('not.exist')
    cy.contains('teste2').should('exist')
    cy.contains('teste3').should('not.exist')
  })

  it('apagar um banco de dados', () => {
    cy.createdb('teste1')
    cy.createdb('teste2')
    cy.get('button[title="Apagar"]').eq(1).click()
    cy.contains('teste1').should('exist')
    cy.contains('teste2').should('not.exist')
  })
  
  it('arquivar um banco de dados', () => {
    cy.createdb('teste1')
    cy.createdb('teste2')
    cy.get('button[title="Arquivar"]').eq(1).click()
    cy.contains('teste1').should('exist')
    cy.contains('teste2').should('not.exist')
    cy.get('button[data-variant="icon"]').eq(0).click()
    cy.contains('teste1').should('not.exist')
    cy.contains('teste2').should('exist')
  })
})