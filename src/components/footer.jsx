import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";


const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <Row>
              <Col className='mainlogofooter' md='4'>
              <img src='/mainlogo.svg' alt=''></img>
              </Col>
              <Col md='4'>
              <div className='footersocial'>
              <div className='facebookiconfooter'><BsFacebook/></div>
              <div className='facebookiconfooter'><BsInstagram/></div>
              <div className='facebookiconfooter'><BsTwitter/></div>
              <div className='facebookiconfooter'><BsLinkedin/></div>
              </div>
              </Col>
              <Col md='4'>
              <div className='footernumber'><h1>563-386-1999</h1></div>
              </Col>
            </Row>
            <Row className='footerlinks'>
            <Col md='4'>
                <div className='footermainlinks'>
                  <a href='#home'>-Home</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Child Care Juice</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-OrderNow</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Service</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Contact</a>
                </div>
                
              </Col>
              <Col md='4'>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Privacy Policy</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Cookie Policy</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Conditions of Use</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Notice and Take Down Policy</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Website Accessibility Policy</a>
                </div>
                
              </Col>
              
              <Col md='4'>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Privacy Policy</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Cookie Policy</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Conditions of Use</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Notice and Take Down Policy</a>
                </div>
                <div className='footermainlinks'>
                  <a href='#privacypolicy'>-Website Accessibility Policy</a>
                </div>
                
              </Col>
              <Col className='footercopyright' md='12'>
                <h5>© 2022 The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</h5>
              </Col>
              
            </Row>

        </Container>
    
    </div>
  )
}

export default Footer