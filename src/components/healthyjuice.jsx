import React from 'react';
import './style.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

const HealthyJuice = () => {
    return (
        <div className='healthymain'>
            <Container>
                <Row className='healthyrow'>
                    <Col md='6'>
                        <div className='sidettlecontenthealthy'>
                            <span className='bottom'>Healthy Juice</span><br></br>
                            <span className='top'>Concentrates for all kids to joy</span>
                            <p>We provide a variety of flavors that all kids can enjoy! All the juice concentrates that we sell are compliant with the USDA and FDA guidelines. You don't need to refrigerate the concentrates before or after opening them.</p>
                        </div>
                        <Button className='btn1'>Learn More</Button>
                    </Col>
                    <Col md='6'>
                        <img className='sideimghealthy' src="./healthyjuice.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HealthyJuice