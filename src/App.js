//imports
import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import Main from './Main.js'
import {BrowserRouter} from 'react-router-dom'

function App() {
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