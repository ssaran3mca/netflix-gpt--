import { useSelector } from "react-redux";
import useMainBg from "../hooks/useMainBg";

const MainVideo = (id) => {
  useMainBg(id);
  const trailerStor = useSelector((stror) => stror.movies.sliderVideo);
  if (!trailerStor) return;
  return (
    <div className="slider-video">
      <iframe
        width="100%"
        height="650"
        src={"https://www.youtube.com/embed/" + trailerStor.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerolicy="strict-origin-when-cross-origin"
        allowFullScreen
        autoPlay="1"
        mute="0"
      ></iframe>
    </div>
  );
};

export default MainVideo;
