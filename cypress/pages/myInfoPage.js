class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastnameField: "[name='lastName']",
            generickField: ".oxd-input--active",
            closeButtonfiled: ".--close",
            submitButton: "[type='submit']",
            arrowField: ".oxd-select-text--arrow"

        }
        return selectors

    }
    fillPersonalDetails(firstName, lastName,) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastnameField).clear().type(lastName)
        
    }

    fillEmployeeDetails(employeeId, OtherId, DriverslicenseDate,) {
        cy.get(this.selectorsList().generickField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().generickField).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().generickField).eq(5).clear().type(DriverslicenseDate)
        cy.get(this.selectorsList().generickField).eq(6).clear().type('2026-01-01')
        cy.get(this.selectorsList().closeButtonfiled).click()
        cy.get(this.selectorsList().generickField).eq(7).clear().type('2002-22-07')
        cy.get(this.selectorsList().closeButtonfiled).click()
        cy.get(this.selectorsList().generickField).eq(8).clear().type('1')
        cy.get(this.selectorsList().arrowField).eq(0).click()
        cy.get(':nth-child(27) > span').click()
        cy.get(this.selectorsList().arrowField).eq(1).click()
        cy.get(':nth-child(4) > span').click()
        cy.get(this.selectorsList().arrowField).eq(2).click()
        cy.get('.oxd-select-dropdown > :nth-child(7)').click()
    }

saveFor() {
    cy.get(this.selectorsList().submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
}

fillStatus() {

}


}


export default MyInfoPage