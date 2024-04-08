import { MOVIE_POSTER_CDN } from "../utilities/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 px-2">
      <img src={MOVIE_POSTER_CDN + posterPath} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
