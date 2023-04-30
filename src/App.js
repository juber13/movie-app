import React , { useEffect, useState } from 'react';
import './App.css';
import {Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Header/Nav';
import MovieList from './components/Movies/MovieList'
import Favourites from './components/Favourites/Favourites'
import AddFavourite from './components/Movies/AddFavourite';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [movieName , setMovieName] = useState('spider');
  
   useEffect(() => {
    const fetchMovies = async() => {
      const res = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=66ec4406`);
      const data = await res.json();
      if(data.Search) setMovies(data.Search);
     }

      fetchMovies();
   },[movieName])

   const handleInput = (value) => {
    setMovieName(value)
  }


  const addToLocalStorage = (items) => {
    localStorage.setItem('movie' , JSON.stringify(items));
  }

  
  const handleFavourite = (movie) => {
    const isFound = favourite.some(item => {
      if(item.Title === movie.Title) return true;
      else return false;
    })

    if(!isFound){
      const newFaveurite = [...favourite , movie];
      setFavourite(newFaveurite);
      addToLocalStorage(newFaveurite);
    } 
   }

   
  useEffect(() => {
    const movieFavourite= JSON.parse(localStorage.getItem('movie')) || [];
    console.log(movieFavourite);
    setFavourite(movieFavourite);
  },[])

  const removeFavourite = (movie) => {
    const newFavourite = favourite.filter((favo) => favo.imdbID !== movie.imdbID);
    setFavourite(newFavourite);
    addToLocalStorage(newFavourite);
  }
 
  return (
    <>
    <Nav handleInput={handleInput} favourite={favourite}/>
    <Routes>
        <Route path="/" element={<MovieList  movies={movies} handleFavourite={handleFavourite} favouriteComponents={AddFavourite}/>}/>
        <Route path="/favourite" element={<Favourites favourite={favourite} setFavourite={setFavourite} removeFavourite={removeFavourite}/> }/>
    </Routes>
    </>
  );
}

export default App;