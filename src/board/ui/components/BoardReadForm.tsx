import React from 'react'
import { Link } from 'react-router-dom'
import { BoardView } from '../../application/BoardView'

type BoardReadFormProps = {
  boardId: string | undefined;
  board: BoardView | null;
  isLoading: boolean;
  onRemove: () => void;
};

const BoardReadForm: React.FC<BoardReadFormProps> = ({
  boardId,
  board,
  isLoading,
  onRemove,
}) => {
  return (
    <div>
      {isLoading && '로딩중 ...'}
      {!isLoading && board && (
        <div>
          <h2>{board.title}</h2>
          <p>작성자: {board.writer}</p>
          <p>내용: {board.content}</p>
          <p>등록일자: {board.regDate}</p>
          <Link to={`/react-board-app/modify/${boardId}`}>수정</Link>
          <button onClick={onRemove}>삭제</button>
          <Link to={`/react-board-app/`}>취소</Link>
        </div>
      )}
    </div>
  );
}

export default BoardReadForm