import Header from "./Header";
import { API_OPTION } from "../unitls/constants";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SectionMovies from "./SectionMovies";
import GptSearchPage from "./gptSearchPage";

import MainSliderVideo from "./MainSliderVideo";
import useTvMovies from "../hooks/useTvMovies";
import { useSelector } from "react-redux";

const Brows = () => {
  const nowPlayingMoview = useNowPlayingMovies(API_OPTION);
  const nowTvMoview = useTvMovies(API_OPTION);
  const gtpShow = useSelector((store) => store.gpt.shwoGptSearch);
  // console.log(gtpShow);
  return (
    <div>
      <Header />
      <div className="mainpage ">
        {!gtpShow ? (
          <GptSearchPage />
        ) : (
          <>
            <MainSliderVideo />
            <SectionMovies />
          </>
        )}
      </div>
    </div>
  );
};

export default Brows;
