const chaiHttp = require('chai-http');
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const app = require('../index');
const connection = require('./connectionMock');
const { MongoClient } = require('mongodb');

chai.use(chaiHttp);

describe('Testa a Rota POST "/create" para criar uma Tarefa', function () {
  let connectionMock;

  before(async () => {
    connectionMock = await connection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  });

  describe('Quando não passamos um body', () => {
    let response;

    before(async () => {
      response = await chai.request(app).post('/create');
    });

    it('Deve retornar um objeto vazio', () => {
      expect(response.body).to.be.an('object');
    });
  });

  describe('Quando é inserida uma tarefa com sucesso', function () {
    let response;

    before(async function () {
      response = await chai.request(app).post('/create')
        .send({ task: 'Estudar JavaScript', check: false });
    });

    it('deve retornar status 200', function() {
      expect(response).to.have.status(200);
    });

    it('deve retornar um objeto com a nova tarefa cadastrada', function () {
      expect(response.body).to.be.an('object');
    });

    it('o objeto retornado deve ter as chaves "_id", "task" e "check"', function () {
      expect(response.body).to.have.all.keys('_id', 'task', 'check');
    });

  });

});
