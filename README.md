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
- Com as dependências instaladas para o backend, precisamos iniciá-lo para que o projeto funcione. Para isso realize o comando `npm run dev`.

Obs: O backEnd executará na porta 3001.

