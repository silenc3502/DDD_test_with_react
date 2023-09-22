import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import BoardReadForm from "../components/BoardReadForm"
import { BoardService } from "../../application/use-cases"
import { BoardResource } from '../../infrastructure/BoardResource';
import { RestClient } from '../../../utility/RestClient';
import { useBoardStore } from '../../../board/infrastructure/BoardStore';
import { BoardView } from "../../application/BoardView"

const BoardListPage = () => {
  const { boardId } = useParams<{ boardId: string | undefined }>();
  const [board, setBoard] = useState<BoardView | null>(null);
  const [isLoading, setLoading] = useState(false);
  const boardStore = useBoardStore()

  const navigate = useNavigate()

  const restClient = new RestClient()
  const boardResource = new BoardResource(restClient, boardStore);
  const boardService = new BoardService(boardResource);

  useEffect(() => {
    async function fetchBoard() {
      setLoading(true);
      try {
        const fetchedBoard = await boardService.getBoard(Number(boardId));
        const boardView = BoardView.fromDomain(fetchedBoard);

        setBoard(boardView);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching board:', error);
      }
    }

    fetchBoard();
  }, []);

  const onRemove = async () => {
    try {
      await boardService.deleteBoard(Number(boardId));

      alert('게시물이 삭제되었습니다')
      navigate("/react-board-app")
    } catch (e) {
        console.log(e)
    }
  }

  return (
    <div>
      <BoardReadForm boardId={boardId} board={board} isLoading={isLoading} onRemove={onRemove}/>
    </div>
  );
}

export default BoardListPage