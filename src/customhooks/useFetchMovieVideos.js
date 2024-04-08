import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../redux/movieSlice";

const useFetchMovieVideos = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    const fiteredData = json.results.filter((video) => video.type == "Trailer");
    const trailer = fiteredData.length ? fiteredData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };
};

export default useFetchMovieVideos;
