//import { useEffect } from 'react'
//import { getMovies } from '../api/api'
//import { useMoviesStore } from '../store/store'
import MovieCard from "./MovieCard";
import type { Movie } from "../types/types";

interface Props {
  movieList: Movie[];
}

const MovieList = ({ movieList }: Props) => {
  //const { setMovieList } = useMoviesStore((state) => state)
  // const { movieList } = useMoviesStore((state) => state)

  return (
    <ul
      role="list"
      className="grid grid-cols-[repeat(auto-fill,minmax(50px, 1fr))] grid-cols-2 gap-4"
    >
      {movieList?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
