import type { BoardProperties } from "@/board/types";

export class Board {
    private constructor(
        private readonly id: number,
        private title: string,
        private readonly writer: string,
        private content: string,
        private readonly updatedAt: Date
    ) {}
    static fromProperties(properties: BoardProperties) {
        const {
            id,
            title,
            writer,
            content,
            updatedAt } = properties;
        return new Board(id, title, writer, content, updatedAt);
    }
    get properties(): BoardProperties {
        return {
            id: this.id,
            title: this.title,
            writer: this.writer,
            content: this.content,
            updatedAt: this.updatedAt,
        };
    }
}