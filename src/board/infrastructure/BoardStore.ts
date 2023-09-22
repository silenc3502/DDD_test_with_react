import create from 'zustand';
import { BoardProperties } from "@/board/types";

export type BoardStore = {
  boardList: BoardProperties[];
  saveBoardList: (boardList: BoardProperties[]) => void;
};

export const useBoardStore = create<BoardStore>((set) => ({
  boardList: [],
  saveBoardList: (boardList) => set({ boardList }),
}));