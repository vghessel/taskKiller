# Task Killer

**Uma To-Do List que simplifica sua vida: leve, fácil e eficiente. Organize suas tarefas com elegância, sem complicações.**

*Trabalho de conclusão de curso - Pós-Graduação em Desenvolvimento Full Stack (PUCRS)*

---
## Backend
***Tecnologias utilizadas:***
* Nodejs
* Express
* MongoDB
* Json Web Token (JWT)
* Mocha (Unit Tests)

***Documentação da API:***

Para ver a documentação da API é só acessar o endpoint **/api-docs** que o arquivo swagger.yml será mostrado localmente no padrão do Swagger Editor.

Se não estiver com o projeto rodando pode fazer o upload do arquivo [swagger.yml](backend/swagger) em [editor.swagger.io](https://editor.swagger.io/)


***Rodando a aplicação:***
1. Clone o repositório:

```bash
git clone https://github.com/vghessel/taskKiller.git
```

```bash
cd taskKiller
```

2. Instale as dependências:

```bash
cd backend && npm install
```

3. Configure suas credenciais do MongoDB Atlas no arquivo db/conn.js:

<sub>Neste caso é necessário ter acesso ao MongoDB Atlas que é um Cluster gratuíto na Cloud do MongoDB</sub>

4. Inicialize o servidor:

```bash
cd backend && npm start
```

***Testando a aplicação:***

Além de testar utilizando o Postman em conjunto com a documentação Swagger, é possível utilizar o arquivo request.rest com a extensao REST Client no VSCode para fazer as requisições ao banco de dados.

---
## Frontend

***Tecnologias utilizadas:***
* JavaScript
* React


***Rodando a aplicação:***
1. Clone o repositório:


2. Instale as dependências:
    

3. Inicialize o servidor:

