import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
// import "bootstrap/dist/css/bootstrap.css"

import SEO from "../components/seo"
import logo from "../images/logo_churrasco.png"
import { Container, Row, Col, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import "../css/style.css"


const Header = ({ siteTitle }) => (
  <header className="site-header">
    <SEO>
    </SEO>
    <Container fluid>
        <Row>
            <Navbar bg="white" expand="lg" fixed='top' className="p-1">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
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
                        {/* <Nav.Link href="/">Accueil</Nav.Link> */}
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
                        {/* <NavDropdown title="Restaurants" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                              <Link to="/Click" className='nav-link'>restaurant 1</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <Link to="/Click" className='nav-link'>restaurant 2</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <Link to="/Click" className='nav-link'>restaurant 3</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                              <Link to="/Click" className='nav-link'>restaurants</Link>
                            </NavDropdown.Item>
                        </NavDropdown> */}
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
    </Container>

  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
