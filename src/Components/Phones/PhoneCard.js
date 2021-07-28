import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { buyItem } from '../../redux/actions'

const PhoneCard = ({ phone }) => {
    const dispatch = useDispatch()
    return (
        <div className='individual-phone'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={phone.phoneImage} />
                <Card.Body>
                    <Card.Title>{phone.name}</Card.Title>
                    <Card.Text>
                        {phone.price} $
                    </Card.Text>
                    <div className='card-btns'>
                        <Button variant="success" className='card-btn' onClick={() => dispatch(buyItem({
                            id: phone.id,
                            phoneImage: phone.phoneImage,
                            brand: phone.brand,
                            name: phone.name,
                            price: phone.price,
                            counter: 1,
                        }))}>Buy</Button>
                        <Button variant="primary" className='card-btn'>Compaire</Button>
                        <Link to={`/specs/${phone.name}`} >
                            <Button variant="warning" className='card-btn'>Details</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PhoneCard
