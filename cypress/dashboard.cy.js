describe('Dashboard', () => {
  beforeEach(() => {
    cy.login('qa@test.com', '123456')
  })

  it('abrir menu de campanha', () => {
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.contains('Campanha').should('exist')
  })

  it('abrir menu de usuario', () => {
    cy.get('button').contains('Candidato').click()
  })
})

