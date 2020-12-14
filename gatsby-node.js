var path = require("path")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const StoreTemplate = path.resolve("src/templates/details.js")
    const BlogTemplate = path.resolve("src/templates/blogDetails.js")
    const RestaurantTemplate = path.resolve("src/templates/restaurantDetails.js")
    resolve(
      graphql(`
        {
          allContentfulProduct{
            edges{
              node{
                id
                slug
              }
            }
          }
          allContentfulBlogs {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulRestaurant {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProduct.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: StoreTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        });
        result.data.allContentfulBlogs.edges.forEach(data => {
          createPage({
            path: data.node.slug,
            component: BlogTemplate,
            context: {
              slug: data.node.slug
            }
          });
        });
        result.data.allContentfulRestaurant.edges.forEach(data => {
          createPage({
            path: data.node.slug,
            component: RestaurantTemplate,
            context: {
              slug: data.node.slug
            }
          });
        });
        return
      })
    )
  })
}
