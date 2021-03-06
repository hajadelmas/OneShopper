import React from 'react'


import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import LatestBlogs from "../components/latestBlog"
import Countdown from "../components/countdown"
import StarRatingComponent from 'react-star-rating-component';
import { graphql } from "gatsby";

import BannerOption from "../components/BannerOption"
import { Col } from 'react-bootstrap'


class IndexPost extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="row product-main">
          <div className='product_main_back'>
            {/* <h3>2015 - Lancement de l'aventure</h3> */}
            <p>L'authentique poulet grillé au goût unique (Sauce Secrète), Venez déguster nos Grillades à la braise (Poulet, Viande, Poisson) dans un cadre chaleureux et familial. Générosité, prix et qualité des viandes sont au menu chez LE CHURRASCO !</p>
            <br></br>
          </div>
          <Link to='/contact-us'>Nous contacter</Link>
          
          {/* {data.data.allContentfulProduct.edges.map(items => (
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id} data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease-out-sine">
              <div className="details_List">
                {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fluid} />}

                <div className="details_inner">

                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={items.node.rating}
                  />
                  <p>{items.node.details.childMarkdownRemark.excerpt}</p>
                  <div className="row">
                    <div className="col-sm-4 align-self-center">
                      <span className="indexPrice">{items.node.price} €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </React.Fragment>
    );
  }
}

const IndexPage = data => (
  <Layout>
    <SEO title="Accueil" keywords={[`churrasco`, `accueil`]} />
    <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />
    <BannerOption />
    
    <div className="container-fluid index_product pt-5">
      <div className="text-center" data-sal="slide-down" data-sal-delay="500" data-sal-easing="ease-out-sine">
        <h2 className="with-underline2">LE Churrasco</h2>
      </div>
      <IndexPost data={data}></IndexPost>
      
    </div>
    {/* <LatestBlogs data={data.data.allContentfulBlogs}/> */}
    {/* <Countdown data={data.data.contentfulDealCountDown} /> */}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 6,sort:{fields:createdAt,order: DESC}){
      edges{
        node{
          id
          name
          slug
          rating
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulDealCountDown {
      title
      featureImage {
        fluid(maxWidth: 1800) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      date(formatString: "D MMMM, YYYY")
    }
    allContentfulBlogs(limit: 3,sort:{fields:createdAt,order: DESC}) {
      edges {
        node {
          id
          title
          slug
          featureImage {
            fluid(maxWidth: 1120) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`