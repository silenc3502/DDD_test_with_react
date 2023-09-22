export type BoardId = number;

export type BoardProperties = {
    boardId: number;
    title: string;
    writer: string;
    content: string;
    regDate: Date;
};

export type BoardToSave = Omit<BoardProperties, "id">;