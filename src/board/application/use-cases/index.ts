import type {BoardId, BoardToSave} from "@/board/types";
import { BoardRepository } from "@/board/repository/BoardRepository";
import {CreateBoardUseCase} from "@/board/application/use-cases/CreateBoardUseCase";
import {GetBoardListUseCase} from "@/board/application/use-cases/GetBoardListUseCase";
import {GetBoardUseCase} from "@/board/application/use-cases/GetBoardUseCase";

export class RecipeService {
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