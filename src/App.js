import React , { useEffect, useState } from 'react';
import './App.css';
import { json, Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Header/Nav';
import MovieList from './components/Movies/MovieList'
import Favourites from './components/Favourites/Favourites'
import Logout from './components/Logout/Logout'
import AddFavourite from './components/Movies/AddFavourite';
import { LockOpen } from '@material-ui/icons';

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
    <Nav handleInput={handleInput}/>
    <Routes>
        <Route path="/" element={<MovieList  movies={movies} handleFavourite={handleFavourite} favouriteComponents={AddFavourite}/>}/>
        <Route path="/favourite" element={<Favourites favourite={favourite} setFavourite={setFavourite} removeFavourite={removeFavourite}/> }/>
        <Route path="/logout" element={<Logout/>}/>
    </Routes>
    </>
  );
}

export default App;