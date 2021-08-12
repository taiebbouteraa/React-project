import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { itemMinus, itemPlus, removeItem } from '../../redux/actions'


const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const inc = () => {
        dispatch(itemPlus({
            counter: item.counter + 1,
            id: item.id
        }))
    }
    const dec = () => {
        dispatch(itemMinus({
            counter: item.counter - 1,
            id: item.id
        }))
    }

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
                            <Button onClick={() => dec()}>-</Button>
                            <div>{item.counter}</div>
                            <Button onClick={() => inc()}>+</Button>
                        </td>
                        <td style={{ width: 200 }}>{item.price * item.counter} $</td>
                        <td style={{ width: 200 }}><Button variant="danger" onClick={() => dispatch(removeItem(item.id))}>Remove</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default CartItem
