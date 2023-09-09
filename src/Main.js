import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MoviesAll from './MoviesAll.js'
import MoviesGenre from './MoviesGenre.js'
import Home from './Home.js'
import {Switch, Route} from 'react-router-dom'

function Main() {

    const [randomMovie, setRandomMovie] = useState({});

    useEffect(() => {

        axios.get('/movies')
        .then(moviesList=> {
                    
            const newMovieList = moviesList.data
                    
            newMovieList.slice(0).reverse().map(movie => {
                if (movie.hasOwnProperty("poster") == false) {
                    movie.poster = "/images/noImage.png";
                }
            })
        
            let random = newMovieList[Math.floor(Math.random() * newMovieList.length)];

            setRandomMovie(random)
        })    
        .catch(error => console.log(error));
                
    }, []) //This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run

    return(
        <Switch>
            <Route path='/' exact >
                <Home randomMovie={randomMovie}/>
            </Route>
            <Route path='/all'>
                <MoviesAll />
            </Route>
            <Route path='/genre' >
                <MoviesGenre />
            </Route>
        </Switch>
    );

}

export default Main;