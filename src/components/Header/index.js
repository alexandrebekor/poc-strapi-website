import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const QUERY = graphql`
    query {
        categories: allStrapiCategory {
            edges {
                node {
                    name
                    slug
                }
            }
        }
    }
`

const Header = () => {
    const { categories } = useStaticQuery(QUERY)
    return (
        <header>
            <h1>Agência Bekor</h1>
            {categories.edges.map(category => {
                return (
                    <Link to={`/category/${category.node.slug}`}>
                        <li>{category.node.name}</li>
                    </Link>
                )
            })}
        </header>
    )
}

export default Header