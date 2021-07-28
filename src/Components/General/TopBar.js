import React from 'react'
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <>
            <div >
                <Navbar bg="light" expand="lg">
                    <Link to='/'>
                        <Navbar.Brand href="#">logo</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className='nav-home'>
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link to='/'>
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                </Link>
                                <Link to='/phones'>
                                    <Nav.Link href="#action2">Phones</Nav.Link>
                                </Link>
                            </Nav>
                        </div>
                        <div className='nav-search'>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </div>
                        <div className='nav-store'>
                            <Link to='/store'>
                                <Nav.Link href="#action3">
                                    Store
                                </Nav.Link>
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default TopBar
