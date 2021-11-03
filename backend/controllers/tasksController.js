const tasksServices = require('../services/tasksServices');

const create = async (req, res) => {
  try {
    const task = req.body;
    // console.log('controller', task);
    const result = await tasksServices.create(task);
    // console.log('controller', result);
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
    const { task } = req.body;
    // console.log('TASK', task);
    const todo = await tasksServices.updateTask(id, task);
    // res.status(200).json(todo)
    return res.status(200).json(todo);
  } catch (error) {
    return error.message;
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.body._id;
    const todo = await tasksServices.deleteTask(id);
    // console.log(todo);
    return res.status(200).json(todo);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getAll,
  updateTask,
  deleteTask,
};
