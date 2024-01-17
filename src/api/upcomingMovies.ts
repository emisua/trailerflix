import type { Movie, Api_Response } from "../types/types";

const bearerKey: string = import.meta.env.BEARER_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${bearerKey}`,
  },
};

export async function getMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1",
    options
  );

  const movies: Api_Response = await response.json();
  return movies?.results as Movie[];
}
