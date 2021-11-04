# Olá, seja Bem-Vindo(a) a minha Lista de tarefas feita em React e NodeJS.
---
![image](https://user-images.githubusercontent.com/80549950/140323257-a5ec4c4f-9354-4e76-83c1-d43ff542c674.png)

---
# Descrição
Trata-se de uma aplicação FullStack, com o FrontEnd desenvolvido em [React](https://pt-br.reactjs.org/), e o BackEnd desenvolvido em [NodeJs](https://nodejs.org/pt-br/docs/) conectado ao banco de dados relacional [MongoDb](https://docs.mongodb.com/). Com o objetivo de listar as tarefas do usuário a fim de que ele possa organizar seu dia-a-dia. 

---
# Tecnologias e Ferramentas utilizadas
 - React Hooks para gerenciamentos de Estado dos componentes.
 - Biblioteca axios para requisições à API.
 - Ciclo de Vida de um componente React.
 - Bibliotecas Mocha, Chai e Sinon para realização de testes do FrontEnd.
 - Modelo MSC para as camadas feitas no BackEnd.
 - Instalação do Express, Nodemon, MongoDb e Cors para desenvolvimento do BackEnd.
 - Assim como referências na documentação das ferramentas e no conteúdo do curso da [Trybe](https://www.betrybe.com/)

---
# Instruções para executar o projeto

## 1- Configurar o MongoDb
- Primeiramente, para configurar o projeto deve-se primeiro [instalar](https://www.edivaldobrito.com.br/como-instalar-o-banco-de-dados-mongodb-no-ubuntu-e-derivados/) o MongoDb em sua máquina, e iniciar uma instância mongoDb no terminal com o comando `sudo service mongod start` inserindo sua senha.
- Após iniciar a instância digite `mongo` em seu terminal para acessá-lo de fato.
- Feito isso, crie uma database chamada "to-do" e dentro dela crie uma coleção chamada "toDoCollection". Para isso utilize os comandos `use to-do` e em seguida `db.createcollection("toDoCollection")`. Feito isso seu banco de dados já está pronto.

  ![image](https://user-images.githubusercontent.com/80549950/140331753-5627fef7-3217-48e5-9537-5ea703b199b0.png)
 - Com o Mongodb já configurado, não é necessário realizar todos os passos acima novamente. A partir daqui para rodar o projeto utilize somente o comando `sudo service mongod start` para iniciar o Mongodb, e insira sua senha. Lembrando que esse comando é NECESSÁRIO para que o projeto funcione.

## 2- Configurar o BackEnd
- Abra um novo terminal e navegue até a pasta do backend. Feito isso realize o comando `npm install` dentro dela (necessário apenas uma vez).
- Com as dependências instaladas para o backend, precisamos iniciá-lo para que o projeto funcione. Para isso realize o comando `npm run dev`. Seu terminal deve ficar aberto, e deve ficar dessa forma:

![image](https://user-images.githubusercontent.com/80549950/140334739-466ad723-0fba-4633-a390-1539d017063d.png)


Obs: O backend executará na porta 3001.

## 3- Configurar o FrontEnd
- Por fim, deve-se configurar a parte frontend da aplicação. para isso abra um novo terminal(lembrando que até o momento você terá 2 terminais abertos, um para o mongoDb e outro para o servidor do backend).
- Navegue até a pasta "frontend" e realize o comando `npm install`. Deve ser realizado somente uma vez.
- Feito isso você deverá iniciar a aplicação no frontend e manter o terminal aberto. Para isso realize o comando `npm start`. Seu terminal deve ficar parecido com isso: 

![image](https://user-images.githubusercontent.com/80549950/140335986-33c396b6-ee51-426c-a672-2134bc67afaf.png)

Obs: O frontend executará na porta 3000.

---
# Linter do projeto
Neste projeto foi configurado o [ESLint](https://eslint.org/), para uma boa legibilidade do código e atendimento a boas práticas de Desenvolvimento.

---
# Execução dos Testes (ainda estão em desenvolvimento)

## 1- FrontEnd
Para realizar os testes do FrontEnd basta navegar até a pasta frontend e executar o comando `npm test` ou `npm run test`. Dessa forma os testes serão realizados.

![image](https://user-images.githubusercontent.com/80549950/140337606-48ff695d-fed2-476f-a672-9e6b5106218f.png)

## 2- BackEnd
Para realizar os testes do backend basta navegar até a pasta do backend e executar o comando `npm test` ou `npm run test`. Dessa forma os testes serão realizados.


