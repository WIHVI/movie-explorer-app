import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const PlayTrailer = () => {
  const { id } = useParams();
  const { movies } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4ea3c6db50c092c7a9667c9e47ef2cca&language=en-US`
  );

  const playTrailer = () => {
    const trailer = movies.results.find((video) => video.type === "Trailer");
    return (
      <YouTube
        className={"play-trailer"}
        videoId={trailer.key}
        //opts={{ width: '100%', height: '80%' }}
      />
    );
  };

  return <div>{movies && playTrailer()}</div>;
};

export default PlayTrailer;
