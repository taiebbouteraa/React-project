import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { filterApple, filterAsus, filterHuawei, filterLenovo, filterSamsung } from '../../redux/actions'
import PhoneCard from './PhoneCard'

const AllPhones = () => {
    const { phones } = useSelector(state => state)
    const { filters } = useSelector(state => state)
    const dispatch = useDispatch()
    let list = ''
    //samsung filter
    filters.samsung && !filters.apple && !filters.huawei && !filters.asus && !filters.lenovo
        ? list = phones.map((el) => (<PhoneCard phone={el} key={el.id} />)).filter((el) => el.props.phone.brand === 'Samsung')
        : !filters.samsung && filters.apple && !filters.huawei && !filters.asus && !filters.lenovo
            ? list = phones.map((el) => (<PhoneCard phone={el} key={el.id} />)).filter((el) => el.props.phone.brand === 'Apple')
            : !filters.samsung && !filters.apple && filters.huawei && !filters.asus && !filters.lenovo
                ? list = phones.map((el) => (<PhoneCard phone={el} key={el.id} />)).filter((el) => el.props.phone.brand === 'Huawei')
                : !filters.samsung && !filters.apple && !filters.huawei && filters.asus && !filters.lenovo
                    ? list = phones.map((el) => (<PhoneCard phone={el} key={el.id} />)).filter((el) => el.props.phone.brand === 'Asus')
                    : !filters.samsung && !filters.apple && !filters.huawei && !filters.asus && filters.lenovo
                        ? list = phones.map((el) => (<PhoneCard phone={el} key={el.id} />)).filter((el) => el.props.phone.brand === 'Lenovo')
                        : list = phones.map((el) => (<PhoneCard phone={el} key={el.id} />))
    return (
        <>
            <div className='brand-btns'>
                <Button variant="primary" className='brand-btn' onClick={() => dispatch(filterSamsung())} >Samsung</Button>
                <Button variant="primary" className='brand-btn' onClick={() => dispatch(filterApple())}>Apple</Button>
                <Button variant="primary" className='brand-btn' onClick={() => dispatch(filterHuawei())}>Huawei</Button>
                <Button variant="primary" className='brand-btn' onClick={() => dispatch(filterAsus())}>Asus</Button>
                <Button variant="primary" className='brand-btn' onClick={() => dispatch(filterLenovo())}>Lenovo</Button>
            </div>
            <div className='all-phones'>
                {list}
            </div>
        </>
    )
}

export default AllPhones
