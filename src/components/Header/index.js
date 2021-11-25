import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Cart from '../Cart'

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
        <header className="flex flex-col">
            <section className="flex py-4 items-center justify-between">
                <h1 className="font-bold">Agência Bekor</h1>
                <Cart />
            </section>
            <section className="flex flex-wrap gap-2 py-2">
                {categories.edges.map(category => {
                    return (
                        <div>
                            <Link to={`/category/${category.node.slug}`} className="bg-gray-600 px-4 rounded-sm text-white">
                                {category.node.name}
                            </Link>
                        </div>
                    )
                })}
            </section>
        </header>
    )
}

export default Header