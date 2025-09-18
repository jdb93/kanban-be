import { TaskDTO } from "./task";

export interface ColumnDTO {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    boardId: string;
    tasks: TaskDTO[];
}

export interface CreateColumnDTO {
    name: string;
    boardId: string;
}

export interface UpdateColumnDTO {
    name?: string;
}
