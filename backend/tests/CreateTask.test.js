const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const taskModel = require('../models/tasksModel');


describe('Testa a Rota de Criar uma Tarefa', () => {

  const payload = {
    _id: "618584b39ee41007f42ccc73",
    task: "Tarefa 1",
    check: false,
  }

  const DBServer = new MongoMemoryServer();
  before(async () => {
    const MONGO_URL_MOCK = await DBServer.getUri();
    const connectionMock = await MongoClient
      .connect(MONGO_URL_MOCK, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });
  
  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });


  describe('Quando é inserida com sucesso', () => {
    it('Retorna um objeto', async () => {
      const response = await taskModel.create(payload);
      expect(response).to.be.an('object');
    });
    it('Tem o status code 200', async () => {});
    it('O objeto possui as propriedades _id, task, check', async () => {
      // const response = await taskModel.create(payload);
      // expect(response.body).to.have.all.keys('_id', 'task', 'check');
    });
  });
});
