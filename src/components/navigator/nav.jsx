import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';

function Navigater() {
    const handlefont = (event) => {
        event.preventDefault();

    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary" id='nav-bg'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav" href="admin">Add Train</Nav.Link>
                        <Nav.Link className="nav" href="details">Train schedules</Nav.Link>
                        {/* <Nav.Link className="nav" href="b">booking</Nav.Link> */}
                        <Nav.Link className="nav" href="booked">booking details</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="/"> <button
                type='button'
                className='button logout-button'
              >
                Logout
              </button></Navbar.Brand>

            </Container>
        </Navbar>
    );
}
export default Navigater;