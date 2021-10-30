const router = require('express').Router();
const tasksController = require('../controllers/tasksController');

router.post('/create', tasksController.create);

router.get('/list', tasksController.getAll);

router.put('/update', tasksController.updateTask);

router.delete('/delete', tasksController.deleteTask);

module.exports = router;
