import {BoardId} from "../../types";
import {BoardRepository} from "../../repository/BoardRepository";
import {Board} from "../../Board";

export class GetBoardUseCase {
    constructor(private readonly boardRepository: BoardRepository) {}

    async execute(boardId: BoardId): Promise<Board> {
        const board = await this.boardRepository.getBoard(boardId);

        return board
    }
}
