import {BoardId} from "@/board/types";
import {BoardRepository} from "@/board/repository/BoardRepository";
import {Board} from "@/board/Board";

export class GetBoardUseCase {
    constructor(private readonly boardRepository: BoardRepository) {}

    async execute(boardId: BoardId): Promise<Board> {
        const board = await this.boardRepository.getBoard(boardId);

        return board
    }
}
