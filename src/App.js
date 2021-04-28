//imports
//when in the client side, use import syntax
import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import Main from './Main.js'
import {BrowserRouter} from 'react-router-dom'


//the App class extends the component class
class App extends React.Component {
    
    //render method is how we create what is seen in the screen
    render() {
        //render the main components
        return(
            
            <React.Fragment>
                <BrowserRouter>
                    <Navbar />
                    <div className='bg-dark text-white p-3 text-center'>
                        <Header />
                        <Main />
                        <Footer />
                    </div>
                </BrowserRouter>

            </React.Fragment>
        );
        
    }    
    
}

export default App;