import { Request, Response } from 'express';
import * as taskService from './task.service';

export async function getAllTasks(req: Request, res: Response) {
    try {
        const tasks = await taskService.getAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getTaskById(req: Request, res: Response) {
    try {
        const task = await taskService.getById(req.params.id!);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getTasksByColumnId(req: Request, res: Response) {
    try {
        const tasks = await taskService.getByColumnId(req.params.columnId!);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getTasksByBoardId(req: Request, res: Response) {
    try {
        const tasks = await taskService.getByBoardId(req.params.boardId!);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function createTask(req: Request, res: Response) {
    try {
        const task = await taskService.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function updateTask(req: Request, res: Response) {
    try {
        const updatedTask = await taskService.update(req.params.id!, req.body);
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function deleteTask(req: Request, res: Response) {
    try {
        const deletedTask = await taskService.remove(req.params.id!);
        if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
        res.status(204).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}