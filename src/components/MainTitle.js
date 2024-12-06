const MainTitle = ({ overview, title }) => {
  // console.log(overview);

  return (
    <div className="col-sm-4 slider-text">
      <h1>{title}</h1>
      <p>{overview}</p>
      <button type="button" className="btn btn-primary me-2">
        <i className="bi bi-play-fill"></i> Play
      </button>
      <button type="button" className="btn btn-secondary">
        More Info
      </button>
    </div>
  );
};

export default MainTitle;
