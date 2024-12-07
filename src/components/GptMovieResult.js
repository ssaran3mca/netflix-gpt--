import { useSelector } from "react-redux";
import SectionMovieList from "./SectionMovieList";
const GptMovieResult = () => {
  const { movieNames, movieResults } = useSelector(
    (store) => store.gpt.gptMovies || []
  );
  if (!movieNames) return null;

  console.log(movieNames[0]);
  console.log(movieResults[0]);

  // console.log(movieResults);
  //   const { movieNames, movieResults } = useSelector((store) => store.gptMovies);
  //   console.log(movieNames);
  //   console.log(movieResults);

  return (
    <div className="container moive-section mt-5 pt-5">
      {movieResults.map((movie, index) => (
        <SectionMovieList title={movieNames[index]} movie={movie} />
      ))}
    </div>
  );
};

export default GptMovieResult;
