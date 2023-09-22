import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BoardModifyForm from '../components/BoardModifyForm';
import { BoardService } from '../../application/use-cases';
import { RestClient } from '../../../utility/RestClient';
import { useBoardStore } from '../../infrastructure/BoardStore';
import { BoardResource } from '../../infrastructure/BoardResource';
import { BoardId, BoardToUpdate } from '../../types';

const BoardModifyPage = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();

  const boardStore = useBoardStore();
  const [isLoading, setIsLoading] = useState(true);

  const onModify = async (boardId: BoardId, updatedBoardData: BoardToUpdate) => {
    try {
      const restClient = new RestClient();
      const boardResource = new BoardResource(restClient, boardStore);
      const boardService = new BoardService(boardResource);

      await boardService.updateBoard(Number(boardId), updatedBoardData);

      alert('게시물이 성공적으로 수정되었습니다!');
      navigate(`/react-board-app/read/${boardId}`);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const restClient = new RestClient();
        const boardResource = new BoardResource(restClient, boardStore);
        const boardService = new BoardService(boardResource);

        const fetchedBoard = await boardService.getBoard(Number(boardId));

        boardStore.saveBoard(fetchedBoard.properties);
      } catch (error) {
        console.error('Error fetching board:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBoard();
  }, [boardId, boardStore]);


  return (
      <div>
        <BoardModifyForm board={boardStore.board} isLoading={isLoading} onModify={onModify} />
      </div>
  );
}

export default BoardModifyPage;
