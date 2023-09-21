import {BoardRepository} from "@/board/repository/BoardRepository";
import {BoardView} from "@/board/application/BoardView";

export class GetBoardListUseCase {
    constructor(private readonly boardRepository: BoardRepository) {}

    async execute(): Promise<BoardView[]> {
        const boardList = await this.boardRepository.getBoardList();

        return boardList.map(BoardView.fromDomain);
    }
}