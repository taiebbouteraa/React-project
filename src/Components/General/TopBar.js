import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import SearchBar from './SearchBar';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const TopBar = () => {

    return (
        <>
            <div >
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand >logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className='nav-home'>
                                <Link to='/'>
                                    <Nav.Link href="#action1">
                                        <HomeIcon />
                                    </Nav.Link>
                                </Link>
                                <Link to='/phones'>
                                    <Nav.Link href="#action2">
                                        <PhoneAndroidIcon />
                                    </Nav.Link>
                                </Link>
                            </div>
                            <div className='search-bar'>
                                <SearchBar />
                            </div>
                            <div className='nav-store'>
                                <Link to='/store'>
                                    <Nav.Link href="#action3">
                                        <ShoppingCartIcon />
                                    </Nav.Link>
                                </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default TopBar
