import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Alert from '../components/Alert'

const Category = ({ data }) => {
    return (
        <Layout>
            <h2 className="text-2xl font-bold">{data.category.name}</h2>
            {data.category.products.length === 0 &&
                <Alert message="Ainda não temos produtos cadastrados aqui!" />
            }
            <section className="grid grid-cols-5 gap-4">
                {data.category.products.map(product => {
                    const image = getImage(product.image[0].localFile)
                    return (
                        <Link to={`/product/${product.slug}`}>
                            <article className="flex flex-col gap-2">
                                <GatsbyImage image={image} />
                                <h2 className="font-bold">{product.title}</h2>
                                <p>{product.description}</p>
                                <Link to={`/product/${product.slug}`} >
                                    <button>Saiba Mais...</button>
                                </Link>
                            </article>
                        </Link>
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