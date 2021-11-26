import React, { createContext, useContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({})

    useEffect(() => {
        const localCart = localStorage.getItem('cart')
        if (localCart) {
            setCart(JSON.parse(localCart))
        }
    }, [])

    const addToCart = product => {
        setCart(oldCart => {
            let qty = 1

            if (oldCart[product.slug]) {
                qty = oldCart[product.slug].qty + 1
            }

            product.qty = qty
            const cart = {
                ...oldCart,
                [product.slug]: product
            }

            localStorage.setItem('cart', JSON.stringify(cart))
            return cart
        })
    }

    const removeFromCart = (product, all) => {
        setCart(oldCart => {
            if (!all && oldCart[product.slug].qty > 1) {
                oldCart[product.slug].qty -= 1
            } else {
                delete oldCart[product.slug]
            }

            const cart = {
                ...oldCart
            }

            localStorage.setItem('cart', JSON.stringify(cart))
            return cart
        })
    }

    const totalCart = Object.keys(cart)
        .map(slug => cart[slug].qty)
        .reduce((prev, element) => prev + element, 0)

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}