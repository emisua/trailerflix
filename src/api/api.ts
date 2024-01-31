import trailers from '../adapters/trailers'
import type { Api_Response, MovieDetails, TrailerResult } from '../types/types'

const bearerKey: string = import.meta.env.BEARER_KEY

const PREFIX_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = '?language=en-EU'
const PAGE = '?page=1'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${bearerKey}`,
  },
}

export async function getMovies() {
  const response = await fetch(
    `${PREFIX_URL}/movie/upcoming${LANGUAGE}&${PAGE}`,
    options
  )

  const movies: Api_Response = await response.json()
  console.log(movies)
  return movies?.results
}

export async function getMovieByTitle(name: string) {
  const response = await fetch(
    `${PREFIX_URL}/search/movie?query=${name}&${LANGUAGE}${PAGE}`,
    options
  )

  const movies: Api_Response = await response.json()
  return movies?.results
}

export async function getMovieByID(id: string) {
  const response = await fetch(
    `${PREFIX_URL}/movie/${id}?${LANGUAGE}${PAGE}`,
    options
  )
  const movie: MovieDetails = await response.json()
  return movie
}

export async function getTrailerByID(id: string) {
  const response = await fetch(
    `${PREFIX_URL}/movie/${id}/videos${LANGUAGE}`,
    options
  )
  const movie: TrailerResult = await response.json()
  return trailers(movie?.results)
}
