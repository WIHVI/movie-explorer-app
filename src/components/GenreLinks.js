import MovieList from "./MovieList";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const GenreLinks = () => {
  const { id } = useParams();
  const { movies } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=4ea3c6db50c092c7a9667c9e47ef2cca&with_genres=${id}`
  );

  return (
    <div className="genre-movies">
      {movies && <MovieList movies={movies.results} />}
    </div>
  );
};

export default GenreLinks;
