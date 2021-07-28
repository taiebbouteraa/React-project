import React from 'react'
import { Table } from 'react-bootstrap'
// import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const ShoppingCart = () => {
    const { shop } = useSelector(state => state)
    return (
        <div>
            <div>price $</div>
            <Table className='items-head'>
                <thead>
                    <tr>
                        <th style={{ width: 221, textAlign: 'center' }}>Image</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Brand</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Item</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Item price</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Item count</th>
                        <th style={{ width: 200, textAlign: 'center' }}>Item sum</th>
                        <th style={{ width: 200, textAlign: 'center' }}></th>
                    </tr>
                </thead>
            </Table>
            <div className='shop-phones'>
                {shop.map((el) => (<CartItem item={el} key={el.id} />))}
            </div>
        </div>
    )
}

export default ShoppingCart
