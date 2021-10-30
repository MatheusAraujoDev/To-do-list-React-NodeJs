const tasksModel = require('../models/tasksModel');

const create = async (task) => {
  const add = await tasksModel.create(task);
  // console.log('service', add);
  return add;
};

const getAll = async () => {
  const results = await tasksModel.getAll();
  return results;
}

const updateTask = async (id, task) => {
  const todo = await tasksModel.updateTask(id, task);
  return todo;
};

const deleteTask = async (id) => {
  const todo = await tasksModel.deleteTask(id);
  return todo;
};

module.exports = {
  create,
  getAll,
  updateTask,
  deleteTask,
}
