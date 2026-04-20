describe('Campanha', () => {
  beforeEach(() => {
    cy.login('qa@test.com', '123456')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
  })

  it('abrir tela do banco de dados', () => {
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()
    cy.contains('Nome do banco de dados').should('exist')
  })

  it('abrir tela de formularios', () => {
    cy.get('a[href="/dashboard/campanha/colmeia-forms"]').click()
    cy.contains('Colmeia Forms').should('exist')
  })
})
