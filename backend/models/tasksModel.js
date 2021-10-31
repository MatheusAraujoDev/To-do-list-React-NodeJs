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

const updateTask = async (id, task) => {
  try {
    const db = await connection();
    const todo = await db.collection('toDoCollection').findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { task } }
    );
    // console.log(todo.value);
    return todo.value;
  } catch (error) {
    return error.message;
  }
};

const deleteTask = async (id) => {
  try {
    const db = await connection();
    const todo = await db.collection('toDoCollection').findOneAndDelete(
      { _id: ObjectId(id) },
    );
    // console.log('MODEL', todo);
    return todo;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getAll,
  updateTask,
  deleteTask,
}