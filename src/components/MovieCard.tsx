import type { Movie } from '../types/types'

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const movieURL = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`

  return (
    <li className='p-4 rounded-lg bg-neutral-900 text-neutral-300 shadow-xl hover:bg-neutral-900/70 transition-all duration-200 flex flex-col gap-4 w-full'>
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
      <h2 className='md:text-lg text-md font-bold'>{movie.title}</h2>
    </li>
  )
}

export default MovieCard
