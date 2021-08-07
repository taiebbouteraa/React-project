import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { buyItem, addCompPhone } from '../../redux/actions'

const PhoneCard = ({ phone }) => {
    const dispatch = useDispatch()
    // compair phones
    // const [compPhone, setCompPhone] = useState({
    //     phoneImage: 'test',
    //     name: 'test',
    //     mainCamera: 'test',
    //     frontCamera: 'test',
    //     RAM: 'test',
    //     storage: 'test',
    //     battery: 'test',
    //     price: 'test',
    // })

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
                        }))} >Buy</Button>
                        <Button variant="primary" className='card-btn' onClick={() => dispatch(addCompPhone({
                            phoneImage: phone.phoneImage,
                            name: phone.name,
                            mainCamera: phone.mainCamera,
                            frontCamera: phone.frontCamera,
                            RAM: phone.RAM,
                            storage: phone.storage,
                            battery: phone.battery,
                            price: phone.price,
                        }))}>Compaire</Button>
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
