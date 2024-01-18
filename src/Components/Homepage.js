import React from "react";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Duketable from '../Components/duke.jpg';
import food from '../Components/food.avif';
import food1 from '../Components/food1.avif';
import food2 from '../Components/food2.avif';
import food3 from '../Components/food4.avif';
import food4 from '../Components/food3.avif';

const Homepage = () => {

    const buttonStyle = {
        color: 'black',
        backgroundColor: '#b288ff',
        border: 'none',
    };

    return (
        <div>
            <Navbar style={{ backgroundColor: '#6410ff' }} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Duketable}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            style={{ borderRadius: '20px' }}
                            alt="Logo"
                        />
                        <div className="brand-text">
                            <span className="font-weight-bold">
                                <span className="name" style={{ color: 'red' }}>THALA</span>
                                <span className="name" style={{ transition: 'color 0.3s', color: 'white' }}>PATHY</span>
                            </span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Button href="#home" className="mr-2" style={buttonStyle}>Home</Button>
                            <Button href="#about" className="mr-2" style={buttonStyle}>About Us</Button>
                            <Button href="#Movies" className="mr-2" style={buttonStyle}>Movies</Button>
                            <Button href="#contact" className="mr-2" style={buttonStyle}>Contact Us</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        </div>
    );
}

export default Homepage;
