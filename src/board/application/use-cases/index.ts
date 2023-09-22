import type {BoardId, BoardToSave} from "../../types";
import { BoardRepository } from "../../repository/BoardRepository";
import {CreateBoardUseCase} from "./CreateBoardUseCase";
import {GetBoardListUseCase} from "./GetBoardListUseCase";
import {GetBoardUseCase} from "./GetBoardUseCase";

export class BoardService {
    private getBoardListUseCase: GetBoardListUseCase;
    private getBoardUseCase: GetBoardUseCase;
    private createBoardUseCase: CreateBoardUseCase;

    constructor(
        private readonly boardRepository: BoardRepository,
    ) {
        this.getBoardListUseCase = new GetBoardListUseCase(boardRepository);
        this.getBoardUseCase = new GetBoardUseCase(boardRepository);
        this.createBoardUseCase = new CreateBoardUseCase(boardRepository);
    }

    async getBoardList() {
        return await this.getBoardListUseCase.execute();
    }

    async getBoard(boardId: BoardId) {
        return await this.getBoardUseCase.execute(boardId);
    }

    async createRecipe(form: BoardToSave) {
        return await this.createBoardUseCase.execute(form);
    }
}