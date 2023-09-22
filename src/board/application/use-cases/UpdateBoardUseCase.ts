import { BoardRepository } from "../../repository/BoardRepository";
import { BoardId, BoardToUpdate } from "../../types";
import { BoardView } from "../../application/BoardView";

export class UpdateBoardUseCase {
    constructor(
        private readonly boardRepository: BoardRepository,
    ) {}

    async execute(boardId: BoardId, form: BoardToUpdate): Promise<BoardView> {
        const board = await this.boardRepository.updateBoard(boardId, form);

        return BoardView.fromDomain(board);
    }
}