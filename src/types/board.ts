import { ColumnDTO } from "./column";

export interface BoardDTO {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    columns: ColumnDTO[];
}

export interface CreateBoardDTO {
    name: string;
    columns?: { name: string }[];
}

export interface UpdateBoardDTO {
    name?: string;
    columns?: { id?: string; name: string }[];
}