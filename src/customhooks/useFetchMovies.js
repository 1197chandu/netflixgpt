import { API_OPTIONS } from "../utilities/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlyingMovies();
  }, []);

  const getNowPlyingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useFetchMovies;
