import React from 'react'
import { useState } from 'react'

export const MoviesSearch = () => {
    const urlBase = `https://api.themoviedb.org/3/search/movie`;
    const API_KEY = '4d3c209d811628e2a7e7c7758d520584';

    const [search, setMovieSearch] = useState('')
    const [movies, setMovies] = useState([])

    const handleInputChange = (e) => {
        setMovieSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('se hizo fetch')
        fetchPeliculas();
    }
    const fetchPeliculas = async () => {
        try{
            const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}`);
            const data = await response.json();
            console.log(data.results)
            setMovies(data.results);
        }catch(error){
            console.log(error)
        }
    }


  return (
    <>
    <div className='container'>
        <h1 className='title'>Buscador peliculas</h1>

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Escribír película" 
                value={search}
                onChange={handleInputChange}
            />
            <button type="submit" className="search-button">Buscar</button>
        </form>
        <div className="movie-list">
            {
                movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                      <h2>{movie.title}</h2>
                      <p>{movie.overview}</p>
                    </div>
          
                ))
            }
        </div>
        
    </div>
    </>
    
  )
}
