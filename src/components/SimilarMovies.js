import MovieList from "./MovieList";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const SimilarMovies = () => {
  const { id } = useParams();
  const { movies } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4ea3c6db50c092c7a9667c9e47ef2cca&language=en-US&page=1`
  );

  return (
    <div className="similar-movies">
      <h1>Similar Movies</h1>
      {movies && <MovieList movies={movies.results} />}
    </div>
  );
};

export default SimilarMovies;
