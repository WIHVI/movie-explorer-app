import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const MovieDetails = () => {
  const { id } = useParams();
  const { movies: movie } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4ea3c6db50c092c7a9667c9e47ef2cca&language=en-US`
  );

  return (
    <>
      {movie && (
        <div className="movie-details-wrapper">
          <img
            className="movie-details-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={`${movie.title} Image`}
          />
          <div className="movie-details">
            <h1>{movie.title}</h1>
            <ul>
              {movie.genres.map((genre) => {
                return (
                  <li key={genre.id}>
                    <Link
                      to={`/genre/${genre.id}`}
                      className="movie-details-link"
                    >
                      {genre.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div>
              <p className="release-date">{movie.release_date}</p>
              <p className="rating">
                <AiOutlineStar className="star" />
                {movie.vote_average.toFixed(1)}
              </p>
              <p className="runtime">{movie.runtime}min</p>
            </div>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
