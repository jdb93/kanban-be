import { Request, Response } from 'express';
import * as commentService from './comment.service';

export async function getAllComments(req: Request, res: Response) {
    try {
        const comments = await commentService.getAll();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getCommentById(req: Request, res: Response) {
    try {
        const comment = await commentService.getById(req.params.id!);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function getCommentsByTaskId(req: Request, res: Response) {
    try {
        const taskId = req.params.taskId!;
        const comments = await commentService.getByTaskId(taskId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function createComment(req: Request, res: Response) {
    try {
        const comment = await commentService.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function updateComment(req: Request, res: Response) {
    try {
        const updatedComment = await commentService.update(req.params.id!, req.body);
        if (!updatedComment) return res.status(404).json({ message: 'Comment not found' });
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}   

export async function deleteComment(req: Request, res: Response) {
    try {
        const deletedComment = await commentService.remove(req.params.id!);
        if (!deletedComment) return res.status(404).json({ message: 'Comment not found' });
        res.status(204).json({ message: 'Comment deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}