import { MOVIE_POSTER_CDN } from "../utilities/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 px-2">
      <img src={MOVIE_POSTER_CDN + posterPath} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
