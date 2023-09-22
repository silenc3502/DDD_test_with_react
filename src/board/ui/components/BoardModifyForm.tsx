import React, { useState } from 'react';
import { BoardId, BoardProperties, BoardToUpdate } from "../../types";
import { Link } from "react-router-dom";

interface BoardModifyFormProps {
  board: BoardProperties | null;
  isLoading: boolean;
  onModify: (boardId: BoardId, updatedBoardData: BoardToUpdate) => void;
}

const BoardModifyForm: React.FC<BoardModifyFormProps> = ({ board, isLoading, onModify }) => {
  const [formData, setFormData] = useState({
    title: board?.title || '',
    content: board?.content || '',
    writer: board?.writer || '',
  });

  const { title, content, writer } = formData;
  const boardId = board?.boardId

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (board) {
      const updatedBoardData: BoardToUpdate = {
        title,
        content,
      };
      onModify(board.boardId, updatedBoardData);
    }
  };

  return (
      <div>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    required
                />
              </div>
              <div>
                <label>Writer:</label>
                <input
                    type="text"
                    name="writer"
                    value={writer}
                    readOnly
                />
              </div>
              <div>
                <label>Content:</label>
                <textarea
                    name="content"
                    value={content}
                    onChange={handleChange}
                    required
                />
              </div>
              <button type="submit">Modify</button>
              <Link to={`/react-board-app/read/${boardId}`}>취소</Link>
            </form>
        )}
      </div>
  );
};

export default BoardModifyForm;