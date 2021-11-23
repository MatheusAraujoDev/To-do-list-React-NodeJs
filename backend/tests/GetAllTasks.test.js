const chaiHttp = require('chai-http');
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const app = require('../index');
const connection = require('./connectionMock');
const { MongoClient } = require('mongodb');

chai.use(chaiHttp);

describe('Testa a rota GET "/list" para listar as Tarefas', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await connection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  });

  describe('Quando se aperta o botão de Listar tarefas', () => {
    let response;

    before(async () => {
      response = await chai.request(app).get('/list');
    });

    it('deve retornar status 200', () => {
      expect(response).to.have.status(200);
    });

    it('deve receber um array com as tarefas cadastradas', () => {
      expect(response.body).to.be.an('array');
    });
  })
})
