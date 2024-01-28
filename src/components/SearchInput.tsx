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
      className="flex flex-1"
      onSubmit={(e) => searchMovie(e)}
      //action={`/search?=${movieTitle}`}
    >
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={(e) => {
          setMovieTitle(e.target.value);
        }}
        className="text-neutral-300 rounded-tl rounded-bl px-2 py-1 bg-neutral-700/60 backdrop-blur-sm text-sm w-36 flex-1"
      />
      <button
        className="bg-red-500/50 backdrop-blur-sm px-2 py-1 text-neutral-300 rounded-tr rounded-br text-sm"
        type="submit"
      >
        <SearchIcon className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchInput;
