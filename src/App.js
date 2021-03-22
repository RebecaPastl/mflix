//imports
//when in the client side, use import syntax
import React from 'react';
import axios from 'axios';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import Button from 'react-bootstrap/Button';

//the App class extends the component class
class App extends React.Component {
 
    //render method is how we create what is seen in the screen
    render() {
        //render the main components
        return <>
            
            <div className='bg-dark text-white p-3 text-center'>
                <Header />
                <Main />
                <Footer />
            </div>

            
        </>;
        
    }    
    
}

export default App;