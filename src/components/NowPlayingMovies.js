import MovieList from "./MovieList";
import useFetch from "./useFetch";

const NowPlayingMovies = () => {
  const { movies } = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=4ea3c6db50c092c7a9667c9e47ef2cca&language=en-US&page=1"
  );

  return (
    <div className="now-playing-movies">
      <h1>Now Playing Movies</h1>
      {movies && <MovieList movies={movies.results} />}
    </div>
  );
};

export default NowPlayingMovies;
