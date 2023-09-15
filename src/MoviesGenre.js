import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

function MoviesGenre (props){

    const movies = props.movies;

    const [allGenres, setAllGenres] = useState([]);
    const [chosenGenres, setChosenGenres] = useState([]);
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    const [errorMessage, setErrorMessage] = useState();

    
    const genresButtons = allGenres.map((genre, index) =>                        
        <Button  
            key={genre+index} 
            variant="outline-secondary"
            value={genre} 
            className='m-2' 
            onClick={(e) => {handleCheck(e)}}
            active={chosenGenres.indexOf(genre) != -1 ? true : false}
        >
            {genre}
        </Button >
    )

    const chosenGenresTags = chosenGenres.map((chosen, index) =>           
        <Badge variant="secondary" className='m-1' key={chosen+index}>{chosen}</Badge>
    )

    const movieCards = moviesByGenre.slice(0).reverse().map((movie, index) => 
        <Card key={movie+index} className="hover-effect shadow rounded my-5 mx-auto" bg='secondary' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={movie.poster} alt={movie.title} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    ({movie.year})
                </Card.Text>
            </Card.Body>
        </Card>
    )
    
    const handleCheck = (e) => {

        let genres = chosenGenres.slice(0); // generates a new array (neww reference) so React understands the state changed references
        let name = e.currentTarget.value;
        let classList = e.currentTarget.classList;

        //look for the clicked element in the chosen genres list and get its index
        let genreIndex = genres.indexOf(name);

        //check if value of the button is already in the list of chosen genres
        //if it is not, push it to the list
        if(genreIndex === -1){
            genres.push(name);   
            classList.remove('btn-outline-secondary');
            classList.add('btn-secondary'); 
        //if it is, take it off the list
        } else {      
            genres.splice(genreIndex, 1);
            classList.remove('active'); 
            classList.remove('btn-secondary'); 
            classList.add('btn-outline-secondary');
        }

        setChosenGenres(genres);

    }

    const handleSubmit = () => {

        let genres = chosenGenres;
        let moviesList = [];
        let error = '';

        genres.forEach(genre => {
            movies.forEach(movie => {

                let genreIndex = movie.genres.indexOf(genre)
                let movieIndex = moviesList.indexOf(movie)
               
                // check that the genre is in the movie genres list  &&
                // check that the movie was not already pushed into the movies list 
                if(genreIndex != -1 && movieIndex == -1){
                    moviesList.push(movie);
                }
            })
        });
       
        setMoviesByGenre(moviesList);

        if (genres.length == 0){ 
            error = 'You need to choose one or more genres.';
        } else if(moviesList.length == 0){
            error = 'No movies found.';
        } else {
            error = '';
        }

        setErrorMessage(error);
    }
  
    useEffect(() => {
        
        //all genres
        axios.get('/genres')
        .then (genresList => {setAllGenres(genresList.data)})
        .catch(error => console.log(error));   
        
    }, []);

    return(
        
        <React.Fragment>

            <div className='main-wrapper'>
                <h2 className='display-3 my-3'>Choose the genres</h2>            

                {/* Genre buttons */}
                <div className="mb-2" style={{ flexWrap: "wrap" }}>
                    {genresButtons}
                </div>   

                {/* Tags */}
                <h4 className='h3 m-2'>Look for:</h4> 
                <div className='m-2'> 
                    {chosenGenresTags}
                </div>

                {/* Button */}
                <Button type='submit' variant="secondary" className="hover-effect shadow m-1 mt-3" onClick={handleSubmit}>Search by Genre</Button> 

                {/* Error message */}
                <p className="font-italic m-2">{errorMessage}</p>
                
                {/* Movie cards */}
                <div className='card-columns'>
                    {movieCards}
                </div>
            </div>
        </React.Fragment> 
        
    );

}

export default MoviesGenre;