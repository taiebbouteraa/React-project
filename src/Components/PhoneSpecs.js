import { Button } from 'react-bootstrap'
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const PhoneSpecs = ({ phone, match }) => {

    let spec = phone.filter(el => el.name === match.params.name)

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
                            <ListGroupItem>Brand : <span>{el.brand}</span></ListGroupItem>
                            <ListGroupItem>Main camera : <span>{el.mainCamera}</span> MP</ListGroupItem>
                            <ListGroupItem>Front camera : <span>{el.frontCamera}</span> MP</ListGroupItem>
                            <ListGroupItem>RAM : <span>{el.RAM}</span> MP</ListGroupItem>
                            <ListGroupItem>Storage : <span>{el.storage}</span> MP</ListGroupItem>
                            <ListGroupItem>Battery : <span>{el.battery}</span> mAh</ListGroupItem>
                            <ListGroupItem>Price : <span>{el.price}</span> $</ListGroupItem>
                        </ListGroup>
                        <Button>Buy Now</Button>
                    </Card></div>
                <div className='phone-vid'>
                    <h4>For further informations on the phone, watch the video below</h4>
                    < iframe width="720" height="480" src={el.trailer.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </div>
            </div>))}


        </div>
    )
}

export default PhoneSpecs
