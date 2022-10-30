import { useState, useEffect, createContext } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [total, setTotal] = useState(0)

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(product => {
                if (product.id === productToAdd.id) {
                    const productUpdated = {...product, amount: productToAdd.amount}
                    return productUpdated
                } else {
                    return product
                }
            })

            setCart(cartUpdated)
        }
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(product => product.id !== id)
        setCart(cartWithoutItem)
    }

    useEffect(() => {
        const totalAmount = getTotalAmount()
        setTotalAmount(totalAmount)
    }, [cart])

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
    }, [cart])

    const getTotalAmount = () => {
        let totalAmount = 0

        cart.forEach(product => {totalAmount += product.amount})

        return totalAmount
    }

    const getProductAmount = (id) => {
        const product = cart.find(product => product.id === id)

        return product?.amount
    }

    const getTotal = () => {
        let counter = 0

        cart.forEach(product => {
            counter += product.amount * product.price
        })

        return counter
    }

    const clearCart = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getProductAmount, getTotalAmount, clearCart, totalAmount, total}}>
            {children}
        </CartContext.Provider>
    )
}