import React from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavComponent = () => {
    return (
        <div>
            <Navbar expand="lg" style={{ backgroundColor: '#0B60B0', color: 'white' }}>
                <Container fluid>
                    <Navbar.Brand href="#"><span className='duke' style={{ color: 'red' }}>Duke's</span> <span style={{ color: 'white' }}>Table</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Collapse id="navbarNav" style={{ justifyContent: 'center' }}>
                        <Nav className="me-auto">
                            <Nav.Link href="#Slider">Home</Nav.Link>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                            <Nav.Link href="#Service">Service</Nav.Link>
                            <Nav.Link href="#Items">Menu</Nav.Link>
                            <NavDropdown title="Pages" id="navbarNavDropdown">
                                <NavDropdown.Item href="#action3">Booking Table</NavDropdown.Item>
                                <NavDropdown.Item href="#Members">TeamMembers</NavDropdown.Item>
                                <NavDropdown.Item href="#Contactus">Contact Us</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success" style={{ color: 'black' }}>Search</Button>
                        </Form>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    );
}

export default NavComponent;
