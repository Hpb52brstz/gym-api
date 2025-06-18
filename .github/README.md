<div align="center">

# 🏋️‍♀️ Gym API
[![stars](https://img.shields.io/github/stars/Hpb52brstz/gym-api?color=7E9CD8&style=for-the-badge)](https://github.com/Hpb52brstz/gym-api/stargazers)
[![issues](https://img.shields.io/github/issues/Hpb52brstz/gym-api?color=FF5D62&style=for-the-badge)](https://github.com/Hpb52brstz/gym-api/issues)
[![size](https://img.shields.io/github/repo-size/Hpb52brstz/gym-api?color=76946A&style=for-the-badge)](https://github.com/Hpb52brstz/gym-api)
[![license](https://img.shields.io/github/license/Hpb52brstz/gym-api?color=957FB8&style=for-the-badge)](https://github.com/Hpb52brstz/gym-api/blob/main/LICENSE)

</div>

API RESTful em Node.js com Express, MongoDB (via Mongoose) e autenticação JWT para gerenciamento de usuários, exercícios e treinos.

## 🔧 Sumário

* [Tecnologias](#-tecnologias)
* [Setup do ambiente](#-setup-do-ambiente)
* [Variáveis de ambiente](#-variáveis-de-ambiente)
* [Scripts disponíveis](#-scripts-disponíveis)
* [Arquitetura do projeto](#-arquitetura-do-projeto)
* [Modelos de dados](#-modelos-de-dados)
* [Endpoints](#-endpoints)
* [Testes e cobertura](#-testes-e-cobertura)
* [CI/CD](#-cicd)
* [Contribuição](#-contribuição)


## ⚙️ Tecnologias

* Node.js com módulos ES (`import`)
* Express para rotas HTTP
* MongoDB (Atlas / local) com Mongoose
* Autenticação JWT
* Jest + SuperTest para testes
* GitHub Actions para CI


## 🛠️ Setup do ambiente

1. Clone o repositório:

   ```bash
   git clone https://github.com/Hpb52brstz/gym-api.git
   cd gym-api
   ```
2. Instale dependências:

   ```bash
   npm ci
   ```
3. Crie o `.env` (veja abaixo).
4. Inicialize o servidor:

   ```bash
   npm run dev
   ```

   O servidor rodará em `http://localhost:3000`.


## 🔐 Variáveis de ambiente

No arquivo `.env`:

```dotenv
MONGODB_URI=<sua conexão Atlas ou local>
JWT_SECRET=<segredo para geração de tokens>
```


## 📋 Scripts disponíveis

```json
"scripts": {
  "dev": "nodemon src/server.js",
  "test": "node --experimental-vm-modules node_modules/.bin/jest --coverage"
}
```

* `npm run dev`: inicia servidor com refresh automático.
* `npm test`: executa testes com cobertura, usando MongoDB local ou teste-container em CI.


## 🗂️ Arquitetura do projeto

```
gym-api/
├─ src/
│   ├─ models/         ← esquemas de dados (User, Exercise, Workout)
│   ├─ controllers/    ← lógica por endpoint
│   ├─ routes/         ← definição de rotas REST
│   ├─ middlewares/    ← autenticação JWT
│   ├─ app.js          ← define app express sem servidor
│   └─ server.js       ← conecta ao MongoDB e inicia o servidor
├─ tests/              ← teste unit/integration com Jest + SuperTest
└─ .github/
    └─ workflows/      ← GitHub Actions para CI
```


## 🧠 Modelos de dados

### User

```json
{
  nome: String,
  email: String,
  telefone: String,
  senha: String (hash)
}
```

### Exercise

```json
{
  nome: String,
  peso: Number,
  maquina: String
}
```

### Workout

```json
{
  nome: String,
  exercicios: [ObjectId → Exercise],
}
```


## 🚀 Endpoints

### Autenticação

* **POST** `/api/auth/register`
  Cria usuário com `nome`, `email`, `telefone`, `senha`. Retorna `{ token }`.
* **POST** `/api/auth/login`
  Faz login com `email`, `senha`. Retorna `{ token }`.

### Usuários

* **GET** `/api/users`
  Lista usuários.
* **GET** `/api/users/:id`
  Busca usuário por ID.
* **DELETE** `/api/users/:id`
  Remove usuários.

### Exercícios

* **POST** `/api/exercises`
  Cria exercício (`nome`, `peso`, `maquina`).
* **GET** `/api/exercises`
  Lista todos.
* **GET** `/api/exercises/:id`
  Busca por ID.
* **PUT** `/api/exercises/:id`
  Atualiza.
* **DELETE** `/api/exercises/:id`
  Remove.

### Workouts

* **POST** `/api/workouts`
  Cria treino com `nome` e `exercicios` (IDs).
* **GET** `/api/workouts`
  Lista treinos do usuário.
* **GET** `/api/workouts/:id`
  Busca treino por ID.
* **PUT** `/api/workouts/:id`
  Atualiza treino.
* **DELETE** `/api/workouts/:id`
  Remove treino.


## 🧪 Testes e cobertura

* Comando: `npm test`
* Usa Jest + SuperTest + MongoDB local
* Estrutura:

  * `tests/setup.js`: conecta e limpa banco ao início e fim dos testes
  * `tests/auth.test.js`: testes de registro/login
* Cobertura atual \~45%


## 🔁 CI/CD

Workflow `.github/workflows/ci.yml`:

* Executa em `push` ou `pull_request` na `main`
* Testa com Node 18.x, 20.x e 22.x
* Levanta MongoDB como serviço
* Define `MONGODB_URI=mongodb://localhost:27017/test-db`
* Executa `npm ci` e `npm test`


## 👥 Contribuidores

- [Hpb52brstz](https://github.com/Hpb52brstz) (Henrique Berger)

- [Sobrukai404](https://github.com/Sobrukai404) (Lucas Lima)

- [mttomaz](https://github.com/mttomaz) (Matheus Tomaz)

- [rafaoliveira11](https://github.com/rafaoliveira11) (Rafaela Oliveira)
