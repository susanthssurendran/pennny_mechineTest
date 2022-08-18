import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";



const Testimonial = () => {
    return (
        <div className='testimonialmain'>
            <Container>
                <Row>
                    <Col className='testimonialcontentmain' md='12'>
                        <div className='testbanner'>
                            <div className='testititle'>
                                <h1>What Our Client Say ?</h1>
                            </div>
                            <Col className='testimaincnt' md='12'>
                                <Col className='testiprofileimage' md='2'>
                                    <div className='testiprifileimg'>
                                        
                                    </div>
                                </Col>
                                <Col md='6'>
                                    <div className='testimatter'>
                                        <h4>Susanth S Surendran</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <i className='rating'><BsFillStarFill/>   <BsFillStarFill/>   <BsFillStarFill/>   <BsFillStarFill/>   <FiStar/></i>
                                    </div>
                                </Col>
                                <Col className='testiarrow' md='2'>
                                    <div className='testiprifileimg2'><FiArrowLeft/></div>
                                </Col>
                                <Col md='2'>
                                    <div className='testiprifileimg3'><FiArrowRight/></div>
                                </Col>
                            </Col>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonial