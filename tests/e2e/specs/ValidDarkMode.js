import { LoginMock } from '../support/_helpers'

describe('Validar Dark Mode', () => {
  it('Dark Mode Login', () => {
    cy.visit('/login')
    cy.get('.dark-mode button').click()
    cy.get('.login').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.wait(1000)
    cy.get('.dark-mode button').click()
    cy.get('.login').should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.wait(1000)
  })
  it('Dark Mode Config', () => {
    LoginMock()
    cy.get('.nav .bottom .item:nth-of-type(2)').click()
    cy.get('.dark-mode button').dblclick()
    cy.wait(1000)
    cy.get('#app').should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.get('.dark-mode button').click()
    cy.get('#app').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.wait(1000)
  })
})
