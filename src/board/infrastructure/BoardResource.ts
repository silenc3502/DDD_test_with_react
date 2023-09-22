import { RestClient } from '../../utility/RestClient';
import { BoardRepository } from '../repository/BoardRepository';
import { BoardId, BoardToSave } from "../types";
import { Board } from "../Board";
import { ApiBoard } from "./ApiBoard";
import { BoardStore } from "./BoardStore";

export class BoardResource implements BoardRepository {
  constructor(
    private readonly restClient: RestClient,
    private readonly store: BoardStore
  ) {}

  async getBoardList(): Promise<Board[]> {
    const boardListInStore = this.store.boardList;
    if (boardListInStore.length !== 0) {
      return boardListInStore.map(Board.fromProperties);
    }

    const response = await this.restClient.get<ApiBoard[]>(
      '/board/list'
    );
    const apiBoardList = response.data
    const boardList = apiBoardList.map((apiBoard: ApiBoard) => apiBoard.toDomain());
    this.store.saveBoardList(boardList.map((board: Board) => board.properties));

    return boardList;
  }

  getBoard(boardId: BoardId): Promise<Board> {
    throw new Error("Method not implemented.");
  }

  async createBoard(form: BoardToSave): Promise<Board> {
    const apiBoard = await this.restClient.post<ApiBoard, BoardToSave>(
      '/board/register',
      form
    );

    return apiBoard.toDomain();
  }

  async updateBoard(boardId: BoardId, form: BoardToSave): Promise<Board> {
    const apiBoard = await this.restClient.put<ApiBoard, BoardToSave>(
        `/board/${boardId}`,
        form
      );
  
      return apiBoard.toDomain();
    }

    async deleteBoard(boardId: BoardId): Promise<void> {
        await this.restClient.delete(`/board/${boardId}`);
    }
}