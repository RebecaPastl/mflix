//imports
//when in the client side, use import syntax
import React from 'react';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {

    render() {
        
        //render header
        return <>
            
            <header>
                <Card className="bg-dark text-white">
                    <Card.Img src="./images/banner.png" alt="MFLIX Banner" />
                    <Card.ImgOverlay>
                        <Card.Title><h2 className='text-dark opacity-4'>MFLIX</h2></Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <small className='text-right'>Photo by Skitterphoto from <a className='text-muted' href="https://www.pexels.com/photo/abstract-analog-art-camera-390089/">Pexels</a></small>
            </header>
            
        </>;
    }

}

export default Header;