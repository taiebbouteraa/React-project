import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { filterApple, filterAsus, filterHuawei, filterLenovo, filterSamsung, removeCompPhone1, removeCompPhone2 } from '../../redux/actions'
import PhoneCard from './PhoneCard'

const AllPhones = () => {
    const { phones } = useSelector(state => state)
    const { filters } = useSelector(state => state)
    const { comp1, comp2 } = useSelector(state => state)
    const dispatch = useDispatch()

    //samsung filter
    let list = ''
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
    //compair vars

    return (
        <>
            <div className='brand-btns'>
                <Button variant={filters.samsung ? 'success' : 'primary'} className='brand-btn' onClick={() => dispatch(filterSamsung())} >Samsung</Button>
                <Button variant={filters.apple ? 'success' : 'primary'} className='brand-btn' onClick={() => dispatch(filterApple())}>Apple</Button>
                <Button variant={filters.huawei ? 'success' : 'primary'} className='brand-btn' onClick={() => dispatch(filterHuawei())}>Huawei</Button>
                <Button variant={filters.asus ? 'success' : 'primary'} className='brand-btn' onClick={() => dispatch(filterAsus())}>Asus</Button>
                <Button variant={filters.lenovo ? 'success' : 'primary'} className='brand-btn' onClick={() => dispatch(filterLenovo())}>Lenovo</Button>
            </div>
            <div className='all-phones'>
                {list}
            </div>
            <h1 className='compair-title'>Phone Compair</h1>
            <div className="container">
                <div className="row">
                    <div className="col-1" id='specIMG'>
                        specs
                    </div>
                    <div className="col">
                        <img src={comp1.phoneImage} alt={comp1.name} />
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col">
                        <img src={comp2.phoneImage} alt={comp2.name} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        Name
                    </div>
                    <div className="col">
                        {comp1.name}
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col">
                        {comp2.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        Main camera
                    </div>
                    <div className="col">
                        {comp1.mainCamera === '' ? '' : `${comp1.mainCamera} MP`}
                    </div>
                    <div className="col-1">
                        {(comp1.frontCamera && comp2.frontCamera) === '' ? ''
                            : comp1.mainCamera > comp2.mainCamera ? '>'
                                : comp1.mainCamera === comp2.mainCamera ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp2.mainCamera === '' ? '' : `${comp2.mainCamera} MP`}
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        Selfie camera
                    </div>
                    <div className="col">
                        {comp1.frontCamera === '' ? '' : `${comp1.frontCamera} MP`}
                    </div>
                    <div className="col-1">
                        {(comp1.frontCamera && comp2.frontCamera) === '' ? ''
                            : comp1.frontCamera > comp2.frontCamera ? '>'
                                : comp1.frontCamera === comp2.frontCamera ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp2.frontCamera === '' ? '' : `${comp2.frontCamera} MP`}
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        RAM
                    </div>
                    <div className="col">
                        {comp1.RAM === '' ? '' : `${comp1.RAM} GO`}
                    </div>
                    <div className="col-1">
                        {(comp1.RAM && comp2.RAM) === '' ? ''
                            : comp1.RAM > comp2.RAM ? '>'
                                : comp1.RAM === comp2.RAM ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp2.RAM === '' ? '' : `${comp2.RAM} GO`}
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        Storage
                    </div>
                    <div className="col">
                        {comp1.storage === '' ? '' : `${comp1.storage} GO`}
                    </div>
                    <div className="col-1">
                        {(comp1.storage && comp2.storage) === '' ? ''
                            : comp1.storage > comp2.storage ? '>'
                                : comp1.storage === comp2.storage ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp2.storage === '' ? '' : `${comp2.storage} GO`}
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        Battery
                    </div>
                    <div className="col">
                        {comp1.battery === '' ? '' : `${comp1.battery} mAh`}
                    </div>
                    <div className="col-1">
                        {(comp1.battery && comp2.battery) === '' ? ''
                            : comp1.battery > comp2.battery ? '>'
                                : comp1.battery === comp2.battery ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp2.battery === '' ? '' : `${comp2.battery} mAh`}
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        Price
                    </div>
                    <div className="col">
                        {comp1.price === '' ? '' : `${comp1.price} $`}
                    </div>
                    <div className="col-1">
                        {(comp1.price && comp2.price) === '' ? ''
                            : comp1.price > comp2.price ? '>'
                                : comp1.price === comp2.price ? '='
                                    : '<'}
                    </div>
                    <div className="col">
                        {comp2.price === '' ? '' : `${comp2.price} $`}
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col">
                        <Button variant='danger' onClick={() => dispatch(removeCompPhone1())} >Remove</Button>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col">
                        <Button variant='danger' onClick={() => dispatch(removeCompPhone2())}>Remove</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllPhones
