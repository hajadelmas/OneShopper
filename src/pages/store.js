import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap"


const IndexPage = ({data}) => (

  <Layout>
    <SEO title="La carte" keywords={[`carte`, `churrasco`]} />
    <div className="container-fluid store-page">
      <React.Fragment>
        {/* <h1 className='text-center titlePage'>Découvrez notre carte !</h1>
        <br /> */}

        <Container fluid className='p-0 m-0 store_contain'>
          
          <Row>
            <Col md={12} sm={12} className='p-0'>
              <Img fluid={data.Menu1.childImageSharp.fluid} />
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} className='p-0'>
              <Img fluid={data.Menu2.childImageSharp.fluid} />
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} className='p-0'>
              <Img fluid={data.Menu3.childImageSharp.fluid} />
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12} className='p-0'>
              <Img fluid={data.Menu4.childImageSharp.fluid} />
            </Col>
            <Col md={6} sm={12} className='p-0'>
              <Img fluid={data.Menu5.childImageSharp.fluid} />
            </Col>
          </Row>

          {/* <Row className='carteEnCreation'>
            <h1>La carte est en cours de création.</h1>
          </Row> */}
        </Container>
      </React.Fragment>
    </div>
  </Layout>
)



export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    Menu1: file(relativePath: { eq: "menu1.jpg" }) {
      ...fluidImage
    }
    Menu2: file(relativePath: { eq: "menu2.jpg" }) {
      ...fluidImage
    }
    Menu3: file(relativePath: { eq: "menu3.jpg" }) {
      ...fluidImage
    }
    Menu4: file(relativePath: { eq: "boisson1.jpg" }) {
      ...fluidImage
    }
    Menu5: file(relativePath: { eq: "boisson2.jpg" }) {
      ...fluidImage
    }
  }
`