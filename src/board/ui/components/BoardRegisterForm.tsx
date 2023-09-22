import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BoardToSave } from '../../types'

type BoardRegisterFormProps = {
  onRegister: (board: BoardToSave) => void;
};

const BoardRegisterForm: React.FC<BoardRegisterFormProps> = ({ onRegister }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [writer, setWriter] = useState("")

  const handleRegister = () => {
    const boardToSave: BoardToSave = {
      title,
      content,
      writer,
    };

    onRegister(boardToSave);
  };

  return (
    <div>
      <h2>게시물 등록</h2>
      <div>
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">내용:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="writer">작성자:</label>
        <input
          type="text"
          id="writer"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>등록</button>
      <Link to={`/react-board-app/`}>취소</Link>
    </div>
  );
}

export default BoardRegisterForm