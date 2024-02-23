import React, { useCallback, useEffect, useState, createContext, useContext } from 'react';
// import debounce from 'lodash/debounce';


const movieContext = createContext({});

const MyContext = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [favourite, setFavourite] = useState([]);
    const [movieName, setMovieName] = useState('spider');
    const [selectedMovie, setSelectedMovie] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=66ec4406`);
            const data = await res.json();
            if (data.Search) setMovies(data.Search);
        }

        fetchMovies();
    }, [movieName])




    const handleInput = (value) => {
        setMovieName(value);
        console.log(value);
    }

    const addToLocalStorage = (items) => {
        localStorage.setItem('movie', JSON.stringify(items));
    }


    const handleFavourite = (movie) => {
        console.log('working')
        const isFound = favourite.some(item => {
            if (item.Title === movie.Title) return true;
            else return false;
        })

        if (!isFound) {
            const newFaveurite = [...favourite, movie];
            setFavourite(newFaveurite);
            addToLocalStorage(newFaveurite);
        }
    }


    useEffect(() => {
        const movieFavourite = JSON.parse(localStorage.getItem('movie')) || [];
        console.log(movieFavourite);
        setFavourite(movieFavourite);
    }, [])

    const removeFavourite = (movie) => {
        const newFavourite = favourite.filter((favo) => favo.imdbID !== movie.imdbID);
        setFavourite(newFavourite);
        addToLocalStorage(newFavourite);
    }

    return (
        <movieContext.Provider value={{ movies, handleInput, favourite, movieName, setMovieName, setMovies, setFavourite, handleFavourite, removeFavourite }}>
            {children}
        </movieContext.Provider>
    )
}




export const GetMovieContext = () => {
    const ctx = useContext(movieContext);
    return ctx;
}

export default MyContext