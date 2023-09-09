import React from 'react';
import Card from 'react-bootstrap/Card';

function MoviesAll(props) {
    return(
        
        <React.Fragment>
            <div className='main-wrapper'>
                <h2 className='display-3 my-3'>All movies</h2>
                <div className='card-columns'>
                    {props.movies.slice(0).reverse().map((movie, index) => 

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

export default MoviesAll;