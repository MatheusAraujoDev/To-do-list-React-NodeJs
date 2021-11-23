const router = require('express').Router();
const tasksController = require('../controllers/tasksController');

router.post('/create', tasksController.create);

router.get('/list', tasksController.getAll);

router.put('/update', tasksController.updateTask);

router.delete('/delete/:id', tasksController.deleteTask);

router.get('/tasksDone', tasksController.tasksDone);

router.get('/tasksNotDone', tasksController.tasksNotDone);

module.exports = router;
