import {BoardId} from "../types";
import {Board} from "../Board";

export class ApiBoard {
    constructor(
        public readonly boardId: BoardId,
        public readonly title: string,
        public readonly writer: string,
        public readonly content: string,
        public readonly regDate: string,
    ) {}

    toDomain(): Board {
        return Board.fromProperties({
            boardId: this.boardId,
            title: this.title,
            writer: this.writer,
            content: this.content,
            regDate: new Date(this.regDate),
        });
    }
}