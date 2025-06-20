class LoginPage {

    // Retorna um objeto contendo os seletores utilizados na página de login.
    // Isso facilita a manutenção caso os seletores sejam alterados futuramente.
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",       // Campo de entrada para o nome de usuário.
            passwordField: "[name='password']",       // Campo de entrada para a senha.
            loginButton: "[type='submit']",           // Botão para enviar o formulário de login.
            wrongCredentialAlert: "[role='alert']",   // Alerta exibido quando as credenciais estão incorretas.
        }
        return selectors;
    }

    // Acessa diretamente a URL da página de login.
    // É uma boa prática isolar navegação inicial em um método dedicado.
    accessLoginPage() {
        cy.visit('/auth/login'); // Abre a página de login.
    }

    // Realiza o login utilizando as credenciais fornecidas.
    // Encapsular essa ação permite reuso em múltiplos testes.
    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username); // Preenche o nome de usuário.
        cy.get(this.selectorsList().passwordField).type(password); // Preenche a senha.
        cy.get(this.selectorsList().loginButton).click();          // Submete o formulário.
    }

    // Verifica a presença do alerta de credenciais inválidas.
    // Útil para testar cenários negativos de autenticação.
    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert); // Confirma se alerta de erro está presente.
    }

}

export default LoginPage;
