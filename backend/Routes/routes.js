const router = require('express').Router();

router.post('/create', (_req, res) => res.status(200).json({ message: 'Rota para criar uma tarefa' }));

router.get('/list', (_req, res) => res.status(200).json({ message: 'Rota para listar as tarefas' }));

router.put('/update', (_req, res) => res.status(200).json({ message: 'Rota para editar uma tarefa' }));

router.delete('/delete', (_req, res) => res.status(200).json({ message: 'Rota para remover uma tarefa' }));

module.exports = router;
