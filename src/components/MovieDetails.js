import useFetch from "./useFetch";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import PlayTrailer from "./PlayTrailer.js";
import { AiOutlineStar } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const MovieDetails = () => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { id } = useParams();
  const { movies: movie } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4ea3c6db50c092c7a9667c9e47ef2cca&language=en-US`
  );
  return (
    <div>
      {movie && (
        <div className="movie-details-wrapper">
          {playTrailer ? (
            <div className="trailer">
              <div onClick={() => setPlayTrailer(false)}>
                <IoClose className="close-icon" fill="#668aff" />
              </div>
              <PlayTrailer />
            </div>
          ) : (
            <img
              className="movie-details-poster"
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={`${movie.title} Image`}
            />
          )}
          <div className="movie-details">
            <div className="title_and_trailer-btn">
              <h1>{movie.title}</h1>
              <p className="trailer-btn" onClick={() => setPlayTrailer(true)}>
                <BsPlayFill className="play-icon" fill="#668aff" />
                Play Trailer
              </p>
            </div>
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
            <div className="movie-details-list">
              <p className="release-date">{movie.release_date}</p>
              <p className="rating">
                <AiOutlineStar className="star" />
                {movie.vote_average.toFixed(1)}
              </p>
              <p className="runtime">{movie.runtime}min</p>
            </div>
            <p className="overview">{movie.overview}</p>
            <Link to={`/similar-movies/${id}`} className="similar-movies">
              Similar Movies
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
