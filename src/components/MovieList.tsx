import { useEffect } from "react";
import { getMovies } from "../api/api";
import { useMoviesStore } from "../store/store";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { setMovieList } = useMoviesStore((state) => state);
  const { movieList } = useMoviesStore((state) => state);

  console.log("entro");

  useEffect(() => {
    getMovies().then((movies) => setMovieList(movies));
  }, []);

  return (
    <ul role="list" className="grid grid-cols-4 gap-4">
      {movieList?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
