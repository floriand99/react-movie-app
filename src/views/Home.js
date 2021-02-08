import { useEffect, useState } from "react";
import MoviePoster from ".././components/MoviePoster";
import Slide from ".././components/Slide";
import Search from ".././components/Search";
// 90daeb5824666e1c03ec2d1015aa985a
function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const urls = [
      "https://api.themoviedb.org/3/trending/movie/day?api_key=90daeb5824666e1c03ec2d1015aa985a",
      "https://api.themoviedb.org/3/trending/tv/day?api_key=90daeb5824666e1c03ec2d1015aa985a",
      "https://api.themoviedb.org/3/discover/movie?api_key=90daeb5824666e1c03ec2d1015aa985a&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1",
    ];
    Promise.all(urls.map((url) => fetch(url).then((res) => res.json()))).then(
      (res) => {
        setTrendingMovies(res[0].results.splice(0, 16));
        setTrendingShows(res[1].results.splice(0, 8));
        setPopular(res[2].results.splice(0, 8));
      }
    );
  }, []);
  return (
    <div className="main">
      <Slide items={trendingMovies} />
      <Search />
      <div className="container col-lg-9">
        <div className="d-flex justify-content-between align-items-center my-5">
          <h2 className="fw-bold">Trending movies</h2>
          <div className="d-flex">
            <span className="pr-2">View all</span>
            <div style={{ width: 10 }}></div>
            <svg
              className="pl-2"
              fill="#ccc"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </div>
        <div className="row">
          {trendingMovies.slice(0, 8).map((item) => (
            <MoviePoster
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.poster_path}
              rating={item.vote_average}
            />
          ))}
        </div>
        <h2 className="my-5 fw-bold">Trending TV shows</h2>
        <div className="row">
          {trendingShows.map((item) => (
            <MoviePoster
              key={item.id}
              id={item.id}
              title={item.name}
              image={item.poster_path}
              rating={item.vote_average}
            />
          ))}
        </div>
        <h2 className="my-5 fw-bold">Highest grossing movies</h2>
        <div className="row">
          {popular.map((item) => (
            <MoviePoster
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.poster_path}
              rating={item.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
