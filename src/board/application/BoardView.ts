import type { BoardId } from "@/board/types";
import type { Board } from "@/board/Board";

export class BoardView {
    private constructor(
        public readonly id: BoardId,
        public readonly title: string,
        public readonly writer: string,
        public readonly content: string,
        public readonly updatedAt: string
    ) {}

    static fromDomain(board: Board) {
        const { id, title, writer, content, updatedAt } =
            board.properties;
        return new BoardView(
            id,
            title,
            writer,
            content,
            updatedAt.toLocaleDateString()
        );
    }
}