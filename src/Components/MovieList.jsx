import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const MovieList = () => {
  const { movieList, loading } = useContext(GlobalContext);
  return (
    <div className="container">
        {loading && <span>Loading...</span>}
      {movieList && movieList.length > 0
        ? movieList.map((item) => (
            <div key={item.imdbID} className='movie'>
              <img src={item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/400' } alt="movie poster" />
              <div>{item.Title}</div>
              <p>{item.Year}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default MovieList;
