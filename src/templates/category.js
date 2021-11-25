import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Alert from '../components/Alert'
import { useCart } from '../lib/CartContext'

const Category = ({ data }) => {
    const cart = useCart()

    return (
        <Layout>
            <h2 className="text-2xl font-bold">{data.category.name}</h2>
            {data.category.products.length === 0 &&
                <Alert message="Ainda não temos produtos cadastrados aqui!" />
            }
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {data.category.products.map(product => {
                    const image = getImage(product.image[0].localFile)
                    return (
                        <article key={product.slug} className="flex flex-col gap-2">
                            <Link to={`/product/${product.slug}`}>
                                <GatsbyImage image={image} />
                            </Link>
                            <h2 className="font-bold">{product.title}</h2>
                            <p>{product.description}</p>
                            <Link to={`/product/${product.slug}`} >
                                Saiba Mais...
                            </Link>
                            <button onClick={() => cart.addToCart(product)}>Adicionar no Carrinho</button>
                        </article>
                    )
                })}
            </section>
        </Layout>
    )
}

export default Category

export const pageQuery = graphql`
query($id: Int!) {
  category: strapiCategory(strapiId: {eq: $id}) {
    name
    products {
      title
      slug
      description
      image {
        localFile {
          childImageSharp {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
}
`