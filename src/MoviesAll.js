//imports
//when in the client side, use import syntax
import React from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';

class MoviesAll extends React.Component {

        //store a state that will be used by more than one child component 
        constructor(props) {
       
            super(props);
        
            this.state = {
                        
                //stores all movies to pass as props to the children
                movies:[ ],
         
            }
                 
        }
    
        //method that is called only after the prop and states have been updated
        componentDidMount() {
    
            //all movies
            axios.get('/movies')
            .then(moviesList=> {
                        
                const newMovieList = moviesList.data
                        
                newMovieList.slice(0).reverse().map(movie => {
                    if (movie.hasOwnProperty("poster") == false) {
                        movie.poster = "/images/noImage.png";
                    }
                })
            
                this.setState({
                            
                    movies:newMovieList
                            
                });
                        
            })    
            .catch(error => console.log(error));
                    
        }

    render() {
        
        //render header
        return(
            
            <React.Fragment>
                <div className='main-wrapper'>
                    <div>
                        {this.state.movies.slice(0).reverse().map((movie, index) => 

                            <>
                                <div className='div-image mt-4'>
                                    <Image className='image w-50' key={index} src={movie.poster} alt={movie.title} fluid />
                                    <h4>{movie.title}</h4>
                                </div>
                            </>
                            
                        )}
                    </div>
                </div>
            </React.Fragment> 
            
        );
    }

}

export default MoviesAll;