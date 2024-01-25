import { create } from "zustand";
import type { Movie, State } from "../types/types";

export const useMoviesStore = create<State>((set) => ({
  movieList: [],
  setMovieList: (movies: Movie[]) => set({ movieList: movies }),
}));
