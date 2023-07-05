import React from "react";
import { useState,useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';
import Movie from "./component/movie";

//aff87530
const API_URL = 'http://www.omdbapi.com/?apikey=aff87530&'



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Godfather");
      }, []);

    return (
       <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input 
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img src={searchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
            />
        </div>
        {
            
            movies
            ?(
                
                <div className="container">
                    {
                        
                        movies.map((movie) => (
                            <Movie movie1={movie}/>
                        ))
                    }
                </div>
            ) : 
            (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )

        }
        

        
       </div>
    );
};

export default App;