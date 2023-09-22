import {BoardRepository} from "../../repository/BoardRepository";
import {BoardView} from "../../application/BoardView";

export class GetBoardListUseCase {
    constructor(private readonly boardRepository: BoardRepository) {}

    async execute(): Promise<BoardView[]> {
        const boardList = await this.boardRepository.getBoardList();

        return boardList.map(BoardView.fromDomain);
    }
}