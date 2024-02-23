import React from "react";
import { nanoid } from "nanoid";
import './Movies.css'
import { GetMovieContext } from "../context/myContext";
import { CiHeart } from "react-icons/ci";

const MovieList = () => {
  let id = nanoid()
  const data = GetMovieContext();

  const { handleFavourite, movies } = data;

  return (
    <div className="moviesList" key={id}>
      {movies.map((movie, index) => {
        return (
          <>
            <div className="movie" key={index}>
              <img src={movie.Poster} alt="movie" />
              <div className="title">
                <h6 style={{ marginTop: "10px" }}>{movie.Title}</h6>
                <small style={{ fontSize: "2rem", cursor: "pointer" }} onClick={() => handleFavourite(movie)}> <CiHeart /> </small>
                <small style={{ color: "green" }}> Rating 5 star</small>
              </div>

            </div>
          </>
        );
      })}

    </div>
  );
};

export default MovieList;
