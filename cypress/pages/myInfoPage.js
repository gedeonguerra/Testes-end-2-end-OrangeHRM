class MyInfoPage {

    // Retorna um objeto contendo os seletores utilizados em diferentes campos da página.
    // Manter centralizado ajuda na manutenção e reutilização dos seletores.
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']", // Campo para inserir o primeiro nome.
            lastnameField: "[name='lastName']",   // Campo para inserir o sobrenome.
            generickField: ".oxd-input--active",  // Campos genéricos utilizados em vários locais da página.
            closeButtonfiled: ".--close",         // Botão para fechar pop-ups de calendário ou seleção.
            submitButton: "[type='submit']",       // Botão de envio do formulário.
            arrowField: ".oxd-select-text--arrow"  // Ícones de seta usados para abrir menus suspensos.
        }
        return selectors;
    }

    // Preenche os campos de nome e sobrenome com os valores passados por parâmetro.
    // Boa prática limpar o campo antes de digitar para evitar valores residuais.
    fillPersonalDetails(firstName, lastName,) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName); // Preenche o campo "First Name".
        cy.get(this.selectorsList().lastnameField).clear().type(lastName);   // Preenche o campo "Last Name".
    }

    // Preenche os detalhes do empregado em uma sequência de campos genéricos.
    // A ordem dos .eq() deve ser cuidadosamente validada em relação à estrutura do DOM.
    fillEmployeeDetails(employeeId, OtherId, DriverslicenseDate,) {
        cy.get(this.selectorsList().generickField).eq(3).clear().type(employeeId);        // Campo de ID do empregado.
        cy.get(this.selectorsList().generickField).eq(4).clear().type(OtherId);           // Campo de ID alternativo.
        cy.get(this.selectorsList().generickField).eq(5).clear().type(DriverslicenseDate); // Data da carteira de motorista.
        
        cy.get(this.selectorsList().generickField).eq(6).clear().type('2026-01-01'); // Data de expiração da carteira.
        cy.get(this.selectorsList().closeButtonfiled).click();                       // Fecha o calendário (se aplicável).

        cy.get(this.selectorsList().generickField).eq(7).clear().type('2002-22-07'); // Data de nascimento.
        cy.get(this.selectorsList().closeButtonfiled).click();                       // Fecha novamente o calendário.

        cy.get(this.selectorsList().generickField).eq(8).clear().type('1');          // Número de filhos (exemplo).

        // Abre menu dropdown e seleciona uma opção para nacionalidade.
        cy.get(this.selectorsList().arrowField).eq(0).click();
        cy.get(':nth-child(27) > span').click();

        // Seleciona estado civil.
        cy.get(this.selectorsList().arrowField).eq(1).click();
        cy.get(':nth-child(4) > span').click();

        // Seleciona gênero.
        cy.get(this.selectorsList().arrowField).eq(2).click();
        cy.get('.oxd-select-dropdown > :nth-child(7)').click();
    }

    // Realiza o envio do formulário e verifica se a submissão foi bem-sucedida.
    // A verificação de texto na tela ajuda a garantir que o fluxo finalizou corretamente.
    saveFor() {
        cy.get(this.selectorsList().submitButton).eq(0).click(); // Clica no botão de submit.
        cy.get('body').should('contain', 'Successfully Update'); // Verifica se a mensagem de sucesso aparece.
        cy.get('.oxd-toast-close');                               // (Opcional) Fecha a notificação se necessário.
    }

    // Método reservado para preenchimento do campo "Status" (ainda não implementado).
    // Pode ser expandido para interações com dropdowns ou switches relacionados ao status do colaborador.
    fillStatus() {
        // Aguardando implementação futura.
    }

}

export default MyInfoPage;
