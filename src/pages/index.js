import React from 'react'
import { CartContext } from '../lib/CartContext'

const Index = () => {
    return (
        <CartContext>
            <h1>Hello World</h1>
        </CartContext>
    )
}

export default Index