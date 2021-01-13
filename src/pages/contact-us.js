import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

// import Logo from '../images/logo_churrasco.png'

class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Contact Us" keywords={[`gatsby`, `Contact`, `react`]} />
                <div className="Contact-us">
                    <Container fluid>
                        <Row>
                            <Col>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d170350.3400863103!2d2.648654690543238!3d48.154124761070456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sle%20churrasco!5e0!3m2!1sfr!2sfr!4v1610545736346!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style={{ border: '0', maxWidth:'100%' }} allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
                            </Col>
                            <Col className='contact_details_col' md={6} xs={12}>
                                {/* <Row>
                                    <Col md={3}><span className='w-100 d-flex justify-content-end cdc_t_number'>3</span></Col>
                                    <Col>
                                        <Row><span className='cdc_t_adresse'>ADRESSES</span></Row>
                                        <Row><span className='cdc_t_plus'>ET BIENTOT PLUS</span></Row>
                                    </Col>
                                </Row> */}
                                <Row className='cdc_row d-flex justify-content-end'>
                                    <Col>
                                        <div className='contact_details'>
                                            <h2>LE CHURRASCO</h2>
                                            <h1>MONTARGIS</h1>
                                            <div>
                                                <FontAwesomeIcon icon={faPhone} /><span>02 38 99 01 01</span>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faMapMarker} /><span>39 Rue Renée de France</span>
                                                <p>45200 Montargis</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='contact_details'>
                                            <h2>LE CHURRASCO</h2>
                                            <h1>NEMOURS</h1>
                                            <div>
                                                <FontAwesomeIcon icon={faPhone} /><span>01 64 78 01 01</span>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faMapMarker} /><span>1 rue Joseph Maris Jacquard</span>
                                                <p>77140 Nemours</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='contact_details'>
                                            <h2>LE CHURRASCO</h2>
                                            <h1>PARIS XX</h1>
                                            <div>
                                                <FontAwesomeIcon icon={faPhone} /><span>01 43 15 01 01</span>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faMapMarker} /><span>19 Rue Ménilmontant</span>
                                                <p>75020 Paris</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                

                                

                                
                            </Col>   
                            

                            

                            {/* <form action="https://formspree.io/f/xbjpzoyy" method="POST" name="contact">
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
                            </form> */}
                        </Row>
                        
                    </Container>
                </div>
            </Layout>
        )
    }
}

export default Contact

