import { Board } from "../Board";
import type { BoardId, BoardToSave } from "../types";
import { BoardToUpdate } from "../types";

export interface BoardRepository {
    getBoardList(): Promise<Board[]>;

    getBoard(boardId: BoardId): Promise<Board>;

    createBoard(form: BoardToSave): Promise<Board>;

    updateBoard(boardId: BoardId, form: BoardToUpdate): Promise<Board>;

    deleteBoard(boardId: BoardId): Promise<void>;
}
