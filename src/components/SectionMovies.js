import { useSelector } from "react-redux";
import SectionMovieList from "./SectionMovieList";

const SectionMovies = () => {
  const movie = useSelector((st) => st.movies);

  return (
    <div className="container moive-section mt-5 pt-5">
      <SectionMovieList title={"New Moview"} movie={movie.nowPlayingMovies} />
      <SectionMovieList title={"old Moview"} movie={movie.tvMovies} />
    </div>
  );
};

export default SectionMovies;
