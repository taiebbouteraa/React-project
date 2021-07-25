import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const PhoneSpecs = ({ phone, match }) => {

    let spec = phone.filter(el => el.name === match.params.name)

    return (
        <div className='phone-specs'>
            {spec.map(el => (<Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`.${el.phoneImage}`} />
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Brand : <span>{el.brand}</span></ListGroupItem>
                    <ListGroupItem>Main camera : <span>{el.mainCamera}</span> MP</ListGroupItem>
                    <ListGroupItem>Front camera : <span>{el.frontCamera}</span> MP</ListGroupItem>
                    <ListGroupItem>RAM : <span>{el.RAM}</span> MP</ListGroupItem>
                    <ListGroupItem>Storage : <span>{el.storage}</span> MP</ListGroupItem>
                    <ListGroupItem>Battery : <span>{el.battery}</span> mAh</ListGroupItem>
                    <ListGroupItem>Price : <span>{el.price}</span> $</ListGroupItem>
                </ListGroup>
            </Card>))}
        </div>
    )
}

export default PhoneSpecs
