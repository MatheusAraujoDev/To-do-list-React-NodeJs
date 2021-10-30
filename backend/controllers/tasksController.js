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

const getAll = async (req, res) => {
  try {
    const data = await tasksServices.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const updateTask = async(req, res) => {
  try {
    const { id } = req.params;
    const todo = await tasksServices.updateTask(id);
    return res.status(200).json(todo);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getAll,
  updateTask,
};
