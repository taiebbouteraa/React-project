import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div style={{ marginBottom: 20 }}>
            this is the top bar
            <Link to='/'>
                <Button>Home</Button>
            </Link>
            <Link to='/phones'>
                <Button>Phones</Button>
            </Link>
            <Link to='/store'>
                <Button>Store</Button>
            </Link>
        </div>
    )
}

export default TopBar
