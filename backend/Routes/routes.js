const router = require('express').Router();
const tasksController = require('../controllers/tasksController');

router.post('/create', tasksController.create);

router.get('/list', tasksController.getAll);

router.put('/update', tasksController.updateTask);

router.delete('/delete', (_req, res) => res.status(200).json({ message: 'Rota para remover uma tarefa' }));

module.exports = router;
