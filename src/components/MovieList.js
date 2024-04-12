import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6">
      <h1 className="py-4 px-2 font-3xl font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => {
            return <MovieCard posterPath={movie.poster_path} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
