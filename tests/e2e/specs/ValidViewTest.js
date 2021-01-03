import { LoginMock } from '../support/_helpers'

describe('Chat responsive viewport', () => {
  it('Viewport Desktop', () => {
    cy.viewport('macbook-15')
    cy.get('.menu-bars').should('not.exist')
  })
  it('Viewport Tablet', () => {
    LoginMock()
    cy.viewport('ipad-2')
    cy.get('.menu-bars').should('exist')
    cy.get('.menu-bars').click()
    cy.wait(1000)
    cy.get('.menu-bars').click()
    cy.wait(1000)
  })
  it('Viewport Phone', () => {
    cy.viewport('iphone-x')
    cy.get('.menu-bars').should('exist')
    cy.get('.menu-bars').click()
    cy.wait(1000)
    cy.get('.menu-bars').click()
    cy.wait(1000)
  })
})
