import {BoardRepository} from "@/board/repository/BoardRepository";
import {BoardToSave} from "@/board/types";
import {BoardView} from "@/board/application/BoardView";

export class CreateBoardUseCase {
    constructor(
        private readonly boardRepository: BoardRepository,
    ) {}

    async execute(form: BoardToSave): Promise<BoardView> {
        const board = await this.boardRepository.createBoard(form);

        return BoardView.fromDomain(board);
    }
}