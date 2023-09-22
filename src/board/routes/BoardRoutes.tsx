import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import BoardListPage from '../../board/ui/pages/BoardListPage'

const BoardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/react-board-app" replace/>} />
      <Route path="/react-board-app" element={<BoardListPage/>} />
    </Routes>
  )
}

export default BoardRoutes