import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  console.log(movieResults);
  if (!movieNames) return null;
  return (
    <div className="m-4 p-4 bg-black text-white opacity-90">
      {movieNames.map((movieName, index) => {
        return (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        );
      })}
    </div>
  );
};

export default GptSuggestions;
