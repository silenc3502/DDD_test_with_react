import type { BoardId, BoardToSave, BoardToUpdate } from "../../types";
import { BoardRepository } from "../../repository/BoardRepository";
import { CreateBoardUseCase } from "./CreateBoardUseCase";
import { GetBoardListUseCase } from "./GetBoardListUseCase";
import { GetBoardUseCase } from "./GetBoardUseCase";
import { DeleteBoardUseCase } from "./DeleteBoardUseCase";
import { UpdateBoardUseCase } from "./UpdateBoardUseCase";

export class BoardService {
    private getBoardListUseCase: GetBoardListUseCase;
    private getBoardUseCase: GetBoardUseCase;
    private createBoardUseCase: CreateBoardUseCase;
    private deleteBoardUseCase: DeleteBoardUseCase;
    private updateBoardUseCase: UpdateBoardUseCase;

    constructor(
        private readonly boardRepository: BoardRepository,
    ) {
        this.getBoardListUseCase = new GetBoardListUseCase(boardRepository);
        this.getBoardUseCase = new GetBoardUseCase(boardRepository);
        this.createBoardUseCase = new CreateBoardUseCase(boardRepository);
        this.deleteBoardUseCase = new DeleteBoardUseCase(boardRepository);
        this.updateBoardUseCase = new UpdateBoardUseCase(boardRepository);
    }

    async getBoardList() {
        return await this.getBoardListUseCase.execute();
    }

    async getBoard(boardId: BoardId) {
        return await this.getBoardUseCase.execute(boardId);
    }

    async createBoard(form: BoardToSave) {
        return await this.createBoardUseCase.execute(form);
    }

    async deleteBoard(boardId: BoardId) {
        return await this.deleteBoardUseCase.execute(boardId);
    }

    async updateBoard(boardId: BoardId, updatedBoardData: BoardToUpdate) {
        return await this.updateBoardUseCase.execute(boardId, updatedBoardData);
    }
}