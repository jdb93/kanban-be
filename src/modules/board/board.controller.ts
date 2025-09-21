import { Request, Response } from 'express';
import * as boardService from './board.service';

export async function getAllBoards(req: Request, res: Response) {
    try {
        const boards = await boardService.getAll();
        res.status(200).json(boards);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getBoardById(req: Request, res: Response) {
    try {
        const board = await boardService.getById(req.params.id!);
        if (!board) return res.status(404).json({ message: 'Board not found' });
        res.status(200).json(board);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getBoardsByUser(req: Request, res: Response) {
    try {
       const { userId } = req.params;
       const boards = await boardService.getBoardsByUserId(userId!);
       
       if (!boards || boards.length === 0) {
        return res.status(404).json({ message: "No boards found for the user" });
       }

       res.status(200).json(boards);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }

}

export async function createBoard(req: Request, res: Response) {
    try {
        const newBoard = await boardService.create(req.body);
        res.status(201).json(newBoard);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
}

export async function updateBoard(req: Request, res: Response) {
    try {
        const updatedBoard = await boardService.update(req.params.id!, req.body);
        if (!updatedBoard) return res.status(404).json( { message: 'Board not found'})
        res.status(200).json(updatedBoard);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
}

export async function deleteBoard(req: Request, res: Response) {
    try {
        const deletedBoard = await boardService.remove(req.params.id!);
        if (!deletedBoard) return res.status(404).json({ message: 'Board not found' });
        res.status(204).json({ message: 'Board deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}