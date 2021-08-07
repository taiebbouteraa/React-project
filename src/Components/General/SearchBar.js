import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select';



const SearchBar = () => {
    const { phones } = useSelector(state => state)
    const options = phones.map((el) => ({ value: el.id, label: el.name }))
    const [redirecting, setRedirecting] = useState('')
    const handleChange = (e) => {
        setRedirecting(e);
    }
    return (
        <div className='search-link'>
            <Select
                placeholder='Search'
                options={options}
                value={redirecting}
                onChange={handleChange}
            />
            <Link to={`/specs/${redirecting.label}`}>
                <Button>
                    Go
                </Button>
            </Link>
        </div>
    )

}

export default SearchBar
