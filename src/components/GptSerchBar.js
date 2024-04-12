import React, { useRef } from "react";
import { API_OPTIONS, BG_IMG } from "../utilities/constants";
import openai from "../utilities/openai";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../redux/gptSlice";

const GptSerchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTmdbMovie = async (movie) => {
    const moviesTMDB = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );

    const json = await moviesTMDB.json();

    return json.results;
  };

  const handleSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation sysytem and give the results in comma separated formate for example Shole, Ashiqui, Race, Rockstar base on" +
      searchText.current.value;

    const results = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!results.choices) {
      //TODO
    }

    const gptMovies = results.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => {
      return searchTmdbMovie(movie);
    });

    const data = await Promise.all(promiseArray);

    dispatch(addGptMovies({ movieNames: gptMovies, movieResults: data }));
  };

  return (
    <div>
      <div className="pt-[40%] md:pt-[10%] flex justify-center">
        <form
          className="bg-gray-950 p-4 m-4 rounded-md w-full md:w-1/2 grid grid-cols-12"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={searchText}
            type="text"
            className="rounded-md p-2 mx-2 col-span-9"
            placeholder="What would you like to watch today?"
          ></input>
          <button
            className="bg-red-600 text-white rounded-lg py-2 mx-2 col-span-3"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSerchBar;
