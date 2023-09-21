import {BoardId} from "@/board/types";
import {Board} from "@/board/Board";

export class ApiBoard {
    constructor(
        public readonly id: BoardId,
        public readonly title: string,
        public readonly writer: string,
        public readonly content: string,
        public readonly updatedAt: string
    ) {}

    toDomain(): Board {
        return Board.fromProperties({
            id: this.id,
            title: this.title,
            writer: this.writer,
            content: this.content,
            updatedAt: new Date(this.updatedAt),
        });
    }
}