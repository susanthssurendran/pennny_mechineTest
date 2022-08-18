import React from 'react';
import './style.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Raindow = () => {
    return (
        <div className='Raindow'>
            <Container>
                <Row className='mainbanner1'>
                    
                    <Col md='6'>
                        <img className='sideimage1' src="./rainbow.png" alt=""/>
                    </Col>
                    <Col md='6'>
                        <div className='sidettlecontent'>
                            <span className='bottom'>Rainbows</span><br></br>
                            <span className='top'>of Exciting flovors</span>
                            <p>15 flavors available including 7 color free flavors. Each case contains 6 - ½ gallon bottles of your choice. We’ve designed them especially for childcare, daycare, preschool, basp and extended daycare. Get in touch with us today!</p>
                        </div>
                        <Button className='btn1'>Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Raindow