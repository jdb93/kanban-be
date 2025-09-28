import { PrismaClient } from '../../generated/prisma';
import { CreateColumnDTO, UpdateColumnDTO } from '../../types/column';

const prisma = new PrismaClient();

export async function getAll() {
    return prisma.column.findMany();
}

export async function getById(id: string) {
    return prisma.column.findUnique({ where: { id } });
}

export async function getByBoardId(boardId: string) {
    return prisma.column.findMany({ where: { boardId }, include: { tasks: true } });
}

export async function create(columnData: CreateColumnDTO) {
    return prisma.column.create({ data: {
        name: columnData.name,
        boardId: columnData.boardId,
    }});
}

export async function update(id: string, columnData: UpdateColumnDTO) {
    return prisma.column.update({
        where: { id },
        data: {
            name: columnData.name ?? "defaultName",
        },
        include: { tasks: true },
    });
}

export async function remove(id: string) {
    return prisma.column.delete({ where: { id } });
}