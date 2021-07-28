import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { itemPlus, removeItem } from '../../redux/actions'


const CartItem = ({ item }) => {
    const { shop } = useSelector(state => state)
    // const { counter } = useSelector(state => state)
    const dispatch = useDispatch()
    // const [count, setCount] = useState(1)
    // const inc = () => setCount(count + 1)
    // const dec = () => count === 1 ? setCount(1) : setCount(count - 1)
    // const itemTotal = count * item.price
    const itemTotal = item.counter * item.price
    console.log(itemTotal)
    return (
        <div className='shop-items'>
            <Table striped bordered hover size="sm">
                <tbody >
                    <tr>
                        <td style={{ width: 200 }}><img src={item.phoneImage} alt={item.name} /> </td>
                        <td style={{ width: 200 }}>{item.brand}</td>
                        <td style={{ width: 200 }}>{item.name}</td>
                        <td style={{ width: 200 }}>{item.price} $</td>
                        <td style={{ width: 200 }}>
                            <Button  >-</Button>
                            {/* <Button onClick={() => dec()}>-</Button> */}
                            <div>{item.counter}</div>
                            {/* <div>{count}</div> */}
                            <Button onClick={() => dispatch(itemPlus())}>+</Button>
                            {/* <Button onClick={() => inc()}>+</Button> */}
                        </td>
                        {/* <td style={{ width: 200 }}>{item.price * counter} $</td> */}
                        <td style={{ width: 200 }}>{itemTotal} $</td>
                        <td style={{ width: 200 }}><Button variant="danger" onClick={() => dispatch(removeItem(item.id))}>Remove</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default CartItem
