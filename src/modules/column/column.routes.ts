import { Router } from 'express';
import * as columnController from './column.controller';

const router = Router();

// GET all columns
router.get('/', columnController.getAllColumns);
// GET column by id
router.get('/:id', columnController.getColumnById);
// GET columns by board id
router.get('/board/:boardId', columnController.getColumnsByBoardId);
// POST create new column
router.post('/', columnController.createColumn);
// PUT update column
router.put('/:id', columnController.updateColumn);
// DELETE column
router.delete('/:id', columnController.deleteColumn);

export default router;