// import React from "react"
import React, { useState, useEffect } from 'react'
// import LoadingScreen from '../components/loading'
// import IndexMini from './index_mini'

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


class IndexPost extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges.map(items => (
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
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const IndexPage = data => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `oneshopper`, `react`, `Ecommerce`]} />
    <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />
    <BannerOption />
    
    <div className="container-fluid index_product pt-5">
      <div className="text-center" data-sal="slide-down" data-sal-delay="500" data-sal-easing="ease-out-sine"><h2 className="with-underline2">Nos plats au top</h2></div>
      <IndexPost data={data}></IndexPost>
    </div>
    <LatestBlogs data={data.data.allContentfulBlogs}/>
    <Countdown data={data.data.contentfulDealCountDown} />
  </Layout>
)

// function IndexPageGeneral(data) {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 3000)
//   }, [])

//   return (
//     <>
//     {loading === false ? (
//         <IndexMini />
//       ) : (
//         <LoadingScreen />
//       )}
//       </>
//   );
// }

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