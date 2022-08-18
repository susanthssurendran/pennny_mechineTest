import React from 'react'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';



const Header = () => {
    return (
        <div className='title'>
            <Navbar className='mainheader' expand="lg">
                <Container className='header'>
                    <Navbar.Brand className='logomain' href="#">
                        <img className='logo-main' src='/mainlogo.svg'></img>
                    </Navbar.Brand>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#clild">Child Care Juice</Nav.Link>
                            <Nav.Link href="#order">OrderNow</Nav.Link>
                        </Nav>
                        <div className='btn-header'>
                            <div className='title1'>FREE NATIONWIDE SHIPPING</div>
                            <div className='title2'>563-386-1999</div>
                            <div className='title3'>LEADER IN CHILDCARE JUICE!</div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header