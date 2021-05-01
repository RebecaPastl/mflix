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


                <Bar collapseOnSelect className="shadow bg-secondary py-0" variant='dark' expand="lg" fixed='top' >
                    <Bar.Brand>
                        <NavLink className='text-white mr-3 text-decoration-none' to='/'>
                            <BsFilm /> <span className='h1 small'>MFLIX</span>
                        </NavLink>
                    </Bar.Brand>
                    <Bar.Toggle className='my-2' aria-controls="responsive-navbar-nav" />
                    <Bar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className='hover-effect btn btn-secondary mr-3 mt-2 p-2 h2 text-white text-decoration-none' to='/all'>
                                ALL MOVIES
                            </NavLink>
                            <NavLink className='hover-effect btn btn-secondary mr-3 mt-2 p-2 h2 text-white text-decoration-none' to='/genre'>
                                MOVIES BY GENRE
                            </NavLink>
                        </Nav>
                    </Bar.Collapse>
                </Bar>






            </>

        );
    }

}

export default Navbar;