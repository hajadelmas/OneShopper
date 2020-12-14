// import React from "react"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// class Restaurants extends React.Component {
//     render() {
//         return (
//             < Layout >
//                 <SEO title="Restaurants" keywords={[`gatsby`, `restaurants`, `react`]} />
//                 <div className="site-restaurants">
//                     <div className="container">
//                         <div className="row">
//                             Page des restaurants
//                         </div>
//                     </div>
//                 </div>
//             </ Layout>
//         )
//     }
// }

// export default Restaurants

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";

class RestaurantsPost extends React.Component {
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
        <ul className="blog-list" onScroll={this.onScrollEvent}>
          {data.data.allContentfulRestaurant.edges.slice(0, NoOfPost).map(items => (
            <li>
              <div className="post-item template-square columned">
                <div className="post-thumbnail">
                  <Img sizes={items.node.featureImage.fluid} />
                  <div className="post-date">
                    <i className="fas fa-calendar-alt"></i>
                    {items.node.publicData}
                  </div>
                </div>
                <div className="post-details">
                  <h2 className="post-title"><Link to={`/${items.node.slug}`}>{items.node.title}</Link></h2>
                  <p>{items.node.description.childMarkdownRemark.excerpt}</p>

                </div>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const Restaurants = data => (

  <Layout>
    <SEO title="Restaurants" keywords={[`gatsby`, `restaurants`, `react`]} />
    <div className="container blog-page">
      <RestaurantsPost data={data}></RestaurantsPost>
    </div>
  </Layout>
)

export default Restaurants

export const query = graphql`
  query RestaurantQuery {
    allContentfulRestaurant {
        edges {
          node {
            id
            title
            slug
            description {
              childMarkdownRemark {
                excerpt(pruneLength: 250)
              }
            }
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



