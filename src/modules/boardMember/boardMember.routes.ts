import { Router } from 'express';
import * as boardMemberController from './boardMember.controller';

const router = Router();

// GET all board members
router.get('/', boardMemberController.getAllBoardMembers);
// GET board members by board id
router.get('/board/:boardId', boardMemberController.getBoardMembersByBoardId);
// POST add new board member
router.post('/', boardMemberController.addBoardMember);
// PUT update board member
router.put('/:id', boardMemberController.updateBoardMember);
// DELETE board member
router.delete('/:id', boardMemberController.removeBoardMember);

export default router;