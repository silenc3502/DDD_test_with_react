import type { BoardProperties } from "@/board/types";

export class Board {
    private constructor(
        private readonly boardId: number,
        private title: string,
        private readonly writer: string,
        private content: string,
        private readonly regDate: Date
    ) {}
    static fromProperties(properties: BoardProperties) {
        const {
            boardId,
            title,
            writer,
            content,
            regDate } = properties;
        return new Board(boardId, title, writer, content, regDate);
    }
    get properties(): BoardProperties {
        return {
            boardId: this.boardId,
            title: this.title,
            writer: this.writer,
            content: this.content,
            regDate: this.regDate,
        };
    }
}