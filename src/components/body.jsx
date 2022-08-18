import React from 'react';
import './style.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Bodymain = () => {
    return (
        <div className='bodymain'>
            <Container>
                <Row className='mainbanner1'>
                    <Col md='6'>
                        <div className='sidettlecontent'>
                            <span className='top'>100% blended</span><br></br>
                            <span className='bottom'>fruit juice</span>
                            <p>concentrate specifically designed for childcare centers.</p>
                        </div>
                        <Button className='btn1'>Order Now</Button>
                    </Col>
                    <Col md='6'>
                        <img className='sideimage1' src="./sideimage1.png" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bodymain