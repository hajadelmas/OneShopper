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
    <Container>
        <Row>
            <Navbar bg="white" expand="lg" fixed="top" className="p-1">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Col md={2} xs={6}>
                  <Navbar.Brand href="/">
                  <img
                      alt=""
                      src={logo}
                      width="60"
                      height="40"
                      className="m-0"
                  />
                  </Navbar.Brand>
                </Col>
                <Col md={10} xs={6} className='navbar_mobile'>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto navTextStyle w-100">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/blogs">Blog</Nav.Link>
                        <Nav.Link href="/store">Carte</Nav.Link>
                        <Nav.Link href="/Click">Click & Collect</Nav.Link>
                        <NavDropdown title="Restaurants" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">restaurant 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">restaurant 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">restaurant 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">restaurants</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about">A propos</Nav.Link>
                        <Nav.Link href="/contact-us">Contact</Nav.Link>
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
