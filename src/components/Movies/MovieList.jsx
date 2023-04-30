import React from "react";
import './Movies.css'
const MovieList = (props) => {
  const AddFavourite = props.favouriteComponents;
  return (
    <div className="moviesList">
      {props.movies.map((movie, index) => {
        console.log(movie)
        return (
          <>
          <div className="movie" onClick={() => props.handleFavourite(movie)}>
            <img src={movie.Poster} alt="movie" />
            <div className="title">
              <h6 style={{marginTop:"10px"}}>{movie.Title}</h6>
              <small style={{background  : "#567898" , color : "#fff" , padding : "0.4em", fontSize : "10px" , cursor : "pointer"}} onClick={() => props.handleFavourite(movie)}> Add To Favourite</small>
               <small style={{color: "green"}}> Rating 5 star</small>
              </div>

              <div className="overlay">
              <AddFavourite/>
            </div>
          </div>
        </>
        );
      })}
       
    </div>
  );
};

export default MovieList;
