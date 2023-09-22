import {BoardRepository} from "../../repository/BoardRepository";
import {BoardId} from "../../types";
import {BoardView} from "../../application/BoardView";

export class DeleteBoardUseCase {
    constructor(
        private readonly boardRepository: BoardRepository,
    ) {}

    async execute(boardId: BoardId): Promise<void> {
        return await this.boardRepository.deleteBoard(boardId);
    }
}