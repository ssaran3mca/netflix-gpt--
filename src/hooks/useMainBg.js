import { useEffect } from "react";
import { addSliderVideo } from "../unitls/movieSlice";
import { API_OPTION } from "../unitls/constants";
import { useDispatch } from "react-redux";

const useMainBg = ({ id }) => {
  // console.log(id);

  const dispatch = useDispatch();

  const getMovieVideosBg = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTION
    );

    // console.log(data);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    if (!trailer) return;
    dispatch(addSliderVideo(trailer));
  };
  useEffect(() => {
    getMovieVideosBg();
  }, []);
};

export default useMainBg;
