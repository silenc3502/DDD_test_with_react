import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import BoardListPage from '../../board/ui/pages/BoardListPage'
import BoardRegisterPage from '../../board/ui/pages/BoardRegisterPage'
import BoardReadPage from '../../board/ui/pages/BoardReadPage'
import BoardModifyPage from '../../board/ui/pages/BoardModifyPage'

const BoardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/react-board-app" replace/>} />
      <Route path="/react-board-app" element={<BoardListPage/>} />
      <Route path="/react-board-app/register" element={<BoardRegisterPage/>} />
      <Route path="/react-board-app/read/:boardId" element={<BoardReadPage/>} />
        <Route path="/react-board-app/modify/:boardId" element={<BoardModifyPage/>} />
    </Routes>
  )
}

export default BoardRoutes