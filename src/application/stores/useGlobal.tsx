import { create } from "zustand";

type GlobalState = {
  DarkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const useGlobal = create<GlobalState>((set) => ({
  DarkMode: false,
  setDarkMode: (value) => set({ DarkMode: value }),
}));

export default useGlobal;
