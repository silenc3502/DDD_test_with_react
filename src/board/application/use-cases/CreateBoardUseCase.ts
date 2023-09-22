import {BoardRepository} from "../../repository/BoardRepository";
import {BoardToSave} from "../../types";
import {BoardView} from "../../application/BoardView";

export class CreateBoardUseCase {
    constructor(
        private readonly boardRepository: BoardRepository,
    ) {}

    async execute(form: BoardToSave): Promise<BoardView> {
        const board = await this.boardRepository.createBoard(form);

        return BoardView.fromDomain(board);
    }
}