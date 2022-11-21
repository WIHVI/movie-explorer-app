import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.poster_path ? (
            <div className="movie-preview">
              <Link to={`/movies/${movie.id}`}>
                <img
                  className="movie-poster"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
              </Link>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
