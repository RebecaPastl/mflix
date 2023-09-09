import React from 'react';
import Card from 'react-bootstrap/Card';

function Home(props) {
    return(
        <React.Fragment>
            <div className='main-wrapper'>
                <h2 className='display-3 my-3'>Featured movie</h2>
                <Card className="hover-effect shadow rounded mx-auto d-block" bg='secondary' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={props.randomMovie.poster} alt={props.randomMovie.title} />
                    <Card.Body>
                        <Card.Title>{props.randomMovie.title}</Card.Title>
                        <Card.Text>
                            ({props.randomMovie.year})
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment> 
    );
}

export default Home;