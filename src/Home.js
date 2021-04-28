//imports
//when in the client side, use import syntax
import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class Home extends React.Component {

        //store a state that will be used by more than one child component 
        constructor(props) {
       
            super(props);
        
            this.state = {
                        
                //stores all movies to pass as props to the children
                movies:[ ],
                randomMovie:'',
         
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
            
                let random = newMovieList[Math.floor(Math.random() * newMovieList.length)];

                this.setState({
                            
                    movies:newMovieList,
                    randomMovie:random,
                            
                });
                        
            })    
            .catch(error => console.log(error));
                    
        }

    render() {

        //render header
        return(
            
            <React.Fragment>
                <div className='main-wrapper'>
                    <h1 className='display-3 mt-3'>Featured movie</h1>
                    <Card className="rounded mx-auto d-block" bg='secondary' style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={this.state.randomMovie.poster} alt={this.state.randomMovie.title} />
                            <Card.Body>
                                <Card.Title>{this.state.randomMovie.title}</Card.Title>
                                <Card.Text>
                                    ({this.state.randomMovie.year})
                                </Card.Text>
                            </Card.Body>
                        </Card>

                </div>
            </React.Fragment> 
            
        );
    }

}

export default Home;