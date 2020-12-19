import React from "react"
import Img from "gatsby-image"
// import { DiscussionEmbed } from "disqus-react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";

// const disqusShortname = "shopper";

const BlogDetails = data => (
    < Layout >
        <SEO title={data.data.contentfulRestaurant.title} keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]} />
        <div className="blogs-page">
            <div className="post-thumbnail">
                <Img sizes={data.data.contentfulRestaurant.featureImage.fluid} />
            </div>
            <div className="container">
                <div className="post-details">
                    <h2 className="title">{data.data.contentfulRestaurant.title}</h2>
                    {/* <div className="post-date">
                        <i className="fas fa-calendar-alt"></i>
                        {data.data.contentfulBlogs.publicData}
                    </div> */}
                    {/* <div className="author">
                        <Img sizes={data.data.contentfulBlogs.author.photo.fixed} />
                        <strong className="name">{data.data.contentfulBlogs.author.name}</strong>
                    </div> */}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.data.contentfulRestaurant.description.childMarkdownRemark.html
                        }}
                    />

                </div>
                {/* <DiscussionEmbed
                    shortname={disqusShortname}
                    config={{
                        identifier: data.data.contentfulBlogs.id,
                        title: data.data.contentfulBlogs.title
                    }}
                /> */}
            </div>
        </div>
    </Layout >
)

export default BlogDetails

export const query = graphql`
  query RestaurantDetailsQuery($slug: String!) {
        contentfulRestaurant(slug: {eq: $slug }) {
            id
            title
            slug
            description {
                childMarkdownRemark {
                    html
                    excerpt(pruneLength: 250)
                }
            }
            featureImage {
                fluid {
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
`
