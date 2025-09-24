import { PrismaClient } from '@prisma/client';
import { CreateTaskDTO, UpdateTaskDTO } from '../../types/task';

const prisma = new PrismaClient();

export async function getAll() {
    return prisma.task.findMany({
        include: { comments: true }
    });
}

export async function getByColumnId(columnId: string) {
    return prisma.task.findMany({ where: { columnId }});
}

export async function getByBoardId(boardId: string) {
    return prisma.task.findMany({
        where: {
            column: {
                boardId: boardId,
            },
        },
        include: {
            column: true,
            comments: true,
            user: true,
        },
    });
}

export async function getById(id: string) {
    return prisma.task.findUnique({ 
        where: { id },
        include: { comments: true }
    });
}

export async function create(taskData: CreateTaskDTO) {
    return prisma.task.create({ data: {
        title: taskData.title,
        description: taskData.description,
        priority: taskData.priority,
        status: taskData.status,
        columnId: taskData.columnId,
    }});
}

export async function update(id: string, taskData: UpdateTaskDTO) {
    return prisma.task.update({
        where: { id },
        data: {
            title: taskData.title,
            description: taskData.description,
            priority: taskData.priority,
            status: taskData.status,
            columnId: taskData.columnId,
        }
    });
}

export async function remove(id: string) {
    return prisma.task.delete({ where: { id } });
}