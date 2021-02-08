import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=90daeb5824666e1c03ec2d1015aa985a`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, [id]);
  // <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
  return !data ? (
    <h1>'loading'</h1>
  ) : (
    <div
      className="text-white single-movie-bg d-flex justify-content-center"
    >
      <div className="single-movie-info py-5 py-lg-0 mb-lg-0" style={{zIndex: 999}}>
        <div className="container mx-auto">
          <div className="col-12">
          <h1 className="mb-4">{data.title}</h1>
          <div className="d-flex align-items-center">
            <div>{data.vote_average}</div>
            <svg
              className="mx-1"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
            /<div className="mx-1">{data.vote_count}</div>
          </div>
          <div className="d-flex">
            <div className="movie-details mb-3">{data.release_date}</div>
            <div className="movie-details mx-4">{data.runtime} minutes</div>
          </div>
          <p className="movie-description">{data.overview}</p>
          <div className="d-flex">
            {data.genres.map((item) => (
              <div key={item.id} className="genre p-1 mx-1 rounded">
                {item.name}
              </div>
            ))}
          </div>
          <br />
          {data.production_companies && (
            <div className="bg-white production-companies rounded">
              {data.production_companies.map(
                (item) =>
                  item.logo_path && (
                    <img
                      key={item.id}
                      src={`https://image.tmdb.org/t/p/w200${item.logo_path}`}
                      className="production-img p-2"
                      alt={item.name + " logo"}
                    />
                  )
              )}
            </div>
          )}
          </div>
        </div>
      </div>
      <div style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}>
      <div className="gradient-bg" style={{zIndex:999}}></div>
      </div>
    </div>
  );
};
export default Movie;
