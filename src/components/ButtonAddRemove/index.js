import React from 'react'
import { useCart } from '../../lib/CartContext'

const ButtonAddRemove = ({ product }) => {
    const { addToCart, removeFromCart, inCart } = useCart()
    return (
        <div className="flex">
            <div className="grid grid-cols-3 justify-items-center gap-2">
                <button onClick={() => removeFromCart(product)} className="px-2 w-full bg-black rounded-md text-white">-</button>
                <div className="text-lg">{inCart(product)}</div>
                <button onClick={() => addToCart(product)} className="px-2 w-full bg-black rounded-md text-white">+</button>
            </div>
        </div>
    )
}

export default ButtonAddRemove