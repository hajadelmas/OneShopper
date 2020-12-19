import { Link } from "gatsby"
import React, { useState } from 'react';
// import PropTypes from "prop-types"
// import React from "react"
import "../css/font-awesome.css"
// import "bootstrap/dist/css/bootstrap.css"
import { isMobile } from "react-device-detect";
import MediaQuery from 'react-responsive'


import SEO from "../components/seo"
import logo from "../images/logo_churrasco.png"
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import "../css/style.css"


function Header () {

  const [isShown, setIsShown] = useState(false);

  return (
    <header className="site-header">
    <SEO>
    </SEO>
    <Container fluid>

      <MediaQuery maxDeviceWidth={1025}>
        <Row>
            <Navbar bg="white" expand="lg" fixed='top' className="p-1">
                <Col md={2} xs={6}>
                  <Navbar.Brand href="/">
                  <img
                      alt=""
                      src={logo}
                      width="70"
                      height="50"
                      className="m-0"
                  />
                  </Navbar.Brand>
                </Col>
                <Col md={10} xs={6} className='navbar_mobile'>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto navTextStyle w-100 d-flex justify-content-around">
                        <Nav.Item>
                          <Link to="/" className='nav-link'>Accueil</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to="/blogs" className='nav-link'>Blog</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to="/store" className='nav-link'>Carte</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to="/Click" className='nav-link'>Click & Collect</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to="/restaurants" className='nav-link'>Restaurants</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to="/about" className='nav-link'>A propos</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to="/contact-us" className='nav-link'>Contact</Link>
                        </Nav.Item>
              
                      </Nav>
                  </Navbar.Collapse>
                </Col>
            </Navbar>
                
                
        </Row>
      </MediaQuery>
      
        

      <MediaQuery minDeviceWidth={992}>
        <Row>
          <Col md={12} xs={12}>
              <Navbar.Brand href="/" className='d-flex justify-content-center'>
              <img
                  alt=""
                  src={logo}
                  width="100"
                  height="80"
                  className="m-2"
                  onMouseEnter={isMobile ? () => (false) : () => setIsShown(true)}
              />
              </Navbar.Brand>
          </Col>
        </Row>
        
        {isShown && (
          <Row className='row_navbar_style'>
            <Col md={12} xs={6} className='navbar_mobile'>
              <Navbar expand='lg' className="navbar_style">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navTextStyle w-100 d-flex justify-content-center" style={{transition: '0.6s' }}>
                      <Nav.Item>
                        <Link to="/" className='nav-link'>Accueil</Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link to="/blogs" className='nav-link'>Blog</Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link to="/store" className='nav-link'>Carte</Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link to="/Click" className='nav-link'>Click & Collect</Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link to="/restaurants" className='nav-link'>Restaurants</Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link to="/about" className='nav-link'>A propos</Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Link to="/contact-us" className='nav-link'>Contact</Link>
                      </Nav.Item>
            
                    </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        )}
      </MediaQuery>
        

        
    </Container>

  </header >
  )


  
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
