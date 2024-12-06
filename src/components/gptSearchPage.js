import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchbar from "./GptSearchbar";

const gptSearchPage = () => {
  return (
    <div>
      <GptSearchbar />
      <GptMovieSuggestion />
    </div>
  );
};

export default gptSearchPage;
