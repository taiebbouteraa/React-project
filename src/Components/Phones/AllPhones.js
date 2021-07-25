import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import PhoneCard from './PhoneCard'

const AllPhones = () => {
    const { phones } = useSelector(state => state)
    return (
        <>
            <div className='brand-btns'>
                <Button variant="primary" className='brand-btn'>Samsung</Button>
                <Button variant="primary" className='brand-btn'>Apple</Button>
                <Button variant="primary" className='brand-btn'>Huawei</Button>
                <Button variant="primary" className='brand-btn'>Asus</Button>
                <Button variant="primary" className='brand-btn'>Lenovo</Button>
            </div>
            <div className='all-phones'>
                {phones.map((el) => (<PhoneCard phone={el} key={el.id} />))}
            </div>
        </>
    )
}

export default AllPhones
