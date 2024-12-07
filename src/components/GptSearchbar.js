import { useRef, useState } from "react";
import { API_OPTION } from "../unitls/constants";
import openaigpt from "../unitls/openaigpt";
import { useDispatch, useSelector } from "react-redux";
import lang from "../unitls/languageChange";
import { addGptMovice } from "../unitls/gptSlice";
import GptMovieResult from "./GptMovieResult";

const GptSearchbar = () => {
  const [query, setQuery] = useState("");
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lag);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openaigpt.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    // }
    // console.log(gptResults.choices?.[0]?.message?.content);
    const gptResults_Deom =
      "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan";
    // console.log(gptResults_Deom);

    const gptMovies = gptResults_Deom.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(
      addGptMovice({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div>
      <div className=" d-flex justify-content-center  pt-3">
        <form
          className="input-group mb-3 w-50 bg-black p-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="form-control"
            placeholder={lang[langKey].placeholder}
          />
          <span className="input-group-text" id="basic-addon2">
            <button
              className="btn  btn-danger text-white"
              type="submit"
              onClick={handleGptSearchClick}
            >
              {lang[langKey]?.search}
            </button>
            {/* {results} */}
          </span>
        </form>
      </div>
      <div className="container">
        <GptMovieResult />
      </div>
    </div>
  );
};

export default GptSearchbar;
