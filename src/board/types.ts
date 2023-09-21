export type BoardId = number;

export type BoardProperties = {
    id: number;
    title: string;
    writer: string;
    content: string;
    updatedAt: Date;
};

export type BoardToSave = Omit<BoardProperties, "id">;