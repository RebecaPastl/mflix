//imports
//when in the client side, use import syntax
import React from 'react';
import MoviesAll from './MoviesAll.js'
import MoviesGenre from './MoviesGenre.js'
import {Switch, Route} from 'react-router-dom'

class Main extends React.Component {

    render() {
        
        //render header
        return(
            
            <Switch>
                <Route path='/' exact >
                    <MoviesAll/>
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

}

export default Main;