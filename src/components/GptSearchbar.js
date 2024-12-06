import { useSelector } from "react-redux";
import lang from "../unitls/languageChange";

const GptSearchbar = () => {
  const language = useSelector((store) => store.config.lag);
  console.log(lang[language]?.search);
  console.log(language);
  return (
    <div className=" d-flex justify-content-center  pt-3">
      <div className="input-group mb-3 w-50 bg-black p-3">
        <input
          type="text"
          className="form-control"
          placeholder={lang[language]?.placeholder}
          aria-label="search "
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          <button className="btn  btn-danger text-white">
            {lang[language]?.search}
          </button>
        </span>
      </div>
    </div>
  );
};

export default GptSearchbar;
