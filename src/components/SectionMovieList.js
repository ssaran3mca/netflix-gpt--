import { useEffect, useRef } from "react";
import SectionMovieCard from "./SectionMovieCard";

const SectionMovieList = ({ title, movie }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const element = listRef.current;

    // Check if the element is available
    if (!element) return;
    const handleScroll = (event) => {
      event.preventDefault();

      element.scrollLeft += event.deltaY; // Scroll horizontally based on vertical mouse wheel movement
    };
    element.addEventListener("wheel", handleScroll);
    // Cleanup the event listener on unmount
    return () => {
      element.removeEventListener("wheel", handleScroll);
    };
  }, []);
  if (!movie) return;
  return (
    <div className=" ">
      <h1>{title}</h1>
      <div className="product-list" ref={listRef}>
        {movie.map((movies) => (
          <SectionMovieCard key={movies.id} movies={movies} />
        ))}
      </div>
    </div>
  );
};

export default SectionMovieList;
