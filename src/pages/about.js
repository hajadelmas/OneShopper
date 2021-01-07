import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
// import Img from "gatsby-image";
import ProfilImg from '../images/profil_churrasco.jpg'



class About extends React.Component {
    render() {
        return ( 
            <Layout>
                <SEO title="About" keywords={[`gatsby`, `About`, `react`]} />
                {/* <div className = "site-About">
                    salut    
                </div> */}
                <Container fluid className='site-about'>
                    <Row className='d-flex justify-content-center'>
                        <div className='about_pres'>
                            <h2>Le churrasco, une histoire de longue date.</h2>
                            <p>Voici la presentation du restaurant Le Churrasco</p>
                        </div>
                    </Row>
                    <Row className='mt-5'>
                        <Col className='d-flex justify-content-center' xl={6} md={12}>
                            <img src={ProfilImg} className='about_img' />
                        </Col>
                        <Col xl={6} md={12}>
                            <p className='about_para'>Quis elit nulla aute eu ut sit in. Id laborum veniam qui consectetur ex id aliqua non ipsum reprehenderit deserunt reprehenderit do. Eu quis culpa minim eiusmod veniam. Eu amet amet tempor et reprehenderit duis officia. Culpa est dolore adipisicing cillum id nulla.</p>
                            <br />
                            <p className='about_para'>Quis elit nulla aute eu ut sit in. Id laborum veniam qui consectetur ex id aliqua non ipsum reprehenderit deserunt reprehenderit do. Eu quis culpa minim eiusmod veniam. Eu amet amet tempor et reprehenderit duis officia. Culpa est dolore adipisicing cillum id nulla.</p>
                        </Col>
                        
                    </Row>
                </Container>
            </Layout>
        )
    }
}
export default About
