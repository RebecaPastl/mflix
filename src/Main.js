//imports
//when in the client side, use import syntax
import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

class Main extends React.Component {

    //store a state that will be used by more than one child component 
    constructor(props) {
        
        super(props);
            
        this.state = {
                
            //stores all movies to pass as props to the children
            movies:[],
            displayAll:'none',
            displayGenre:'none'
 
        }
            
        this.allMovies = this.allMovies.bind(this); // refers to this of Main
        this.showAll = this.showAll.bind(this); // refers to this of Main
        this.showGenre = this.showGenre.bind(this); // refers to this of Main
        this.showNone = this.showNone.bind(this); // refers to this of Main
            
    }
    
    allMovies(event){
        
        //all movies
        axios.get('/movies')
        .then(moviesList=> {
            
            const newMovieList = moviesList.data
            
            newMovieList.slice(0).reverse().map(movie => {
                if (movie.hasOwnProperty("poster") == false) {
                    movie.poster = "/images/noImage.png";
                }
            })

            console.log(newMovieList)

            this.setState({
                
                movies:newMovieList
                
            });
            
        })    
        .catch(error => console.log(error));
        
    }

    showAll(event){

        this.setState({
                
            displayAll:'block',
            displayGenre:'none',
            movies:[]
            
        });

    }

    showGenre(event){

        this.setState({
                
            displayAll:'none',
            displayGenre:'block',
            movies:[]
            
        });

    }

    showNone(event){

        this.setState({
                
            displayAll:'none',
            displayGenre:'none',
            movies:[]
            
        });

    }

    render() {

        let allHidden = {
            
            display: this.state.displayAll
            
        }

        let genreHidden = {
            
            display: this.state.displayGenre
            
        }
        
        //render main
        return <>
            <div style={{minHeight:"60vh"}}>
                <div className="container-sm text-center mt-4">
                    <Button variant="secondary" className="m-1" onClick={this.showNone} block>Home</Button>
                    <Button variant="secondary" className="m-1" onClick={this.showAll} block>Display All</Button>    
                    <Button variant="secondary" className="m-1" onClick={this.showGenre} block>Search by Genre</Button>   
                </div>
                <p>Choose one option to access the movie database.</p>
                <div style={allHidden}>
                    <p>Display all movies</p>
                    <Button variant="secondary" className="m-1" onClick={this.allMovies}>Display All</Button> 

                    <div>
                        {this.state.movies.slice(0).reverse().map((movie, index) => 

                            <>
                                <div className='mt-4'>
                                    <Image className='w-50' key={index} src={movie.poster} alt={movie.title} fluid />
                                    <h4>{movie.title}</h4>
                                </div>
                            </>
                            
                        )}
                    </div>
                </div>
                <div style={genreHidden}>
                    <p>Search for a movie by genre</p>
                    <div></div>
                        <div>
                        <Button variant="secondary" className="m-1">Search by Genre</Button> 
                        <div>Result 2</div>
                    </div>
                </div>
            </div>

            
        </>;
    }

}

export default Main;