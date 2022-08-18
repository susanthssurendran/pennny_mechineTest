import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css';

const Ourflovors = () => {
    return (
        <div className='ourflovors'>
            <Container className='flourctr'>
                <Row>
                    <Col className='mainrowourflavors' md='12'>
                        <div className='flavorstitle'>
                            <span className='textoneourfla1'> Our</span>
                            <span className='textoneourfla'> Flovors</span>
                        </div>
                    </Col>
                    <Col className='cardforadd' md='3'>
                        <div className='flour1'>
                            <div className='imageflour'><img src="./FramePineapple.png" alt=""/></div>
                            <span className='titleflourcard'> Pineapple Juice</span>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder </p>
                            <div className='pricediv'>
                                <div className='price1'>$5.99</div>
                                <div className='price2'>$5.99</div>
                            </div>
                            <div className='cardbtn'>
                                <Button className='btncard'>Add To Cart</Button>
                            </div>

                        </div>
                    </Col>
                    <Col className='cardforadd' md='3'>
                        <div className='flour1'>
                            <div className='imageflour'><img src="./FrameMango.png" alt=""/></div>
                            <span className='titleflourcard'> Mango Juice</span>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder </p>
                            <div className='pricediv'>
                                <div className='price1'>$5.99</div>
                                <div className='price2'>$5.99</div>
                            </div>
                            <div className='cardbtn'>
                                <Button className='btncard'>Add To Cart</Button>
                            </div>

                        </div>
                    </Col>
                    <Col className='cardforadd' md='3'>
                        <div className='flour1'>
                            <div className='imageflour'><img src="./FrameOrange.png" alt=""/></div>
                            <span className='titleflourcard'> Orange Juice</span>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder </p>
                            <div className='pricediv'>
                                <div className='price1'>$5.99</div>
                                <div className='price2'>$5.99</div>
                            </div>
                            <div className='cardbtn'>
                                <Button className='btncard'>Add To Cart</Button>
                            </div>

                        </div>
                    </Col>
                    <Col className='cardforadd' md='3'>
                        <div className='flour1'>
                            <div className='imageflour'><img src="./FrameApple.png " alt=""/></div>
                            <span className='titleflourcard'> Apple Juice</span>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder </p>
                            <div className='pricediv'>
                                <div className='price1'>$5.99</div>
                                <div className='price2'>$5.99</div>
                            </div>
                            <div className='cardbtn'>
                                <Button className='btncard'>Add To Cart</Button>
                            </div>

                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Ourflovors