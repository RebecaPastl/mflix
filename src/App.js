//imports
//when in the client side, use import syntax
import React from 'react';
import axios from 'axios';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'

//the App class extends the component class
class App extends React.Component {
    
    //store a state that will be used by more than one child component 
    constructor(props) {
       
        super(props);
    
        this.state = {
                    
            //stores all movies to pass as props to the children
            genres:[],
     
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

    //render method is how we create what is seen in the screen
    render() {
        //render the main components
        return <>
            
            <div className='bg-dark text-white p-3 text-center'>
                <Header />
                <Main genresList={this.state.genres}/>
                <Footer />
            </div>

            
        </>;
        
    }    
    
}

export default App;