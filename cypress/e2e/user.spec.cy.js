import userData from '../fixtures/user-data.json'

describe('orange HRM Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongcredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastnameField: "[name='lastName']",
    generickField: ".oxd-input--active",
    closeButtonfiled: ".--close",
    submitButton: "[type='submit']"
    
    
    
  }

  it.only('user Info Update - sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstnameTest')
    cy.get(selectorsList.lastnameField).clear().type('LastnameTest')
    cy.get(selectorsList.generickField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.generickField).eq(4).clear().type('OtherIdtest')
    cy.get(selectorsList.generickField).eq(5).clear().type('Driverslicensetest')
    cy.get(selectorsList.generickField).eq(6).clear().type('2026-01-01')
    cy.get(selectorsList.closeButtonfiled).click()
    cy.get(selectorsList.generickField).eq(7).clear().type('2002-22-07')
    cy.get(selectorsList.closeButtonfiled).click()
    cy.get(selectorsList.generickField).eq(8).clear().type('1')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongcredentialAlert)
    
  })
})