import create from 'zustand';
import {BoardProperties} from "@/board/types";

type BoardStore = {
    boardList: BoardProperties[];
    saveBoardList: (boardList: BoardProperties[]) => void;
};

export const useRecipeStore = create<BoardStore>((set) => ({
    boardList: [],
    saveBoardList: (boardList) => set({ boardList }),
}));
