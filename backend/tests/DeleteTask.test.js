const chaiHttp = require('chai-http');
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const app = require('../index');
const connection = require('./connectionMock');
const { MongoClient, ObjectId } = require('mongodb');

chai.use(chaiHttp);

const VALID_ID_2 = '618584b39ee41007f42ccc74';

describe('Testa a rota DELETE "/delete" para deletar uma Tarefa', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await connection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  });

  describe('Quando passamos um ID válido', () => {
    let response;

    before(async () => {
      await connectionMock.db('to-do').collection('toDoCollection')
        .insertOne({
          _id: ObjectId(VALID_ID_2),
          task: 'Tarefa a deletar',
          check: false,
        });

      response = await chai.request(app).delete(`/delete/${VALID_ID_2}`);
    });

    it('após deletar deve retornar um status 404', () => {
      expect(response).to.have.status(404);
    });

    it('deve retornar um objeto vazio', () => {
      expect(response).to.be.an('object');
    });

  })
});
