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

const updateTask = async () => {
  const todo = await tasksModel.updateTask();
  return todo;
};

module.exports = {
  create,
  getAll,
  updateTask,
}
