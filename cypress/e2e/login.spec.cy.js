import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

// Instancia as classes referentes às páginas utilizadas nos testes.
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('login orange HRM Test', () => {

  it('login - fail', () => {
    // Acessa a tela de login da aplicação.
    loginPage.accessLoginPage()

    // Tenta realizar login com credenciais inválidas.
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)

    // Verifica se a aplicação apresenta uma mensagem de erro (cenário negativo).
    loginPage.checkAccessInvalid()
  })

  it('login - Success', () => {
    // Acessa a tela de login da aplicação.
    loginPage.accessLoginPage()

    // Realiza login com credenciais válidas.
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    // Valida se o usuário foi redirecionado corretamente para o dashboard.
    dashboardPage.checkDashboardPage()
  })

})
