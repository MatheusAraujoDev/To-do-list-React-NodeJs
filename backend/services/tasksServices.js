const tasksModel = require('../models/tasksModel');

const create = async (task) => {
  const add = await tasksModel.create(task);
  return add;
};

const getAll = async () => {
  const results = await tasksModel.getAll();
  return results;
};

const updateTask = async (id, task, check) => {
  const todo = await tasksModel.updateTask(id, task, check);
  return todo;
};

const deleteTask = async (id) => {
  const todo = await tasksModel.deleteTask(id);
  return todo;
};

const tasksDone = async () => {
  const data = await tasksModel.tasksDone();
  return data;
};

const tasksNotDone = async () => {
  const data = await tasksModel.tasksNotDone();
  return data;
};

module.exports = {
  create,
  getAll,
  updateTask,
  deleteTask,
  tasksDone,
  tasksNotDone,
};
