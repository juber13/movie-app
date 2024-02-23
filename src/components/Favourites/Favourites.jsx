import React from 'react';
import './Favourite.css'

import { GetMovieContext } from '../context/myContext';

const Favourites = () => {
  const data = GetMovieContext();
  const { favourite, removeFavourite } = data;
  return (
    <>
      <div className="moviesList">
        {favourite.length > 0 ? favourite.map((movie, index) => {
          console.log(movie);
          return (
            <div className="movie" key={movie.imdbID}>
              <img src={movie.Poster} alt="movie" />
              <h3 className='remove' onClick={() => removeFavourite(movie)}>Remove</h3>
            </div>
          );
        }) : <h3 className='empty-message'> Add what you like :<code>{")"}</code></h3>}
      </div>
    </>
  );
}

export default Favourites

