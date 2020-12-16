import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../images/logo_churrasco.png'

class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Contact Us" keywords={[`gatsby`, `Contact`, `react`]} />
                <div className="Contact-us">
                    <Container >
                        <Row>
                            <Col>
                                {/* To make form work, use your own formspree credentials in action="" */}
                                <form action="https://formspree.io/f/xbjpzoyy" method="POST" name="contact">
                                    <div>
                                        <label>Nom et Prénom
                                        <input type="text" name="name" required /></label>
                                    </div>
                                    <div>
                                        <label>Votre mail: 
                                        <input type="email" name="email" required /></label>
                                    </div>
                                    <div>
                                        <label>Message: 
                                        <textarea name="message" required></textarea></label>
                                    </div>
                                    <div>
                                        <button type="submit" required>Send</button>
                                    </div>
                                </form>
                            </Col>
                            {/* <Col className=''>
                                <img src={Logo} alt='logo' />
                            </Col> */}
                        </Row>
                        
                    </Container>
                </div>
            </Layout>
        )
    }
}

export default Contact

