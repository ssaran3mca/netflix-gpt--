import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../unitls/movieSlice";

const useNowPlayingMovies = (API_OPTION) => {
  const nowPlayMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
