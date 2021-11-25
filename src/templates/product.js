import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useCart } from '../lib/CartContext'

const Product = ({ data }) => {
    const { product } = data
    const cart = useCart()
    const image = getImage(product.image[0].localFile)

    return (
        <Layout>
            <section className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <GatsbyImage image={image} />
                    {/* {data.product.image.map(item => {
                    const image = getImage(item.localFile)
                    return (
                        <GatsbyImage image={image} />
                    )
                })} */}
                </div>
                <div className="justify-center px-4 md:w-1/2 rounded-md bg-gray-500">
                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <input type="text" className="bg-gray-200" />
                    <button onClick={() => cart.addToCart(product)} >Adicionar ao carrinho</button>
                </div>
            </section>
        </Layout>
    )
}

export default Product

export const pageQuery = graphql`
query($id: Int!) {
  product: strapiProduct(strapiId: {eq: $id}) {
    title
    image {
      localFile {
        childImageSharp {
          gatsbyImageData (
              width: 500
          )
        }
      }
    }
  }
}
`