export enum BoardRole {
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
    VIEWER = 'VIEWER'
  };

export interface BoardMemberDTO {
    id: string;
    boardId: string;
    userId: string;
    role: BoardRole;
  }
  
  export interface AddBoardMemberDTO {
    boardId: string;
    userId: string;
    role?: BoardRole;
  }
  
  export interface UpdateBoardMemberDTO {
    role: BoardRole;
  }
  