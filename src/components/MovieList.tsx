//import { useEffect } from 'react'
//import { getMovies } from '../api/api'
//import { useMoviesStore } from '../store/store'
import MovieCard from './MovieCard'
import type { Movie } from '../types/types'

interface Props {
  movieList: Movie[]
}

const MovieList = ({ movieList }: Props) => {
  //const { setMovieList } = useMoviesStore((state) => state)
  // const { movieList } = useMoviesStore((state) => state)

  return (
    <ul
      role='list'
      className='grid grid-cols-4 gap-4'
    >
      {movieList?.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.id}
        />
      ))}
    </ul>
  )
}

export default MovieList
