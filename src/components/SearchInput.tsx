import { useState, type FormEvent } from 'react'

const SearchInput = () => {
  const [movieTitle, setMovieTitle] = useState<string>('')

  function searchMovie(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    window.location.href = `/search/${movieTitle}`
  }

  return (
    <form
      className='flex gap-2'
      onSubmit={(e) => searchMovie(e)}
      //action={`/search?=${movieTitle}`}
    >
      <input
        type='text'
        placeholder='Buscar'
        onChange={(e) => {
          setMovieTitle(e.target.value)
        }}
        className='rounded p-2 bg-neutral-700 backdrop-blur-lg'
      />
      <button
        className='bg-red-500 p-2 text-neutral-300 rounded'
        type='submit'
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchInput
