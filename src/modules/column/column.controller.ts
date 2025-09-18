import { Request, Response } from 'express';
import * as columnService from './column.service';

export async function getAllColumns(req: Request, res: Response) {
    try {
        const columns = await columnService.getAll();
        res.status(200).json(columns);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getColumnById(req: Request, res: Response) {
    try {
        const column = await columnService.getById(req.params.id!);
        if (!column) return res.status(404).json({ message: 'Column not found' });
        res.status(200).json(column);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getColumnsByBoardId(req: Request, res: Response) {
    try {
        const boardId = req.params.boardId!;
        const columns = await columnService.getByBoardId(boardId);
        res.status(200).json(columns);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function createColumn(req: Request, res: Response) {
    try {
        const newColumn = await columnService.create(req.body);
        res.status(201).json(newColumn);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
}

export async function updateColumn(req: Request, res: Response) {
    try {
        const updatedColumn = await columnService.update(req.params.id!, req.body);
        if (!updatedColumn) return res.status(404).json( { message: 'Column not found'})
        res.status(200).json(updatedColumn);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
}

export async function deleteColumn(req: Request, res: Response) {
    try {
        const deletedColumn = await columnService.remove(req.params.id!);
        if (!deletedColumn) return res.status(404).json({ message: 'Column not found' });
        res.status(204).json({ message: 'Column deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}