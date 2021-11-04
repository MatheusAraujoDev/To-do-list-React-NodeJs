const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (task) => {
  try {
    const db = await connection();
    const add = await db.collection('toDoCollection').insertOne(task);
    return { _id: add.insertedId, task: task.task, check: task.check };
  } catch (error) {
    return error.message;
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
};

const updateTask = async (id, task, check) => {
  try {
    const db = await connection();
    const todo = await db.collection('toDoCollection').findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { task, check } },
      { returnDocument: 'after' },
    );
    
    // parâmetro returnDocument: after irá me retornar o novo objeto modificado. Referência:
    // https://stackoverflow.com/questions/32811510/mongoose-findoneandupdate-doesnt-return-updated-document
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
    return { message: `A tarefa: '${todo.value.task}' foi deletada com sucesso` };
  } catch (error) {
    return error.message;
  }
};

const tasksDone = async () => {
  try {
    const db = await connection();
    const result = db.collection('toDoCollection').find().toArray();
    return result;
  } catch (error) {
    return error.message;
  }
};

const tasksNotDone = async () => {
  try {
    const db = await connection();
    const res = db.collection('toDoCollection').find().toArray();
    return res;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getAll,
  updateTask,
  deleteTask,
  tasksDone,
  tasksNotDone,
};
