export interface CommentDTO {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    taskId: string;
}

export interface CreateCommentDTO {
    content: string;
    taskId: string;
}

export interface UpdateCommentDTO {
    content?: string;
}