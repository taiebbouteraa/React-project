import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { buyItem } from '../../redux/actions'

const PhoneSpecs = ({ phone, match }) => {
    let spec = phone.filter(el => el.name === match.params.name)
    const dispatch = useDispatch()

    return (
        <div >
            {spec.map(el => (<div className='phone-details'>
                <div className='phone-specs'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`.${el.phoneImage}`} />
                        <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Brand : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.brand}</span></ListGroupItem>
                            <ListGroupItem>Main camera : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.mainCamera} MP</span> </ListGroupItem>
                            <ListGroupItem>Front camera : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.frontCamera} MP</span></ListGroupItem>
                            <ListGroupItem>RAM : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.RAM} MP</span> </ListGroupItem>
                            <ListGroupItem>Storage : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.storage} MP</span></ListGroupItem>
                            <ListGroupItem>Battery : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.battery} mAh</span></ListGroupItem>
                            <ListGroupItem>Price : <span style={{ color: 'red', fontFamily: 'cursive', fontWeight: 'bolder' }}>{el.price} $</span></ListGroupItem>
                        </ListGroup>

                        <Button onClick={() => dispatch(buyItem({
                            id: el.id,
                            phoneImage: el.phoneImage,
                            brand: el.brand,
                            name: el.name,
                            price: el.price,
                            counter: 1,
                        }))}>Buy Now</Button>
                    </Card></div>
                <div className='phone-vid'>
                    <h4>For further informations on the phone, watch the video below</h4>
                    < iframe width="720" height="480" src={el.trailer.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title={el.name}></iframe>
                </div>
            </div>))}
        </div>
    )
}

export default PhoneSpecs
