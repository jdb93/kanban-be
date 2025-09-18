import { PrismaClient } from '@prisma/client';
import { CreateCommentDTO, UpdateCommentDTO } from '../../types/comment';

const prisma = new PrismaClient();

export async function getAll() {
    return prisma.comment.findMany();
}

export async function getById(id: string) {
    return prisma.comment.findUnique({ where: { id } });
}

export async function getByTaskId(taskId: string) {
    return prisma.comment.findMany({ where: { taskId } });
}

export async function create(commentData: CreateCommentDTO) {
    return prisma.comment.create({ data: {
        content: commentData.content,
        taskId: commentData.taskId,
    }});
}

export async function update(id: string, commentData: UpdateCommentDTO) {
    return prisma.comment.update({
        where: { id },
        data: {
            content: commentData.content,
        }
    })
}

export async function remove(id: string) {
    return prisma.comment.delete({ where: { id } });
}