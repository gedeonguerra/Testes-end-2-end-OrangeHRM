import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')
const chance = Chance()

// Instanciando as páginas que serão utilizadas nos testes (Page Object Model).
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('orange HRM Test', () => {

  it('user Info Update - sucess', () => {
    // Acessa a página de login do sistema.
    loginPage.accessLoginPage()

    // Realiza login com credenciais válidas (vindas do arquivo de dados de teste).
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    // Valida se o dashboard foi carregado corretamente após o login.
    dashboardPage.checkDashboardPage()

    // Navega até a aba "My Info" através do menu lateral.
    menuPage.accessMyInfo()

    // Preenche os campos de nome e sobrenome com valores aleatórios gerados pela lib Chance.
    myInfoPage.fillPersonalDetails(chance.first(), chance.last())

    // Preenche os demais dados do perfil do colaborador (dados genéricos para exemplo).
    myInfoPage.fillEmployeeDetails('employeeId', 'OtherId', '452.973.123-21')

    // (Placeholder) Método reservado para preenchimento de status do colaborador.
    myInfoPage.fillStatus()

    // Salva as informações e verifica se a operação foi realizada com sucesso.
    myInfoPage.saveFor()
  })

})
