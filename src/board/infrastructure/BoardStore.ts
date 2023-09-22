import { create } from 'zustand';
import { BoardProperties } from "../types";

export type BoardStore = {
  boardList: BoardProperties[];
  saveBoardList: (boardList: BoardProperties[]) => void;

  board: BoardProperties | null;
  saveBoard: (board: BoardProperties | null) => void;
};

export const useBoardStore = create<BoardStore>((set) => ({
  boardList: [],
  saveBoardList: (savedBoardList) => set({ boardList: savedBoardList }),

  board: null,
  saveBoard: (board) => set({ board }),
}));