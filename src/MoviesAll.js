//imports
//when in the client side, use import syntax
import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

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
                    <h2 className='display-3 my-3'>All movies</h2>
                    <div className='card-columns'>
                        {this.state.movies.slice(0).reverse().map((movie, index) => 

                            <>
                                <Card key={index} className="hover-effect shadow rounded mb-5 mx-auto" bg='secondary' style={{ width: '18rem' }}>
                                    <Card.Img variant='top' src={movie.poster} alt={movie.title} />
                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>
                                            ({movie.year})
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </>
                            
                        )}
                    </div>
                </div>
            </React.Fragment> 
            
        );
    }

}

export default MoviesAll;