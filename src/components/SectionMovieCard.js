import { IMG_CDN_URL } from "../unitls/constants";

const SectionMovieCard = ({ movies }) => {
  // console.log(movies);
  return (
    <div className="product my-3">
      <img src={IMG_CDN_URL + movies.poster_path} alt="movie-image" />
    </div>
  );
};

export default SectionMovieCard;
