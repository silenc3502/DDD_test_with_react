import { RestClient } from '../../utility/RestClient';
import { BoardRepository } from '../repository/BoardRepository';
import { BoardId, BoardToSave, BoardToUpdate } from "../types";
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

    const boardListResponse = await this.restClient.get<ApiBoard[]>(
      '/board/list'
    );
    const apiBoardList = boardListResponse.data

    console.log('API Board List:', apiBoardList);

    const boardList = apiBoardList.map((apiBoard: ApiBoard) => {
      const boardInstance = new ApiBoard(
        apiBoard.boardId, apiBoard.title, apiBoard.writer, apiBoard.content, apiBoard.regDate);
      return boardInstance.toDomain();
    })
    this.store.saveBoardList(boardList.map((board: Board) => board.properties));

    return boardList;
  }

  async getBoard(boardId: BoardId): Promise<Board> {
    const boardInStore = this.store.boardList.find((board) => board.boardId === boardId);
  
    if (boardInStore) {
      return Board.fromProperties(boardInStore);
    }

    const boardResponse = await this.restClient.get<ApiBoard>(`/board/${boardId}`);
    const apiBoard = boardResponse.data;

    const boardInstance = new ApiBoard(
      apiBoard.boardId, apiBoard.title, apiBoard.writer, apiBoard.content, apiBoard.regDate);
    
    return boardInstance.toDomain();
  }

  async createBoard(form: BoardToSave): Promise<Board> {
    const createdBoardResponse = await this.restClient.post<ApiBoard, BoardToSave>(
      '/board/register',
      form
    );

    const boardInstance = new ApiBoard(
      createdBoardResponse.boardId, 
      createdBoardResponse.title, 
      createdBoardResponse.writer, 
      createdBoardResponse.content, 
      createdBoardResponse.regDate);

    return boardInstance.toDomain();
  }

  async updateBoard(boardId: BoardId, form: BoardToUpdate): Promise<Board> {
    const updatedBoardResponse = await this.restClient.put<ApiBoard, BoardToUpdate>(
      `/board/${boardId}`,
      form
    );

    const boardInstance = new ApiBoard(
        updatedBoardResponse.boardId,
        updatedBoardResponse.title,
        updatedBoardResponse.writer,
        updatedBoardResponse.content,
        updatedBoardResponse.regDate);

    return boardInstance.toDomain();
  }

  async deleteBoard(boardId: BoardId): Promise<void> {
      await this.restClient.delete(`/board/${boardId}`);
  }
}