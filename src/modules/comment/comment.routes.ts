import { Router } from 'express';
import * as commentController from './comment.controller';

const router = Router();

// GET all comments
router.get('/', commentController.getAllComments);
// GET comment by id
router.get('/:id', commentController.getCommentById);
// GET comments by task id
router.get('/task/:taskId', commentController.getCommentsByTaskId);
// POST create new comment
router.post('/', commentController.createComment);
// PUT update comment
router.put('/:id', commentController.updateComment);
// DELETE comment
router.delete('/:id', commentController.deleteComment);

export default router;