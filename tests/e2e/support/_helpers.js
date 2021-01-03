function LoginMock (profile) {
  cy.reload()
  cy.visit('/login')
  cy.get('#user').type('lucas')
  cy.get('#password').type('lucas')
  cy.get('.login-form button').click()
  if(profile) {
    cy.visit('/profile/vue')
  }
}

function language(type, page) {
  if(page) {
    cy.get('.page .languages')
      .select(type).should('have.value', type)
  } else {
    cy.get('.languages')
      .select(type).should('have.value', type)
  }  
}

export { LoginMock, language }