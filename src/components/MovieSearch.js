import MovieList from "./MovieList";
import useFetch from "./useFetch";
import { useState } from "react";

const MovieSearch = () => {
  const [search, setSearch] = useState("");
  const { movies } = useFetch(
    "https://api.themoviedb.org/3/search/movie?api_key=4ea3c6db50c092c7a9667c9e47ef2cca&language=en-US&query=" +
      search
  );

  return (
    <div className="movie-search">
      <h1>Search For Movies</h1>
      <input
        type="text"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      {movies && <MovieList movies={movies.results} />}
    </div>
  );
};

export default MovieSearch;
