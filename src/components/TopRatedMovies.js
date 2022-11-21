import React from "react";
import MovieList from "./MovieList";
import useFetch from "./useFetch";

const TopRatedMovies = () => {
  const { movies } = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4ea3c6db50c092c7a9667c9e47ef2cca&language=en-US&page=1"
  );

  return (
    <div className="top-rated-movies">
      <h1>Top Rated Movies</h1>
      {movies && <MovieList movies={movies.results} />}
    </div>
  );
};

export default TopRatedMovies;
