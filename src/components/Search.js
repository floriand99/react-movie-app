import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query.length > 2) {
      fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          query +
          "&api_key=90daeb5824666e1c03ec2d1015aa985a&language=en-US&page=1&include_adult=false"
      )
        .then((res) => res.json())
        .then((res) => setSearchResults(res.results.splice(0, 5)));
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const getTitleSlug = (title) => {
    return title.replace(/ /g, "-").replace(":", "").toLowerCase();
  };

  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 my-5 align-items-center">
        <DebounceInput
          className="px-4 py-3 rounded shadow w-100 bg-light border-0 text-black mt-2 mb-1"
          placeholder="Search for any movie..."
          minLength={2}
          debounceTimeout={500}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="bg-light text-dark rounded shadow">
          {searchResults && query.length > 2
            ? searchResults.map((item, index) => (
                <Link
                  to={`/movies/${getTitleSlug(item.title)}/${item.id}`}
                  className="search-item"
                >
                  <div
                    key={item.id}
                    className={`px-4 py-2 d-flex align-items-center ${
                      index === 0 ? null : "border-top"
                    }`}
                  >
                    <img
                      alt="movie poster"
                      src={"https://image.tmdb.org/t/p/w200" + item.poster_path}
                      style={{ width: 20, height: 20, objectFit: "cover" }}
                      className="rounded"
                    />
                    <div style={{ marginRight: 10 }}></div>
                    <div>{item.original_title}</div>
                  </div>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
