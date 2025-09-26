import { Router } from 'express';
import * as taskController from './task.controller';

const router = Router();

// GET all tasks
router.get('/', taskController.getAllTasks);
// GET tasks by board id
router.get('/board/:boardId/', taskController.getTasksByBoardId);
// GET tasks by column id
router.get('/column/:columnId', taskController.getTasksByColumnId);
// POST create new task
router.post('/', taskController.createTask);
// PUT update task
router.put('/:id', taskController.updateTask);
// DELETE task
router.delete('/:id', taskController.deleteTask);

export default router;