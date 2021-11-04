const tasksServices = require('../services/tasksServices');

const create = async (req, res) => {
  try {
    const task = req.body;
    const result = await tasksServices.create(task);
    return res.status(200).json(result);    
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const getAll = async (_req, res) => {
  try {
    const data = await tasksServices.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.body._id;
    const { task, check } = req.body;
    const todo = await tasksServices.updateTask(id, task, check);
    return res.status(200).json(todo);
  } catch (error) {
    return error.message;
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.body._id;
    const todo = await tasksServices.deleteTask(id);
    return res.status(200).json(todo);
  } catch (error) {
    return error.message;
  }
};

const tasksDone = async (_req, res) => {
  try {
    const tasks = await tasksServices.tasksDone();
    const data = [];
    tasks.forEach((task) => task.check && data.push(task)); // se check for true, coloque no array de concluídas
    return res.json(data);
  } catch (error) {
    return error.message;
  }
};

const tasksNotDone = async (_req, res) => {
  try {
    const tasks = await tasksServices.tasksNotDone();
    const data = [];
    tasks.forEach((task) => !task.check && data.push(task));
    return res.json(data);    
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
