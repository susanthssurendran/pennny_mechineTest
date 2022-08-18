import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';


const Productmain = () => {
    return (
        <div className='productmain'>
            <Container>
                <Row>
                    <Col className='maintitleproductcol' md='12'>
                        <div className='mainpclass'>
                            <span className='maintitleproductclr'>
                                Penny Juice Products Comply</span>
                            <span className='maintitleproductclr2'><br></br>
                                With All Requirements </span><span className='maintitleproductclr3'>
                                for CACFP,<br></br>
                                Subsidy, and Nutrition Set Forth<br></br>
                                by the FDA
                            </span>

                        </div>
                    </Col>
                    <Col className='productcol' md='12'>
                        <div className='productimagedetails'>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Productmain