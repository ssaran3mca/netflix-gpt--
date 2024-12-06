import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTvMovies } from "../unitls/movieSlice";

const useTvMovies = (API_OPTION) => {
  const dispatch = useDispatch();
  const getTvMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTvMovies(json?.results));
  };
  useEffect(() => {
    getTvMovies();
  }, []);
};

export default useTvMovies;
