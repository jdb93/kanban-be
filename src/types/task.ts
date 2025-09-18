import { CommentDTO } from "./comment";

export interface TaskDTO {
    id: string;
    title: string;
    description?: string;
    priority: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    columnId: string;
    comments: CommentDTO[];
};

export interface CreateTaskDTO {};

export interface UpdateTaskDTO {};