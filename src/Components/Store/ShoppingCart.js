import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
    const { shop } = useSelector(state => state)
    return (
        <div>
            this is a shopping cart
        </div>
    )
}

export default ShoppingCart
