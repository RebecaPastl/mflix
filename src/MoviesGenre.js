//imports
//when in the client side, use import syntax
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class MoviesGenre extends React.Component {

        //store a state that will be used by more than one child component 
        constructor(props) {
       
            super(props);
        
            this.state = {
                        
                //stores all genres to pass as props to the children
                genres:[ ],
         
            }
                 
        }
    
        //method that is called only after the prop and states have been updated
        componentDidMount() {
        
            //all genres
            axios.get('/genres')
            .then (genresList => {
                
                this.setState({
                    
                    genres:genresList.data
                    
                });
                
            })
            .catch(error=>console.log(error));
                    
        }

    render() {
        
        //render header
        return(
            
            <React.Fragment>
        
                <div className='main-wrapper'>            
                    <div className='genre-buttons text-left float-left'>
                        <p>Choose the genres:</p>        
                        <Form className="mb-2" >
                            {this.state.genres.slice(0).map((genre, index) => 

                                <>
                                    <Form.Check value={genre} key={index} label={genre} />
                                    
                                </>

                            )}
                        </Form>               
                    </div>
                    <div className='genre-results float-right'>
                        <p>Search for a movie by genre</p>
                        <Button variant="secondary" className="hover-effect shadow m-1">Search by Genre</Button> 
                        <div>Result 2</div>
                    </div>
                </div>
            </React.Fragment> 
            
        );
    }

}

export default MoviesGenre;