const chaiHttp = require('chai-http');
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const app = require('../index');
const connection = require('./connectionMock');
const { MongoClient, ObjectId } = require('mongodb');

chai.use(chaiHttp);

const VALID_ID_1 = '618584b39ee41007f42ccc73';

describe('Testa a rota PUT "/update" para editar uma tarefa', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await connection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  });

  describe('Ao inserir uma tarefa com sucesso', () => {
    let response;

    before(async () => {
      await connectionMock.db('to-do').collection('toDoCollection')
        .insertOne({
          _id: ObjectId(VALID_ID_1),
          task: 'Escrever testes',
          check: false,
        });

      response = await chai.request(app).put(`/update`)
        .send({ _id: VALID_ID_1, task: 'Continuar testes', check: false });
    });
    
    it('deve retornar status 200', () => {
      expect(response).to.have.status(200);
    });
    
    it('deve retornar um objeto com a nova tarefa editada', () => {
      expect(response.body).to.be.an('object');
    });

    it('o objeto retornado deve possuir as chaves "_id", "task" e "check"', () => {
      expect(response.body).to.have.all.keys('_id', 'task', 'check');
    });
  })

})
