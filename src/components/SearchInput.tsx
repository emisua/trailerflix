import { useState, type FormEvent } from "react";
import SearchIcon from "../icons/SearchIcon";

const SearchInput = () => {
  const [movieTitle, setMovieTitle] = useState<string>("");

  function searchMovie(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = `/search/${movieTitle}`;
  }

  return (
    <form
      className="flex"
      onSubmit={(e) => searchMovie(e)}
      //action={`/search?=${movieTitle}`}
    >
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={(e) => {
          setMovieTitle(e.target.value);
        }}
        className="text-neutral-300 text-opacity-60 rounded-tl rounded-bl px-2 py-1 bg-neutral-700/90 backdrop-blur-sm text-sm "
      />
      <button
        className="bg-red-500/30 backdrop-blur-sm px-2 py-1 text-neutral-300 rounded-tr rounded-br text-sm"
        type="submit"
      >
        <SearchIcon className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchInput;
