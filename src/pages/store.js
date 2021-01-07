import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StarRatingComponent from 'react-star-rating-component';
import { graphql } from "gatsby";

import { Accordion, Card } from "react-bootstrap"

class IndexPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NoOfPost: 6
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var lastScrollY = window.pageYOffset + 1100;

    if (lastScrollY > window.outerHeight) {
      var count = this.state.NoOfPost + 3;
      this.setState({
        NoOfPost: count
      });
    }
  };

  render() {

    const { data } = this.props;
    const { NoOfPost } = this.state;

    return (
      <React.Fragment>
        <h1 className='text-center titlePage'>Découvrez notre carte !</h1>
        <br />

        {/* <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} className='carteStyle' eventKey="0">
              Les plats
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="row product-main" onScroll={this.onScrollEvent}>
                  {data.data.platTags.edges.slice(0, NoOfPost).map(items => (
                    <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
                      <div className="details_List">
                        {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fixed} />}

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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} className='carteStyle' eventKey="1">
              Les desserts
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="row product-main" onScroll={this.onScrollEvent}>
                    {data.data.dessertTags.edges.slice(0, NoOfPost).map(items => (
                      <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
                        <div className="details_List">
                          {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fixed} />}

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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}


      </React.Fragment>
    );
  }
}

const IndexPage = data => (

  <Layout>
    <SEO title="Store" keywords={[`gatsby`, `store`, `react`]} />
    <div className="container store-page">
      <IndexPost data={data}></IndexPost>
    </div>
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query StoreQuery {
//     allContentfulProduct(filter:{tags:{eq:"plat"}}) {
//       edges{
//         node{
//           id
//           name
//           slug
//           rating
//           image {
//             fixed(width: 1000, height: 500) {
//               width
//               height
//               src
//               srcSet
//             }
//           }
//           price
//           details {
//             childMarkdownRemark {
//               excerpt(pruneLength: 140)
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query StoreQuery {
    dessertTags: allContentfulProduct(filter:{tags:{eq:"dessert"}}) {
      edges{
        node{
          id
          name
          slug
          rating
          image {
            fixed(width: 1000, height: 500) {
              width
              height
              src
              srcSet
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
    platTags: allContentfulProduct(filter:{tags:{eq:"plat"}}) {
      edges{
        node{
          id
          name
          slug
          rating
          image {
            fixed(width: 1000, height: 500) {
              width
              height
              src
              srcSet
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
  }
`