import { Request, Response } from 'express';
import * as boardMemberService from './boardMember.service';

export async function getAllBoardMembers(req: Request, res: Response) {
    try {
        const boardMembers = await boardMemberService.getAll();
        res.status(200).json(boardMembers);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getBoardMembersByBoardId(req: Request, res: Response) {
    try {
        const boardId = req.params.boardId!;
        const boardMembers = await boardMemberService.getAllByBoardId(boardId);
        res.status(200).json(boardMembers);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function addBoardMember(req: Request, res: Response) {
    try {
        const newMember = await boardMemberService.addBoardMember(req.body);
        res.status(201).json(newMember);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
}

export async function updateBoardMember(req: Request, res: Response) {
    try {
        const updatedMember = await boardMemberService.updateBoardMember(req.params.id!, req.body);
        if (!updatedMember) return res.status(404).json( { message: 'Board member not found'})
        res.status(200).json(updatedMember);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
}

export async function removeBoardMember(req: Request, res: Response) {
    try {
        const deletedMember = await boardMemberService.removeBoardMember(req.params.id!);
        if (!deletedMember) return res.status(404).json({ message: 'Board member not found' });
        res.status(204).json({ message: 'Board member removed' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}