//imports
//when in the client side, use import syntax
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

class MoviesGenre extends React.Component {

    //store a state that will be used by more than one child component 
    constructor(props) {
       
        super(props);
        
        this.state = {
                        
            //stores all genres to pass as props to the children
            genres:[ ],
            checked:false,
            chosenGenres:[]
         
        }

        this.handleCheck = this.handleCheck.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
                 
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

    handleCheck(e){

        e.preventDefault();
 
        console.log('ji')

        //get the list of genres already chosen
        let chosenGenres = this.state.chosenGenres

        //get the element being clicked
        let target = e.currentTarget;

        //get the value of the element being clicked
        let value = target.value;

        //look for the clicked element in the chosen genres list and get its index
        let index = chosenGenres.indexOf(value)

        console.log(target.value)

        console.log(chosenGenres)

        //check if value of the button is already in the list of chosen genres
        //if it is not, push it to the list
        if(index === -1){
            chosenGenres.push(value);
        //if it is, take it off the list
        } else {
            chosenGenres.splice(index, 1)
        }

        //update the chosen genres list
        this.setState({chosenGenres: chosenGenres});

        console.log(chosenGenres)
        console.log(this.state.chosenGenres)


    }

    handleSubmit(e){

        e.preventDefault();

        console.log('click')
    }


    render() {

        //render header
        return(
            
            <React.Fragment>
        
                <div className='main-wrapper'>            
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label><h1 className='display-3 mt-3'>Choose the genres</h1></Form.Label>       
                        <div className='btn-group-toggle my-2' data-toggle='buttons'>
                            {this.state.genres.slice(0).map((genre, index) => 

                                <>                               
                                
                                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off" key={index} onChange={this.handleCheck}>{genre}</button>     */}

                                    {/* <ToggleButton
                                        key={index}
                                        className='m-1'
                                        type="checkbox"
                                        variant="outline-secondary"
                                        checked='checked'
                                        value={genre}
                                        onChange={this.handleCheck}
                                    >
                                    {genre}
                                    </ToggleButton> */}
                                    
                                    
                                    <label className='btn btn-outline-secondary m-1' key={index}>
                                        <input type="checkbox" name={genre} value={genre} onChange={this.handleCheck} />{genre}
                                    </label>

                                </>

                            )}
                               
                        </div>
                        <Form.Label>Look for:</Form.Label> 
                        <div>
                            {this.state.chosenGenres.slice(0).map((chosen, index) => 

                                <>        
                                    
                                    <Badge variant="secondary" className='m-1' key={index}>{chosen}</Badge>

                                </>

                            )}
                        </div>


                        <Button type='submit' variant="secondary" className="hover-effect shadow m-1 mt-3" >Search by Genre</Button> 
                    </Form>
                        <div>Result 2</div>




                



                </div>
            </React.Fragment> 
            
        );
    }

}

export default MoviesGenre;