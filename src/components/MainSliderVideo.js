import { useSelector } from "react-redux";
import MainVideo from "./MainVideo";
import MainTitle from "./MainTitle";

const MainSliderVideo = () => {
  const movie = useSelector((store) => store?.movies.nowPlayingMovies);
  if (!movie) return;
  const mainMovies = movie[0];
  const { original_title, overview, id } = mainMovies;
  // console.log(mainMovies);
  return (
    <div className="slider-main">
      <MainTitle title={original_title} overview={overview} />
      <MainVideo id={id} />
    </div>
  );
};

export default MainSliderVideo;
