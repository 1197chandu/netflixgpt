import { API_OPTIONS } from "../utilities/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlyingMovies();
  }, []);

  const getNowPlyingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
