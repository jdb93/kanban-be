import { PrismaClient } from '../../generated/prisma';
import { AddBoardMemberDTO, UpdateBoardMemberDTO } from '../../types/boardMember';

const prisma = new PrismaClient();

export async function getAll() {
    return prisma.boardMember.findMany();
}

export async function getAllByBoardId(boardId: string) {
    return prisma.boardMember.findMany({ where: { boardId }, include: { user: true} });
}

export async function addBoardMember(memberData: AddBoardMemberDTO) {
    return prisma.boardMember.create({ data: {
        boardId: memberData.boardId,
        userId: memberData.userId,
        role: memberData.role ?? 'MEMBER',
    }});
}


export async function updateBoardMember(id: string, memberData: UpdateBoardMemberDTO) {
    return prisma.boardMember.update({
        where: { id },
        data: {
            role: memberData.role,
        },
        include: { user: true },
    });
}

export async function removeBoardMember(id: string) {
    return prisma.boardMember.delete({ where: { id } });
}