//imports
//when in the client side, use import syntax
import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import Main from './Main.js'
import {BrowserRouter} from 'react-router-dom'


//the App class extends the component class
function App() {
    //render the main components
    return(
            
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <div className='bg-dark text-white pb-5 p-3 text-center'>
                    <Header />
                    <Main />
                </div>
                <Footer />
            </BrowserRouter>

        </React.Fragment>
    );     
}

export default App;