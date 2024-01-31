import type { Movie } from '../types/types'

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const movieURL = `https://image.tmdb.org/t/p/w300${movie?.poster_path}`

  return (
    <li className='text-neutral-300 flex flex-col md:gap-4 gap-2 mb-4'>
      <a
        href={`/details/${movie.id}`}
        className='cursor-pointer'
      >
        <img
          src={movieURL}
          alt={movie.overview}
          className='rounded-md aspect-[9/13] object-cover'
        />
      </a>
      <h2 className='md:text-lg text-md font-normal oswald '>{movie.title}</h2>
    </li>
  )
}

export default MovieCard
