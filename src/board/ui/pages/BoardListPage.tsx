import React, { useState, useEffect } from 'react'
import BoardListForm from "../components/BoardListForm"
import { BoardService } from "../../application/use-cases"
import { BoardView } from "../../application/BoardView"
import { BoardResource } from '../../infrastructure/BoardResource';
import { RestClient } from '../../../utility/RestClient';
import { useBoardStore } from '../../infrastructure/BoardStore';

const BoardListPage = () => {
  const [boardList, setBoardList] = useState<BoardView[]>([])
  const [isLoading, setLoading] = useState(false)
  const boardStore = useBoardStore()

  useEffect(() => {
    async function fetchBoardList() {
      setLoading(true)
      try {
        const restClient = new RestClient()
        const boardResource = new BoardResource(restClient, boardStore);
        const boardService = new BoardService(boardResource);
        const fetchedBoardList = await boardService.getBoardList()
        setBoardList(fetchedBoardList);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error("Error fetching boardList:", error);
      }
    }

    fetchBoardList();
  }, []);

    return (
        <div>
            <BoardListForm boardList={boardList} isLoading={isLoading} />
        </div>
    );
}

export default BoardListPage