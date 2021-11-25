module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `http://localhost:1337`,
                queryLimit: 1000,
                collectionTypes: [`category`, `product`]
            }
        }
    ]
}