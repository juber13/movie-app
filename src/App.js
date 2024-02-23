import React from 'react';
import './App.css';
import {Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Header/Nav';
import MovieList from './components/Movies/MovieList'
import Favourites from './components/Favourites/Favourites'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="/favourite" element={<Favourites/> }/>
    </Routes>
    </>
  );
}

export default App;