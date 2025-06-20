## 📘 Projeto: Testes End-to-End - OrangeHRM

### 📌 Descrição

Este repositório contém a automação de testes End-to-End para a aplicação **OrangeHRM**, utilizando a ferramenta **Cypress**. O objetivo é validar os principais fluxos do sistema, como autenticação, navegação no dashboard e acessos a diferentes funcionalidades.

### 🚀 Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/)
* [Node.js](https://nodejs.org/)
* JavaScript (ES6+)

### 📁 Estrutura do Projeto

```
Testes-end-2-end-OrangeHRM
├── cypress
│   ├── e2e
│   │   └── orangeHRM.cy.js        # Testes principais
│   └── fixtures
│       └── user-data.json         # Massa de dados de teste
│   └── pages
│       ├── loginPage.js           # Page Object para login
│       └── dashboardPage.js       # Page Object do dashboard
├── cypress.config.js              # Configuração do Cypress
└── README.md                      # Documentação
```

### ⚙️ Pré-requisitos

* Node.js instalado (versão recomendada: >= 14)
* Gerenciador de pacotes npm ou yarn

### 📦 Instalação

```bash
# Clone o repositório
$ git clone https://github.com/gedeonguerra/Testes-end-2-end-OrangeHRM.git

# Acesse a pasta
$ cd Testes-end-2-end-OrangeHRM

# Instale as dependências
$ npm install
```

### 🧪 Como Executar os Testes

```bash
# Inicie a interface do Cypress
$ npx cypress open

# Ou rode os testes diretamente no terminal
$ npx cypress run
```

---

## ✅ Casos de Teste e Cenários

### 🔐 Login

| Cenário                       | Entrada                                | Resultado Esperado                            |
| ----------------------------- | -------------------------------------- | --------------------------------------------- |
| Login com credenciais válidas | username: Admin, password: admin123    | Redirecionamento para o dashboard com sucesso |
| Login com senha incorreta     | username: Admin, password: errado      | Exibição de mensagem de erro                  |
| Login com usuário inexistente | username: Invalido, password: admin123 | Exibição de mensagem de erro                  |

### 🧭 Navegação no Dashboard

| Cenário                      | Ação                                | Resultado Esperado                                 |
| ---------------------------- | ----------------------------------- | -------------------------------------------------- |
| Acessar Dashboard após login | Login bem-sucedido e clique no menu | Dashboard visível com elementos-chave renderizados |

### 💡 Possíveis Testes Futuramente

* Validação do formulário de cadastro de funcionários
* Verificação de permissões de diferentes tipos de usuários
* Testes de logout e sessão expirada

---

### 👨‍💻 Autor

* Gedeon Guerra - [@gedeonguerra](https://github.com/gedeonguerra)

