const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (task) => {
  try {
    const db = await connection();
    const add = await db.collection('toDoCollection').insertOne(task);
    // console.log('Model', task.task);
    return { _id: add.insertedId, task: task.task };
  } catch (error) {
    return { message: 'Erro ao conectar com o banco de dados!' };
  }
};

const getAll = async () => {
  try {
    const db = await connection();
    const content = db.collection('toDoCollection').find().toArray();
    return content;
  } catch (error) {
    return error.message;
  }
}

const updateTask = async () => {
  try {
    const db = await connection();
    const todo = db.collection('toDoCollection').updateOne({ _id: ObjectId(id) }, { $set: { task } });
    return todo;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getAll,
  updateTask,
}
