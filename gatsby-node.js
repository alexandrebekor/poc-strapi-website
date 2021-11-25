const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const { data } = await graphql(`
        query {
            categories: allStrapiCategory {
                edges {
                    node {
                        strapiId,
                        slug
                    }
                }
            }
            products: allStrapiProduct {
                edges {
                    node {
                        strapiId,
                        slug
                    }
                }
            }
        }
    `)

    data.categories.edges.forEach(category => {
        createPage({
            path: `/category/${category.node.slug}`,
            component: path.resolve(`src/templates/category.js`),
            context: {
                id: category.node.strapiId
            }
        })
    })

    data.products.edges.forEach(product => {
        createPage({
            path: `/product/${product.node.slug}`,
            component: path.resolve(`src/templates/product.js`),
            context: {
                id: product.node.strapiId
            }
        })
    })
}