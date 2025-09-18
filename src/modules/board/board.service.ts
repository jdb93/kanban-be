import { PrismaClient } from '@prisma/client';
import { CreateBoardDTO, UpdateBoardDTO } from "../../types/board";

const prisma = new PrismaClient();

export async function getAll() {
    return prisma.board.findMany({
        include: { columns: true },
    });
}
export async function getById(id: string) {
    return prisma.board.findUnique({ 
        where: { id },
        include: { columns: true },
    });
}

export async function create(boardData: CreateBoardDTO) {
    return prisma.board.create({ data: {
        name: boardData.name,
        columns: boardData.columns ? 
        {
            create: boardData.columns.map(column => ({ name: column.name }))
        }
        : undefined,
    },
    include: { columns: true },
    });
}

export async function update(id: string, boardData: UpdateBoardDTO) {
    return prisma.board.update({ 
        where: { id },
        data: {
            name: boardData.name,
        },
        include: { columns: true },
        });
}

export async function remove(id: string) {
    return prisma.board.delete({ where: { id } });
}