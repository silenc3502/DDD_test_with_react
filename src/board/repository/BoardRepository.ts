import {Board} from "@/board/Board";
import type {BoardId, BoardToSave} from "@/board/types";

export interface BoardRepository {
    getBoardList(): Promise<Board[]>;

    getBoard(boardId: BoardId): Promise<Board>;

    createBoard(form: BoardToSave): Promise<Board>;

    updateBoard(boardId: BoardId, form: BoardToSave): Promise<Board>;

    deleteBoard(boardId: BoardId): Promise<void>;
}
