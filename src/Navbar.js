//imports
//when in the client side, use import syntax
import React from 'react';
import { NavLink } from 'react-router-dom'
import { Nav, Navbar as Bar } from 'react-bootstrap'
import { BsFilm } from 'react-icons/bs'



class Navbar extends React.Component {

    render() {
        
        //render header
        return (

            <>


                <Bar collapseOnSelect className="bg-secondary" variant='dark' expand="lg" fixed='top' >
                    <Bar.Brand>
                        <NavLink className='text-white mr-3 text-decoration-none' to='/all'>
                            <BsFilm /> MFLIX
                        </NavLink>
                    </Bar.Brand>
                    <Bar.Toggle aria-controls="responsive-navbar-nav" />
                    <Bar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className='btn btn-secondary mr-3 p-2 text-decoration-none' to='/all'>
                                All Movies
                            </NavLink>
                            <NavLink className='btn btn-secondary mr-3 p-2 text-decoration-none' to='/genre'>
                                Movies by Genre
                            </NavLink>
                        </Nav>
                    </Bar.Collapse>
                    </Bar>






            </>

        );
    }

}

export default Navbar;