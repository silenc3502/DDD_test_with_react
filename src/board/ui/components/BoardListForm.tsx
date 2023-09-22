import React from 'react'
import { Link } from 'react-router-dom'
import { BoardView } from '../../application/BoardView'
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

interface BoardListFormProps {
  boardList: BoardView[];
  isLoading: boolean;
}

const BoardListForm: React.FC<BoardListFormProps> = ({ boardList, isLoading }) => {
  return (
    <div>
      <h2>React로 만든 게시판</h2>
      { isLoading && "로딩중 ..........." }
      { !isLoading && boardList && (
        <>
          <Link to="/react-board-app/register">글쓰기</Link>
          <Table>
            <thead>
              <tr>
                <th className="centered-cell small-width">번호</th>
                <th className="centered-cell medium-width">제목</th>
                <th className="centered-cell small-width">작성자</th>
                <th className="centered-cell large-width">등록일자</th>
              </tr>
            </thead>
            <tbody>
              { !boardList.length ? (
                <tr>
                  <td colSpan={4}>
                    등록된 게시물이 존재하지 않습니다!
                  </td>
                </tr>
              ) : ( boardList.map((board) => (
                <tr key={board.boardId}>
                  <td align="center">{ board.boardId }</td>
                  <td align="left">
                    <Link to={`/react-board-app/read/${board.boardId}`}>{ board.title }</Link>
                  </td>
                  <td align="right">{ board.writer }</td>
                  <td align="center">{ board.regDate }</td>
                </tr>
              )))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  )
}

export default BoardListForm