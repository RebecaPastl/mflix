//imports
//when in the client side, use import syntax
import React from 'react';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {

    render() {
        
        //render header
        return <>
            
            <header className='mt-5'>
                <Card className="bg-dark text-white ">
                    <Card.Img src="./images/banner.png" alt="MFLIX Banner" />
                    <Card.ImgOverlay>
                        <Card.Title>
                            <h1 className='header-h1 text-dark opacity-4'>MFLIX</h1>
                        </Card.Title>
                        </Card.ImgOverlay>
                        <Card.ImgOverlay className='d-flex flex-column justify-content-end'>
                        <Card.Text>
                            <p className='artist mb-0 small text-right'>Photo by Skitterphoto from <a className='text-muted' href="https://www.pexels.com/photo/abstract-analog-art-camera-390089/">Pexels</a></p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </header>
            
        </>;
    }

}

export default Header;