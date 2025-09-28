import { PrismaClient } from '../../generated/prisma';
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
        userId: commentData.userId,
    }});
}

export async function update(id: string, commentData: UpdateCommentDTO) {
    const updateData: { content?: string } = {};
    if (commentData.content !== undefined) {
        updateData.content = commentData.content;
    }

    return prisma.comment.update({
        where: { id },
        data: updateData,
    });
}

export async function remove(id: string) {
    return prisma.comment.delete({ where: { id } });
}