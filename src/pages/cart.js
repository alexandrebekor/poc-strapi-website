import React from 'react'
import { useCart } from '../lib/CartContext'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

const Cart = () => {
    const { totalCart, cart, removeFromCart } = useCart()

    return (
        <Layout>
            <section className="flex flex-col gap-2">
                {
                    Object.keys(cart).map(slug => {
                        const product = cart[slug]
                        const image = getImage(cart[slug].image[0].localFile)
                        return (
                            <article className="flex bg-gray-200 rounded-md py-2">
                                <div className="flex">
                                    <GatsbyImage image={image} className="w-32 h-32" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h2 className="font-bold">{product.title}</h2>
                                    <p>{product.description}</p>
                                    <p>{product.qty}</p>
                                    <button onClick={() => removeFromCart(product)}>-</button>
                                    <button onClick={() => removeFromCart(product, true)}>Deletar</button>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
            <p>{totalCart}</p>
        </Layout>
    )
}

export default Cart