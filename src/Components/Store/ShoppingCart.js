import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cancleShop } from '../../redux/actions'
import CartItem from './CartItem'

const ShoppingCart = () => {
    const { shop } = useSelector(state => state)
    const dispatch = useDispatch()
    let buying = ''
    shop.length === 0 ? buying = 'Please select an item to buy' : buying = 'Thank you for your purchase'
    function buyFunc() { dispatch(cancleShop()); alert(buying); }
    const totalCart = shop.reduce((a, b) => a + (b.counter * b.price), 0)
    return (
        <div>
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
            <div id='shop-total-price'>
                <p>{`Total price : ${totalCart} $`}</p>
                <Button variant='danger' onClick={() => dispatch(cancleShop())} style={{ margin: 10, width: 80 }}>Cancle</Button>
                <Button variant='success' onClick={() => buyFunc()} style={{ margin: 10, width: 80 }}>Buy</Button>
            </div>
        </div>
    )
}

export default ShoppingCart
