import React from "react";
import { Link } from "react-router-dom";
const MoviePoster = ({ id, title, image, rating }) => {
  const getTitleSlug = () =>{
    return title.replace(/ /g, '-').replace(':', '').toLowerCase()
  }
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <Link to={`/movies/${getTitleSlug()}/${id}`} className="movie-link">
        <div className="movie mb-4 rounded shadow">
          <img
            className="rounded"
            src={"https://image.tmdb.org/t/p/w300" + image}
            alt={title + ' poster'}
          />
          <div className="p-2 movie-info">
            <small>{title}</small>
            <small className="movie-rating px-2 py-1 rounded">{rating}</small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviePoster;
