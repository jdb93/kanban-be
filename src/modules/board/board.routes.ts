import { Router } from 'express';
import * as boardController from './board.controller';

const router = Router();

// GET all boards
router.get("/", boardController.getAllBoards);
// GET board by id
router.get("/:id", boardController.getBoardById);
// POST create new board
router.post("/", boardController.createBoard);
// PUT update board
router.put("/:id", boardController.updateBoard);
// DELETE board
router.delete("/:id", boardController.deleteBoard);

export default router;