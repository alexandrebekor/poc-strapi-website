import React, { createContext, useContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const localCart = localStorage.getItem('cart')
        if (localCart) {
            setCart(JSON.parse(localCart))
        }
    }, [])

    const addToCart = product => {
        setCart(oldCart => {
            const cart = [...oldCart, product]
            localStorage.setItem('cart', JSON.stringify(cart))
            return cart
        })
    }


    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}