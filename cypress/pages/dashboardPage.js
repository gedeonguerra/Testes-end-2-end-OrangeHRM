class DashboardPage {

    // Retorna os seletores utilizados na página de dashboard.
    // Facilita a manutenção centralizando os identificadores dos elementos.
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid", // Grade principal visível na tela do dashboard.
        }

        return selectors;
    }

    // Valida se o usuário está na página correta do dashboard.
    // Verifica tanto a URL quanto a presença visual de um elemento-chave.
    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index'); // Confirma que a URL está correta.
        cy.get(this.selectorsList().dashboardGrid).should('be.visible');           // Verifica se a grade do dashboard está visível na tela.
    }
}

export default DashboardPage;
