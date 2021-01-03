import { LoginMock } from '../support/_helpers'

describe('Chat responsive viewport', () => {
  it('Viewport Desktop', () => {
    LoginMock()
    cy.viewport('macbook-15')
    cy.get('.menu-bars').should('be.not.be.visible')
  })
  it('Viewport Tablet', () => {
    cy.viewport('ipad-2')
    cy.get('.menu-bars').should('be.visible')
    cy.get('.menu-bars').click()
    cy.wait(1000)
    cy.get('.menu-bars').click()
    cy.wait(1000)
  })
  it('Viewport Phone', () => {
    cy.viewport('iphone-x')
    cy.get('.menu-bars').should('be.visible')
    cy.get('.menu-bars').click()
    cy.wait(1000)
    cy.get('.menu-bars').click()
    cy.wait(1000)
  })
})
