import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('orange HRM Test', () => {

  const selectorsList = {
    
    firstNameField: "[name='firstName']",
    lastnameField: "[name='lastName']",
    generickField: ".oxd-input--active",
    closeButtonfiled: ".--close",
    submitButton: "[type='submit']",
    arrowField: ".oxd-select-text--arrow"
    
    
    
  }

  it.only('user Info Update - sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    
  
  
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
    cy.get(selectorsList.arrowField).eq(0).click()
    cy.get(':nth-child(27) > span').click()
    cy.get(selectorsList.arrowField).eq(1).click()
    cy.get(':nth-child(4) > span').click()
    cy.get(selectorsList.arrowField).eq(2).click()
    cy.get('.oxd-select-dropdown > :nth-child(7)').click()
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