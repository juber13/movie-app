import React , { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Header/Nav';
import MovieList from './components/Movies/MovieList'
import Favourites from './components/Favourites/Favourites'
import Logout from './components/Logout/Logout'
import AddFavourite from './components/Movies/AddFavourite';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [movieName , setMovieName] = useState('south');
  
  const fetchMovies = async() => {
   const res = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=66ec4406`);
   const data = await res.json();
   if(data.Search) setMovies(data.Search);
  }

  useEffect(() => {
    fetchMovies()
   },[])

   useEffect(() => {
      fetchMovies();
   },[movieName])

   const handleInput = (value) => {
    setMovieName(value)
  }
  
  const handleFavourite = (movie) => {
    setFavourite([...favourite , movie]);
   }
 
  return (
    <>
    <Nav handleInput={handleInput}/>
    <Routes>
        <Route path="/" element={<MovieList  movies={movies} handleFavourite={handleFavourite} favouriteComponents={AddFavourite}/>}/>
        <Route path="/favourite" element={<Favourites favourite={favourite} />}/>
        <Route path="/logout" element={<Logout/>}/>
    </Routes>
    </>
  );
}

export default App;