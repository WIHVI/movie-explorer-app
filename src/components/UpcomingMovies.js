import MovieList from "./MovieList";
import useFetch from "./useFetch";

const UpcomingMovies = () => {
  const { movies } = useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=4ea3c6db50c092c7a9667c9e47ef2cca&language=en-US&page=1"
  );

  return (
    <div className="upcoming-movies">
      <h1>Upcoming Movies</h1>
      {movies && <MovieList movies={movies.results} />}
    </div>
  );
};

export default UpcomingMovies;
