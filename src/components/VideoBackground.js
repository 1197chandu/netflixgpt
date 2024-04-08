import useFetchMovieVideos from "../customhooks/useFetchMovieVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useFetchMovieVideos(id);
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  return (
    <div className="w=screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&controls=0&&showinfo=0&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
