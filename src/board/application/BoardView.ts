import type { BoardId } from "../types";
import type { Board } from "../Board";

export class BoardView {
    private constructor(
        public readonly boardId: BoardId,
        public readonly title: string,
        public readonly writer: string,
        public readonly content: string,
        public readonly regDate: string
    ) {}

    static fromDomain(board: Board) {
        const { boardId, title, writer, content, regDate } =
            board.properties;
        return new BoardView(
            boardId,
            title,
            writer,
            content,
            regDate.toLocaleDateString()
        );
    }
}