import React from 'react'
import { useNavigate } from 'react-router-dom'

import BoardRegisterForm from "../components/BoardRegisterForm"
import { BoardService } from "../../application/use-cases"
import { BoardResource } from '../../infrastructure/BoardResource';
import { RestClient } from '../../../utility/RestClient';
import { useBoardStore } from '../../../board/infrastructure/BoardStore';
import { BoardToSave } from '../../types'

const BoardListPage = () => {
  const boardStore = useBoardStore()
  const navigate = useNavigate()

  const onRegister = async (boardToSave: BoardToSave) => {
    try {
      const restClient = new RestClient()
      const boardResource = new BoardResource(restClient, boardStore);
      const boardService = new BoardService(boardResource);
      const registeredBoardResponse = await boardService.createBoard(boardToSave)

      alert('게시물 등록 성공!')

      navigate(`/react-board-app/read/${registeredBoardResponse.boardId}`)
    } catch (e) {
        console.log(e)
    }
  }

  return (
    <div>
      <BoardRegisterForm onRegister={onRegister} />
    </div>
  );
}

export default BoardListPage