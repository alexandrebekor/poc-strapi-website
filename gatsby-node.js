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
        }
    `)

    data.categories.edges.map(category => {
        createPage({
            path: `/category/${category.node.slug}`,
            component: path.resolve(`src/templates/category.js`),
            context: {
                id: category.node.strapiId
            }
        })
    })
}