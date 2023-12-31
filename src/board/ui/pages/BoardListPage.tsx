import React, { useState, useEffect } from 'react'
import BoardListForm from "../components/BoardListForm"
import { BoardService } from "../../application/use-cases"
import { BoardResource } from '../../infrastructure/BoardResource';
import { RestClient } from '../../../utility/RestClient';
import { useBoardStore } from '../../infrastructure/BoardStore';

const BoardListPage = () => {
  const [isLoading, setLoading] = useState(false)
  const boardStore = useBoardStore()

  useEffect(() => {
    async function fetchBoardList() {
      setLoading(true);
      try {
        console.log("fetching Board")
        const restClient = new RestClient();
        const boardResource = new BoardResource(restClient, boardStore);
        const boardService = new BoardService(boardResource);
        const fetchedBoardList = await boardService.getBoardList();

        const convertedBoardList = fetchedBoardList.map((boardView) => {
          const boardProperties = {
            ...boardView,
            regDate: new Date(boardView.regDate),
          };
          return boardProperties;
        });

        boardStore.saveBoardList(convertedBoardList);
      } catch (error) {
        console.error("Error fetching boardList:", error);
      } finally {
        setLoading(false);
      }
    }

    if (!isLoading) {
      fetchBoardList();
    }

    return () => {
      boardStore.saveBoardList([]);
    };
  }, []);

  useEffect(() => {
    console.log("boardList changed:", boardStore.boardList);
  }, [boardStore.boardList]);

  return (
    <div>
      <BoardListForm boardList={boardStore.boardList} isLoading={isLoading} />
    </div>
  );
}

export default BoardListPage