class MenuPage {

    // Retorna um objeto com os seletores utilizados na página de menu.
    // Centralizar os seletores aqui facilita a manutenção e reutilização futura.
    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]', // Botão ou link para acessar a seção "My Info".
        }

        return selectors;
    }

    // Acessa a seção "My Info" clicando no botão correspondente.
    // Boa prática encapsular ações de navegação em métodos descritivos como este.
    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click(); // Executa o clique no botão "My Info".
    }

}

export default MenuPage;
